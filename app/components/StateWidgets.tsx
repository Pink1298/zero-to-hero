import React, { useEffect, useState } from 'react';

export interface CounterCardProps {
  label?: string;
  initial?: number;
  step?: number;
}

export function CounterCard({ label = 'Đếm số', initial = 0, step = 1 }: CounterCardProps) {
  const [count, setCount] = useState(initial);

  return (
    <div className="rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">State</p>
          <h3 className="text-lg font-bold text-slate-900">{label}</h3>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{count}</span>
      </div>
      <div className="flex gap-2">
        <button
          className="rounded-lg bg-slate-100 px-3 py-2 text-slate-700 hover:bg-slate-200"
          onClick={() => setCount((c) => Math.max(c - step, 0))}
        >
          -{step}
        </button>
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:shadow-md hover:-translate-y-0.5 transition"
          onClick={() => setCount((c) => c + step)}
        >
          +{step}
        </button>
        <button
          className="rounded-lg bg-slate-200 px-3 py-2 text-slate-700 hover:bg-slate-300"
          onClick={() => setCount(initial)}
        >
          Reset
        </button>
      </div>
      <p className="text-sm text-slate-600">Giá trị state thay đổi ngay lập tức khi bạn tương tác.</p>
    </div>
  );
}

export interface ToggleCardProps {
  title: string;
  description?: string;
  initialOn?: boolean;
  onChange?: (value: boolean) => void;
}

export function ToggleCard({ title, description, initialOn = true, onChange }: ToggleCardProps) {
  const [on, setOn] = useState(initialOn);

  useEffect(() => {
    onChange?.(on);
  }, [on, onChange]);

  return (
    <div className="rounded-xl border-2 border-indigo-100 bg-indigo-50/70 p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Props → State</p>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          {description && <p className="text-sm text-slate-600 mt-1">{description}</p>}
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${on ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-700'}`}>
          {on ? 'ON' : 'OFF'}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          className={`rounded-lg px-4 py-2 font-semibold transition border ${on ? 'bg-white text-slate-800 border-slate-200' : 'bg-blue-600 text-white border-blue-600 shadow hover:shadow-lg'}`}
          onClick={() => setOn((v) => !v)}
        >
          {on ? 'Tắt' : 'Bật'}
        </button>
        <button
          className="rounded-lg px-4 py-2 font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
          onClick={() => setOn(initialOn)}
        >
          Reset theo props
        </button>
      </div>
    </div>
  );
}

export interface LivePreviewProps {
  initialText?: string;
  placeholder?: string;
}

export function LivePreview({ initialText = 'Xin chào CUSC!', placeholder = 'Nhập nội dung...' }: LivePreviewProps) {
  const [text, setText] = useState(initialText);
  const [tone, setTone] = useState<'normal' | 'excited' | 'calm'>('normal');

  const toneStyles = {
    normal: 'bg-blue-50 text-blue-800 border-blue-200',
    excited: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    calm: 'bg-slate-100 text-slate-800 border-slate-200',
  };

  return (
    <div className="rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">State + Props</p>
        <h3 className="text-lg font-bold text-slate-900">Live Preview</h3>
        <p className="text-sm text-slate-600">Props khởi tạo nội dung, state phản hồi tức thì khi bạn gõ.</p>
      </div>

      <div className="space-y-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none"
        />

        <div className="flex gap-2 flex-wrap">
          {([
            { key: 'normal', label: 'Bình thường' },
            { key: 'excited', label: 'Hào hứng' },
            { key: 'calm', label: 'Điềm tĩnh' },
          ] as const).map((item) => (
            <button
              key={item.key}
              onClick={() => setTone(item.key)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold border transition ${
                tone === item.key ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`rounded-lg border ${toneStyles[tone]} px-4 py-3`}>{text || 'Hãy nhập để thấy phản hồi tức thì...'}</div>
      <p className="text-xs text-slate-500">State cập nhật theo từng phím gõ, UI phản hồi ngay lập tức.</p>
    </div>
  );
}
