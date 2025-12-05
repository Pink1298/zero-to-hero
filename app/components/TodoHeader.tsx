export function TodoHeader({ totalCount }: { totalCount: number }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Quản lý công việc</p>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Danh sách công việc
          </h1>
          <p className="mt-1 text-slate-500">Tổ chức, theo dõi và hoàn thành công việc hàng ngày</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 px-5 py-3 border border-blue-100">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Tổng cộng</p>
          <p className="mt-1 text-3xl font-bold text-blue-600">{totalCount}</p>
        </div>
      </div>
    </div>
  );
}
