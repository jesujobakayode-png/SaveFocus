import goalsImage from "../assets/Goals.svg";
import lockGoalImage from "../assets/LockGoal.svg";

const goalVisuals = {
  car: { image: lockGoalImage, label: "Car" },
  plane: { image: goalsImage, label: "Travel" },
  school: { image: goalsImage, label: "School" },
  heart: { image: lockGoalImage, label: "Health" },
  home: { image: lockGoalImage, label: "Home" },
};

export const getGoalVisual = (iconKey) => goalVisuals[iconKey] || goalVisuals.plane;

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);

export const formatDateDisplay = (value) => {
  if (!value) {
    return "No deadline";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "No deadline";
  }

  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
};

export const formatShortDate = (value) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const getGoalProgress = (goal) => {
  if (!goal?.targetAmount) {
    return 0;
  }

  return Math.min(100, Math.round(((goal.currentBalance || 0) / goal.targetAmount) * 100));
};

export const getGoalStatus = (goal) => {
  if (!goal) {
    return "Unknown";
  }

  if (goal.currentBalance >= goal.targetAmount) {
    return "Completed";
  }

  if (goal.locked) {
    return "Locked";
  }

  return "Active";
};

export const getRemainingAmount = (goal) =>
  Math.max(0, (goal?.targetAmount || 0) - (goal?.currentBalance || 0));

export const getPeriodsLeft = (goal) => {
  if (!goal?.deadline) {
    return 1;
  }

  const today = new Date();
  const deadline = new Date(goal.deadline);
  const diffInDays = Math.max(
    1,
    Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  );

  if (goal.savingPlan === "daily") {
    return diffInDays;
  }

  if (goal.savingPlan === "weekly") {
    return Math.max(1, Math.ceil(diffInDays / 7));
  }

  return Math.max(1, Math.ceil(diffInDays / 30));
};

export const getRecurringContribution = (goal) => {
  const remaining = getRemainingAmount(goal);
  const periodsLeft = getPeriodsLeft(goal);

  if (!remaining || !periodsLeft) {
    return 0;
  }

  return Math.ceil(remaining / periodsLeft);
};

export const getContributionLabel = (savingPlan) => {
  if (savingPlan === "daily") {
    return "Daily Target";
  }

  if (savingPlan === "weekly") {
    return "Weekly Target";
  }

  return "Monthly Target";
};

export const getCurrentMonthTotal = (goal) => {
  const today = new Date();

  return (goal?.history || []).reduce((total, item) => {
    const itemDate = new Date(item.date);

    if (
      itemDate.getMonth() === today.getMonth() &&
      itemDate.getFullYear() === today.getFullYear()
    ) {
      return total + item.amount;
    }

    return total;
  }, 0);
};

export const getMonthlyTarget = (goal) => {
  const recurring = getRecurringContribution(goal);

  if (goal?.savingPlan === "daily") {
    return recurring * 30;
  }

  if (goal?.savingPlan === "weekly") {
    return recurring * 4;
  }

  return recurring;
};
