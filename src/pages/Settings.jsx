import React, { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import { useGoals } from "../context/useGoals";
import { useAuth } from "../context/useAuth";

const Settings = () => {
  const { settings, updateSettings } = useGoals();
  const { updatePassword, updateProfile } = useAuth();
  const [profile, setProfile] = useState(settings.profile);
  const [notifications, setNotifications] = useState(settings.notifications);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setProfile(settings.profile);
    setNotifications(settings.notifications);
  }, [settings]);

  const handleProfileChange = ({ target }) => {
    setProfile((previous) => ({
      ...previous,
      [target.name]: target.value,
    }));
  };

  const handleNotificationChange = ({ target }) => {
    setNotifications((previous) => ({
      ...previous,
      [target.name]: target.checked,
    }));
  };

  const handleSaveChanges = () => {
    const fullName = `${profile.firstName} ${profile.lastName}`.trim();
    const result = updateProfile({ fullName, email: profile.email });

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    updateSettings({
      profile,
      notifications,
    });
    setMessage("Settings updated successfully.");
  };

  const handleChangePassword = () => {
    const currentPassword = window.prompt("Enter your current password.");

    if (currentPassword === null) {
      return;
    }

    const newPassword = window.prompt("Enter your new password.");

    if (newPassword === null) {
      return;
    }

    if (newPassword.length < 6) {
      setMessage("New password must be at least 6 characters long.");
      return;
    }

    const result = updatePassword({ currentPassword, newPassword });
    setMessage(result.success ? "Password updated successfully." : result.message);
  };

  const handleManagePin = () => {
    const pin = window.prompt("Enter a 4-digit PIN to remember for this device.");

    if (pin === null) {
      return;
    }

    if (!/^\d{4}$/.test(pin)) {
      setMessage("PIN must be exactly 4 digits.");
      return;
    }

    window.localStorage.setItem("savefocus_device_pin", pin);
    setMessage("PIN saved for this device.");
  };

  const openSupportLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <DashboardLayout>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-sm text-gray-500">
            Manage your account and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
          <div className="flex flex-col gap-6">
            <Card className="w-full">
              <h3 className="font-semibold text-gray-800">Account Settings</h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="firstName"
                  className="rounded-lg bg-gray-100 p-3"
                  placeholder="Isaac"
                  value={profile.firstName}
                  onChange={handleProfileChange}
                />
                <input
                  name="lastName"
                  className="rounded-lg bg-gray-100 p-3"
                  placeholder="Martins"
                  value={profile.lastName}
                  onChange={handleProfileChange}
                />
              </div>

              <input
                name="email"
                className="w-full rounded-lg bg-gray-100 p-3"
                placeholder="isaac@mail.com"
                value={profile.email}
                onChange={handleProfileChange}
              />
              <input
                name="phone"
                className="w-full rounded-lg bg-gray-100 p-3"
                placeholder="+1 234 567 8900"
                value={profile.phone}
                onChange={handleProfileChange}
              />
              <input
                name="address"
                className="w-full rounded-lg bg-gray-100 p-3"
                placeholder="123 Main St, City, Country"
                value={profile.address}
                onChange={handleProfileChange}
              />

              <button
                type="button"
                onClick={handleSaveChanges}
                className="w-fit rounded-lg bg-[#F54900] px-4 py-2 text-white"
              >
                Save Changes
              </button>

              {message ? <p className="text-sm text-gray-500">{message}</p> : null}
            </Card>

            <Card className="w-full">
              <h3 className="font-semibold text-gray-800">Notifications</h3>

              <div className="flex items-center justify-between gap-4">
                <span>Push Notifications</span>
                <input
                  name="push"
                  type="checkbox"
                  checked={notifications.push}
                  onChange={handleNotificationChange}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <span>Reminder Notifications</span>
                <input
                  name="reminders"
                  type="checkbox"
                  checked={notifications.reminders}
                  onChange={handleNotificationChange}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <span>Email Updates</span>
                <input
                  name="emailUpdates"
                  type="checkbox"
                  checked={notifications.emailUpdates}
                  onChange={handleNotificationChange}
                />
              </div>
            </Card>

            <Card className="w-full">
              <h3 className="font-semibold text-gray-800">Security</h3>

              <button
                type="button"
                onClick={handleChangePassword}
                className="rounded-lg border border-gray-200 p-3 text-left"
              >
                Change Password
              </button>

              <button
                type="button"
                onClick={handleManagePin}
                className="rounded-lg border border-gray-200 p-3 text-left"
              >
                Manage PIN
              </button>
            </Card>
          </div>

          <div className="flex flex-col gap-6">
            <Card className="w-full">
              <h3 className="font-semibold text-gray-800">Preferences</h3>

              <div>
                <label className="text-sm text-gray-500">Currency</label>
                <input
                  className="mt-1 w-full rounded-lg bg-gray-100 p-3"
                  value="USD - US Dollar"
                  readOnly
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Language</label>
                <input
                  className="mt-1 w-full rounded-lg bg-gray-100 p-3"
                  value="English"
                  readOnly
                />
              </div>
            </Card>

            <Card className="w-full">
              <h3 className="font-semibold text-gray-800">Support</h3>

              <button
                type="button"
                onClick={() => openSupportLink("https://support.google.com")}
                className="rounded-lg border border-gray-200 p-3 text-left"
              >
                Help Center
              </button>

              <button
                type="button"
                onClick={() => openSupportLink("mailto:support@savefocus.app")}
                className="rounded-lg border border-gray-200 p-3 text-left"
              >
                Contact Support
              </button>

              <button
                type="button"
                onClick={() => openSupportLink("https://www.privacypolicies.com")}
                className="rounded-lg border border-gray-200 p-3 text-left"
              >
                Privacy Policy
              </button>

              <button
                type="button"
                onClick={() => openSupportLink("https://www.termsfeed.com")}
                className="rounded-lg border border-gray-200 p-3 text-left"
              >
                Terms of Service
              </button>
            </Card>
            
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
