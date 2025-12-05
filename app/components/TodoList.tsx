type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
};

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number, currentStatus: boolean) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  selectedDate: string;
}

export function TodoList({ todos, onToggle, onDelete, selectedDate }: TodoListProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const isToday = date.toDateString() === today.toDateString();

    const weekDays = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    const dayName = weekDays[date.getDay()];
    const dateFormatted = date.toLocaleDateString('vi-VN');

    return isToday ? `Hôm nay - ${dateFormatted}` : `${dayName} - ${dateFormatted}`;
  };

  if (todos.length === 0) {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-100 p-4">
          <h2 className="text-lg font-bold text-slate-900 mb-1">{formatDate(selectedDate)}</h2>
          <p className="text-sm text-slate-600">0 công việc</p>
        </div>
        <div className="rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
          <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="mt-4 text-slate-500 font-medium">Không có công việc vào ngày này</p>
          <p className="text-xs text-slate-400">Hãy thêm công việc mới để bắt đầu 🚀</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-100 p-4">
        <h2 className="text-lg font-bold text-slate-900 mb-1">{formatDate(selectedDate)}</h2>
        <p className="text-sm text-slate-600">{todos.length} công việc</p>
      </div>

      <ul className="grid gap-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`group relative overflow-hidden rounded-xl border-2 p-4 transition-all duration-300 ${
              todo.completed
                ? 'border-emerald-100 bg-gradient-to-r from-emerald-50/80 to-teal-50/80'
                : 'border-slate-100 bg-white/80 hover:border-slate-200 hover:shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1 overflow-hidden">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id, todo.completed)}
                  className="h-6 w-6 cursor-pointer rounded-lg border-2 border-slate-300 text-blue-600 transition-all checked:border-emerald-500 checked:bg-emerald-500"
                />
                <span
                  className={`flex-1 truncate text-base font-medium transition-all ${
                    todo.completed ? 'line-through text-slate-400' : 'text-slate-800 group-hover:text-slate-900'
                  }`}
                >
                  {todo.title}
                </span>
              </div>

              <button
                onClick={() => onDelete(todo.id)}
                className="opacity-0 group-hover:opacity-100 transition-all rounded-lg bg-red-50 p-2 text-red-500 hover:bg-red-100 hover:text-red-700"
                title="Xóa"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3H4a1 1 0 000 2h16a1 1 0 000-2h-3z"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
