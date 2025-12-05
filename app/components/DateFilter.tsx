import React from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
};

interface DateFilterProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
  todos: Todo[];
}

export function DateFilter({ selectedDate, onDateChange, todos }: DateFilterProps) {
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  // Lấy 7 ngày gần nhất
  const getNext7Days = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      days.push(date.toISOString().split("T")[0]);
    }
    return days;
  };

  const next7Days = getNext7Days();

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
        <svg className="inline h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Lọc theo ngày
      </label>

      {/* Quick Select Buttons - 7 ngày gần nhất */}
      <div className="flex flex-wrap gap-2">
        {next7Days.map((date) => {
          const dateObj = new Date(date + "T00:00:00");
          const isSelected = date === selectedDate;
          const hasTodos = todos.some((t) => new Date(t.createdAt).toISOString().split("T")[0] === date);

          const weekDays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
          const dayName = weekDays[dateObj.getDay()];

          return (
            <button
              key={date}
              onClick={() => onDateChange(date)}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 flex flex-col items-center ${
                isSelected
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                  : hasTodos
                  ? "bg-slate-200 text-slate-800 hover:bg-slate-300"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <div className="text-xs font-bold">{dayName}</div>
              <div className="text-xs">{dateObj.getDate()}</div>
              {hasTodos && <div className="text-xs mt-0.5">●</div>}
            </button>
          );
        })}
      </div>

      {/* Date Picker */}
      <div className="relative">
        <button
          onClick={() => setShowDatePicker(!showDatePicker)}
          className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-left font-medium text-slate-700 transition-all duration-200 hover:border-blue-500 flex items-center justify-between"
        >
          <span>📅 {new Date(selectedDate + "T00:00:00").toLocaleDateString("vi-VN")}</span>
          <svg className={`h-5 w-5 transition-transform ${showDatePicker ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        {showDatePicker && (
          <div className="absolute top-full left-0 mt-2 z-50 w-full rounded-xl border-2 border-slate-200 bg-white shadow-xl p-4">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                onDateChange(e.target.value);
                setShowDatePicker(false);
              }}
              className="w-full rounded-lg border-2 border-slate-200 px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
            />
            <div className="mt-4 grid grid-cols-7 gap-1">
              {Array.from({ length: 30 }, (_, i) => {
                const date = new Date();
                date.setDate(date.getDate() - 15 + i);
                const dateStr = date.toISOString().split("T")[0];
                const isSelected = dateStr === selectedDate;
                const hasTodos = todos.some((t) => new Date(t.createdAt).toISOString().split("T")[0] === dateStr);

                return (
                  <button
                    key={dateStr}
                    onClick={() => {
                      onDateChange(dateStr);
                      setShowDatePicker(false);
                    }}
                    className={`py-2 rounded text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                        : hasTodos
                        ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
