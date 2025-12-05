interface TodoStatsProps {
  completed: number;
  pending: number;
  total: number;
}

export function TodoStats({ completed, pending, total }: TodoStatsProps) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-4">
        <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Hoàn thành</p>
        <p className="mt-2 text-2xl font-bold text-emerald-600">{completed}</p>
      </div>
      <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-4">
        <p className="text-xs font-semibold text-orange-700 uppercase tracking-wide">Chưa làm</p>
        <p className="mt-2 text-2xl font-bold text-orange-600">{pending}</p>
      </div>
      <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-4">
        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Tỉ lệ</p>
        <p className="mt-2 text-2xl font-bold text-blue-600">{percentage}%</p>
      </div>
    </div>
  );
}
