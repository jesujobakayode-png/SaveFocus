import React, { createContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./useAuth";
import {
  formatDateDisplay,
  getCurrentMonthTotal,
  getGoalProgress,
  getGoalStatus,
  getRecurringContribution,
} from "../utils/goals";

const GoalsContext = createContext(null);

const buildDefaultState = (currentUser) => {
  const today = new Date();
  const addDays = (days) => {
    const nextDate = new Date(today);
    nextDate.setDate(nextDate.getDate() + days);
    return nextDate.toISOString();
  };

  return {
    draft: {
      title: "",
      iconKey: "plane",
      targetAmount: 2000,
      deadline: addDays(120),
      savingPlan: "weekly",
    },
    goals: [
      {
        id: crypto.randomUUID(),
        title: "Dream Vacation",
        iconKey: "plane",
        targetAmount: 2000,
        currentBalance: 1300,
        deadline: addDays(180),
        savingPlan: "weekly",
        locked: false,
        createdAt: addDays(-35),
        history: [
          { id: crypto.randomUUID(), amount: 300, date: addDays(-25) },
          { id: crypto.randomUUID(), amount: 500, date: addDays(-14) },
          { id: crypto.randomUUID(), amount: 500, date: addDays(-2) },
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "House Rent",
        iconKey: "home",
        targetAmount: 5000,
        currentBalance: 2200,
        deadline: addDays(240),
        savingPlan: "monthly",
        locked: true,
        createdAt: addDays(-60),
        history: [
          { id: crypto.randomUUID(), amount: 800, date: addDays(-40) },
          { id: crypto.randomUUID(), amount: 1400, date: addDays(-8) },
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Emergency Health Fund",
        iconKey: "heart",
        targetAmount: 1500,
        currentBalance: 1500,
        deadline: addDays(-4),
        savingPlan: "weekly",
        locked: false,
        createdAt: addDays(-90),
        history: [
          { id: crypto.randomUUID(), amount: 500, date: addDays(-70) },
          { id: crypto.randomUUID(), amount: 500, date: addDays(-45) },
          { id: crypto.randomUUID(), amount: 500, date: addDays(-12) },
        ],
      },
    ],
    settings: {
      profile: {
        firstName: currentUser?.fullName?.split(" ")[0] || "",
        lastName: currentUser?.fullName?.split(" ").slice(1).join(" ") || "",
        email: currentUser?.email || "",
        phone: "",
        address: "",
      },
      notifications: {
        push: true,
        reminders: true,
        emailUpdates: false,
      },
      preferences: {
        currency: "USD - US Dollar",
        language: "English",
      },
    },
  };
};

const getStorageKey = (userId) => `savefocus_app_state_${userId}`;

const parseStoredState = (key) => {
  const storedValue = window.localStorage.getItem(key);

  if (!storedValue) {
    return null;
  }

  try {
    return JSON.parse(storedValue);
  } catch {
    return null;
  }
};

export const GoalsProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [state, setState] = useState(() => {
    if (!currentUser) {
      return buildDefaultState(null);
    }

    const storageKey = getStorageKey(currentUser.id);
    const storedState = parseStoredState(storageKey);
    const fallbackState = buildDefaultState(currentUser);

    if (!storedState) {
      return fallbackState;
    }

    return {
      ...fallbackState,
      ...storedState,
      settings: {
        ...fallbackState.settings,
        ...storedState.settings,
        profile: {
          ...fallbackState.settings.profile,
          ...storedState.settings?.profile,
          email: currentUser.email,
          firstName:
            storedState.settings?.profile?.firstName ||
            currentUser.fullName?.split(" ")[0] ||
            "",
          lastName:
            storedState.settings?.profile?.lastName ||
            currentUser.fullName?.split(" ").slice(1).join(" ") ||
            "",
        },
      },
    };
  });

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    window.localStorage.setItem(getStorageKey(currentUser.id), JSON.stringify(state));
  }, [currentUser, state]);

  const setDraftField = (field, value) => {
    setState((previous) => ({
      ...previous,
      draft: {
        ...previous.draft,
        [field]: value,
      },
    }));
  };

  const createGoal = () => {
    let newGoalId = null;

    setState((previous) => {
      const newGoal = {
        id: crypto.randomUUID(),
        title: previous.draft.title.trim(),
        iconKey: previous.draft.iconKey,
        targetAmount: Number(previous.draft.targetAmount),
        currentBalance: 0,
        deadline: previous.draft.deadline,
        savingPlan: previous.draft.savingPlan,
        locked: false,
        createdAt: new Date().toISOString(),
        history: [],
      };

      newGoalId = newGoal.id;

      return {
        ...previous,
        goals: [newGoal, ...previous.goals],
        draft: buildDefaultState(currentUser).draft,
      };
    });

    return newGoalId;
  };

  const addFunds = (goalId, amount) => {
    const parsedAmount = Number(amount);

    if (!parsedAmount || parsedAmount <= 0) {
      return { success: false, message: "Enter a valid amount." };
    }

    setState((previous) => ({
      ...previous,
      goals: previous.goals.map((goal) =>
        goal.id === goalId
          ? {
              ...goal,
              currentBalance: goal.currentBalance + parsedAmount,
              history: [
                {
                  id: crypto.randomUUID(),
                  amount: parsedAmount,
                  date: new Date().toISOString(),
                },
                ...goal.history,
              ],
            }
          : goal
      ),
    }));

    return { success: true };
  };

  const updateGoalDeadline = (goalId, deadline) => {
    const parsedDate = new Date(deadline);

    if (Number.isNaN(parsedDate.getTime())) {
      return { success: false, message: "Enter a valid date." };
    }

    setState((previous) => ({
      ...previous,
      goals: previous.goals.map((goal) =>
        goal.id === goalId ? { ...goal, deadline: parsedDate.toISOString() } : goal
      ),
    }));

    return { success: true };
  };

  const toggleGoalLock = (goalId) => {
    let updatedGoal = null;

    setState((previous) => ({
      ...previous,
      goals: previous.goals.map((goal) => {
        if (goal.id !== goalId) {
          return goal;
        }

        updatedGoal = { ...goal, locked: !goal.locked };
        return updatedGoal;
      }),
    }));

    return updatedGoal;
  };

  const updateSettings = (updates) => {
    setState((previous) => ({
      ...previous,
      settings: {
        ...previous.settings,
        ...updates,
        profile: {
          ...previous.settings.profile,
          ...updates.profile,
        },
        notifications: {
          ...previous.settings.notifications,
          ...updates.notifications,
        },
        preferences: {
          ...previous.settings.preferences,
          ...updates.preferences,
        },
      },
    }));
  };

  const derivedGoals = useMemo(
    () =>
      state.goals.map((goal) => ({
        ...goal,
        progress: getGoalProgress(goal),
        status: getGoalStatus(goal),
        nextContribution: getRecurringContribution(goal),
        deadlineLabel: formatDateDisplay(goal.deadline),
        monthTotal: getCurrentMonthTotal(goal),
      })),
    [state.goals]
  );

  const stats = useMemo(() => {
    const totalSaved = derivedGoals.reduce((total, goal) => total + goal.currentBalance, 0);
    const completedGoals = derivedGoals.filter((goal) => goal.status === "Completed").length;
    const activeGoals = derivedGoals.filter((goal) => goal.status !== "Completed").length;
    const thisMonth = derivedGoals.reduce((total, goal) => total + goal.monthTotal, 0);

    return {
      totalSaved,
      completedGoals,
      activeGoals,
      thisMonth,
    };
  }, [derivedGoals]);

  const recentActivity = useMemo(
    () =>
      derivedGoals
        .flatMap((goal) =>
          (goal.history || []).map((item) => ({
            ...item,
            goalId: goal.id,
            goalTitle: goal.title,
          }))
        )
        .sort((first, second) => new Date(second.date) - new Date(first.date))
        .slice(0, 8),
    [derivedGoals]
  );

  const featuredGoal = useMemo(
    () => derivedGoals.find((goal) => goal.status !== "Completed") || derivedGoals[0] || null,
    [derivedGoals]
  );

  return (
    <GoalsContext.Provider
      value={{
        draft: state.draft,
        goals: derivedGoals,
        settings: state.settings,
        stats,
        recentActivity,
        featuredGoal,
        setDraftField,
        createGoal,
        addFunds,
        updateGoalDeadline,
        toggleGoalLock,
        updateSettings,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export default GoalsContext;
