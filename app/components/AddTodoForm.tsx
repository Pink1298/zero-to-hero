interface AddTodoFormProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export function AddTodoForm({ input, onInputChange, onSubmit, loading }: AddTodoFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        type="text"
        className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        placeholder="Nhập công việc mới..."
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 hover:scale-105 group"
      >
        <span className="relative flex items-center gap-2">
          <svg className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          {loading ? 'Thêm...' : 'Thêm'}
        </span>
      </button>
    </form>
  );
}
