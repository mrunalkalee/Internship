export default function NotificationItem({ notification }) {
  const { title, message, time, read } = notification;

  return (
    <li
      className={`px-4 py-3 transition-colors duration-150 ${
        read
          ? "bg-white dark:bg-slate-800"
          : "bg-brand-50/60 dark:bg-brand-900/20"
      }`}
    >
      <div className="flex items-start gap-2.5">
        {/* Unread indicator dot — reserves space either way so read items
            don't shift the text over. */}
        <span
          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
            read ? "bg-transparent" : "bg-brand-600"
          }`}
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1">
          <p
            className={`text-sm ${
              read
                ? "font-medium text-slate-600 dark:text-slate-300"
                : "font-semibold text-slate-900 dark:text-slate-100"
            }`}
          >
            {title}
          </p>
          <p
            className={`mt-0.5 text-sm ${
              read
                ? "text-slate-400 dark:text-slate-500"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            {message}
          </p>
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
            {time}
          </p>
        </div>
      </div>
    </li>
  );
}