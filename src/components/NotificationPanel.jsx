import { useEffect, useRef } from "react";
import NotificationItem from "./NotificationItem.jsx";

/**
 * Dropdown/slide panel of notifications, anchored to the bell button in
 * the Navbar. On desktop it's a right-aligned dropdown; on mobile it
 * becomes a full-width panel that stays inside the viewport.
 */
export default function NotificationPanel({ notifications, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Delay attaching the outside-click listener by a tick so the click
    // that opened the panel (on the bell button) doesn't close it again.
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label="Notifications"
      // UI fix — the panel is now width-constrained and inset from the
      // viewport edge on mobile (instead of a fixed right-0 dropdown),
      // so it can no longer overflow the screen on small devices.
      className="fixed inset-x-4 top-[4.5rem] z-50 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card-hover sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:w-80 dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-700">
        <p className="font-heading text-sm font-semibold text-slate-900 dark:text-slate-100">
          Notifications
        </p>
      </div>

      {notifications.length > 0 ? (
        <ul className="max-h-96 divide-y divide-slate-100 overflow-y-auto overflow-x-hidden dark:divide-slate-700">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </ul>
      ) : (
        <p className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
          You&apos;re all caught up.
        </p>
      )}
    </div>
  );
}