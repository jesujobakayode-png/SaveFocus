import React, { createContext, useEffect, useState } from "react";

const USERS_STORAGE_KEY = "savefocus_users";
const SESSION_STORAGE_KEY = "savefocus_session";

const AuthContext = createContext(null);

const parseStoredValue = (key, fallback) => {
  if (typeof window === "undefined") {
    return fallback;
  }

  const storedValue = window.localStorage.getItem(key);

  if (!storedValue) {
    return fallback;
  }

  try {
    return JSON.parse(storedValue);
  } catch {
    return fallback;
  }
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => parseStoredValue(USERS_STORAGE_KEY, []));
  const [currentUser, setCurrentUser] = useState(() =>
    parseStoredValue(SESSION_STORAGE_KEY, null)
  );

  useEffect(() => {
    window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      window.localStorage.setItem(
        SESSION_STORAGE_KEY,
        JSON.stringify(currentUser)
      );
      return;
    }

    window.localStorage.removeItem(SESSION_STORAGE_KEY);
  }, [currentUser]);

  const signup = ({ fullName, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = users.find((user) => user.email === normalizedEmail);

    if (existingUser) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser = {
      id: crypto.randomUUID(),
      fullName: fullName.trim(),
      email: normalizedEmail,
      password,
    };

    setUsers((previousUsers) => [...previousUsers, newUser]);
    setCurrentUser(newUser);

    return { success: true };
  };

  const signin = ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    const matchedUser = users.find(
      (user) => user.email === normalizedEmail && user.password === password
    );

    if (!matchedUser) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    setCurrentUser(matchedUser);
    return { success: true };
  };

  const signout = () => {
    setCurrentUser(null);
  };

  const updateProfile = ({ fullName, email }) => {
    if (!currentUser) {
      return {
        success: false,
        message: "No active user session found.",
      };
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = users.find(
      (user) => user.email === normalizedEmail && user.id !== currentUser.id
    );

    if (existingUser) {
      return {
        success: false,
        message: "That email address is already in use.",
      };
    }

    const updatedUser = {
      ...currentUser,
      fullName: fullName.trim(),
      email: normalizedEmail,
    };

    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === currentUser.id ? { ...user, ...updatedUser } : user
      )
    );
    setCurrentUser(updatedUser);

    return { success: true };
  };

  const updatePassword = ({ currentPassword, newPassword }) => {
    if (!currentUser) {
      return {
        success: false,
        message: "No active user session found.",
      };
    }

    if (currentUser.password !== currentPassword) {
      return {
        success: false,
        message: "Current password is incorrect.",
      };
    }

    const updatedUser = {
      ...currentUser,
      password: newPassword,
    };

    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === currentUser.id ? updatedUser : user
      )
    );
    setCurrentUser(updatedUser);

    return { success: true };
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: Boolean(currentUser),
        signin,
        signup,
        signout,
        updateProfile,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
