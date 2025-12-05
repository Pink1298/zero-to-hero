/**
 * RenderMethodCard - Component hiển thị thông tin về phương pháp rendering
 */

import React from 'react';
import { Badge } from './Badge';
import { Card } from './Card';

export interface RenderMethodCardProps {
  method: 'CSR' | 'SSR' | 'SSG' | 'ISR';
  title: string;
  description: string;
  when: string;
  pros: string[];
  cons: string[];
  code: string;
  renderTime?: string;
}

export function RenderMethodCard({
  method,
  title,
  description,
  when,
  pros,
  cons,
  code,
  renderTime,
}: RenderMethodCardProps) {
  const methodColors = {
    CSR: { badge: 'blue' as const, bg: 'bg-blue-50', border: 'border-blue-200', link: '/demo-render/csr' },
    SSR: { badge: 'emerald' as const, bg: 'bg-emerald-50', border: 'border-emerald-200', link: '/demo-render/ssr' },
    SSG: { badge: 'purple' as const, bg: 'bg-purple-50', border: 'border-purple-200', link: '/demo-render/ssg' },
    ISR: { badge: 'orange' as const, bg: 'bg-orange-50', border: 'border-orange-200', link: '#' },
  };

  const config = methodColors[method];

  return (
    <Card variant="default" padding="lg" className="h-full">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge color={config.badge} size="md">
              {method}
            </Badge>
            <h3 className="text-xl font-bold text-slate-900 mt-2">{title}</h3>
          </div>
          {renderTime && (
            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Render time</p>
              <p className="text-lg font-bold text-slate-900">{renderTime}</p>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-700">{description}</p>

        {/* When to use */}
        <div className={`rounded-lg ${config.bg} border ${config.border} p-3`}>
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Khi nào dùng?</p>
          <p className="text-sm text-slate-800">{when}</p>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-2">✓ Ưu điểm</p>
            <ul className="space-y-1 text-xs text-slate-700">
              {pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-orange-700 uppercase tracking-wide mb-2">✗ Nhược điểm</p>
            <ul className="space-y-1 text-xs text-slate-700">
              {cons.map((con, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-orange-600 mt-0.5">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Code example */}
        <div>
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">Code snippet</p>
          <pre className="rounded-lg bg-slate-900 text-slate-100 p-3 text-xs overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>

        {/* Demo Link */}
        {config.link !== '#' && (
          <div className="pt-2">
            <a
              href={config.link}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Xem demo trực tiếp</span>
              <span>→</span>
            </a>
          </div>
        )}
      </div>
    </Card>
  );
}

/**
 * LiveRenderDemo - Component thực tế để demo CSR
 */
export function LiveRenderDemo() {
  const [count, setCount] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <Badge color="blue" size="sm">
            CSR - Client Side
          </Badge>
          <h4 className="font-bold text-slate-900 mt-1">Live Demo: Client Rendering</h4>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-600">Mounted?</p>
          <p className="text-sm font-bold">{mounted ? '✓ Yes (CSR)' : 'Loading...'}</p>
        </div>
      </div>
      <p className="text-sm text-slate-700">
        Component này render trên client. Count chỉ hoạt động sau khi JavaScript load.
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition"
        >
          Click me: {count}
        </button>
        <p className="text-xs text-slate-600">State chỉ tồn tại trên client</p>
      </div>
    </div>
  );
}

/**
 * ServerTimeDisplay - Component để demo SSR (hiển thị server time)
 */
export interface ServerTimeDisplayProps {
  serverTime: string;
  method: 'SSR' | 'SSG';
}

export function ServerTimeDisplay({ serverTime, method }: ServerTimeDisplayProps) {
  const [clientTime, setClientTime] = React.useState('');

  React.useEffect(() => {
    setClientTime(new Date().toLocaleString('vi-VN'));
  }, []);

  const methodConfig = {
    SSR: { color: 'emerald' as const, label: 'Server-Side Render' },
    SSG: { color: 'purple' as const, label: 'Static Generation' },
  };

  const config = methodConfig[method];

  return (
    <div className={`rounded-xl border-2 ${method === 'SSR' ? 'border-emerald-200 bg-emerald-50' : 'border-purple-200 bg-purple-50'} p-5 space-y-3`}>
      <div>
        <Badge color={config.color} size="sm">
          {method}
        </Badge>
        <h4 className="font-bold text-slate-900 mt-1">{config.label}</h4>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-white border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Server Time</p>
          <p className="text-sm font-mono font-bold text-slate-900 mt-1">{serverTime}</p>
          <p className="text-xs text-slate-500 mt-1">
            {method === 'SSR' ? 'Mỗi request render lại' : 'Cố định tại build time'}
          </p>
        </div>
        <div className="rounded-lg bg-white border border-slate-200 p-3">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Client Time</p>
          <p className="text-sm font-mono font-bold text-slate-900 mt-1">{clientTime || 'Hydrating...'}</p>
          <p className="text-xs text-slate-500 mt-1">Cập nhật khi component mount</p>
        </div>
      </div>
      <p className="text-xs text-slate-700">
        {method === 'SSR'
          ? 'Refresh trang này, server time sẽ cập nhật vì SSR render lại mỗi request.'
          : 'Server time cố định vì trang này được generate tại build time (SSG).'}
      </p>
    </div>
  );
}

/**
 * RenderComparisonTable - Bảng so sánh các phương pháp
 */
export function RenderComparisonTable() {
  const data = [
    { criterion: 'Nơi render HTML', CSR: 'Browser', SSR: 'Server', SSG: 'Build time', ISR: 'Build + Runtime' },
    { criterion: 'Tốc độ initial load', CSR: '🐢 Chậm', SSR: '⚡ Nhanh', SSG: '🚀 Cực nhanh', ISR: '🚀 Cực nhanh' },
    { criterion: 'SEO', CSR: '❌ Kém', SSR: '✅ Tốt', SSG: '✅ Tốt', ISR: '✅ Tốt' },
    { criterion: 'Nội dung động', CSR: '✅ Tốt', SSR: '✅ Tốt', SSG: '❌ Khó', ISR: '✅ Tốt' },
    { criterion: 'Server cost', CSR: '💰 Thấp', SSR: '💰💰 Cao', SSG: '💰 Thấp', ISR: '💰 Trung bình' },
    { criterion: 'Time to Interactive', CSR: '🐢 Chậm', SSR: '⚡ Nhanh', SSG: '🚀 Cực nhanh', ISR: '🚀 Cực nhanh' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100">
            <th className="border border-slate-300 px-4 py-2 text-left text-sm font-bold text-slate-900">Tiêu chí</th>
            <th className="border border-slate-300 px-4 py-2 text-left text-sm font-bold text-blue-700">CSR</th>
            <th className="border border-slate-300 px-4 py-2 text-left text-sm font-bold text-emerald-700">SSR</th>
            <th className="border border-slate-300 px-4 py-2 text-left text-sm font-bold text-purple-700">SSG</th>
            <th className="border border-slate-300 px-4 py-2 text-left text-sm font-bold text-orange-700">ISR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50">
              <td className="border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800">{row.criterion}</td>
              <td className="border border-slate-300 px-4 py-2 text-sm text-slate-700">{row.CSR}</td>
              <td className="border border-slate-300 px-4 py-2 text-sm text-slate-700">{row.SSR}</td>
              <td className="border border-slate-300 px-4 py-2 text-sm text-slate-700">{row.SSG}</td>
              <td className="border border-slate-300 px-4 py-2 text-sm text-slate-700">{row.ISR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
