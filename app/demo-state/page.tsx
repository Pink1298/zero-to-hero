"use client";

import React, { useMemo, useState } from "react";
import { Button, Card, Badge, Alert, Progress, CounterCard, ToggleCard, LivePreview } from "../components";

export default function DemoState() {
  const [featureProgress, setFeatureProgress] = useState(35);
  const [featureTone, setFeatureTone] = useState<"blue" | "emerald" | "orange">("blue");
  const [toggleMessage, setToggleMessage] = useState("Component con gửi tín hiệu lên cha qua callback props.");

  const toneLabel = {
    blue: "Nền tảng",
    emerald: "Ổn định",
    orange: "Đang thử nghiệm",
  } as const;

  const toneColor = {
    blue: "bg-blue-100 text-blue-700",
    emerald: "bg-emerald-100 text-emerald-700",
    orange: "bg-orange-100 text-orange-700",
  } as const;

  const featureDesc = useMemo(() => {
    if (featureProgress >= 90) return "Sẵn sàng phát hành (phản hồi tức thì khi đạt ngưỡng)";
    if (featureProgress >= 60) return "Đã hoàn thiện phần lõi";
    if (featureProgress >= 30) return "Đang phát triển, cần thêm phản hồi";
    return "Ý tưởng đang được hình thành";
  }, [featureProgress]);

  return (
    <main className="flex flex-col gap-12 w-full">
      {/* Hero */}
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">State & Props</p>
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Biến giao diện tĩnh thành cuộc đối thoại động</h1>
          <p className="text-lg text-slate-600 max-w-3xl">State lưu trữ bối cảnh hiện tại, Props là hợp đồng dữ liệu. Kết hợp chúng để tạo trải nghiệm "phản hồi tức thì" cho người dùng.</p>
          <div className="flex flex-wrap gap-3">
            <Badge color="blue">State = Bộ nhớ sống</Badge>
            <Badge color="emerald">Props = Dòng dữ liệu</Badge>
            <Badge color="orange">Instant Feedback</Badge>
          </div>
        </div>
      </section>

      {/* Why state & props */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "State giữ ngữ cảnh",
            desc: "Theo dõi hành động người dùng (đếm, nhập, chọn) và phản hồi ngay.",
            icon: "⚡",
          },
          {
            title: "Props định hình UI",
            desc: "Cha truyền dữ liệu và cấu hình xuống con để đảm bảo tính nhất quán.",
            icon: "🧭",
          },
          {
            title: "Phản hồi tức thì",
            desc: "Cập nhật UI theo từng thao tác, giảm độ trễ nhận thức.",
            icon: "💬",
          },
        ].map((item) => (
          <Card key={item.title} variant="highlighted" padding="md" className="space-y-2">
            <div className="text-3xl">{item.icon}</div>
            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </section>

      {/* State demo */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold text-slate-900">State: bộ nhớ sống</h2>
          <Badge color="emerald" size="sm">
            Instant
          </Badge>
        </div>
        <p className="text-slate-600">CounterCard minh họa state thay đổi ngay khi bạn bấm, UI phản hồi tức thì.</p>
        <CounterCard label="Click counter" initial={2} step={2} />
      </section>

      {/* Props to state */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold text-slate-900">Props → State: giao tiếp hai chiều</h2>
          <Badge color="purple" size="sm">
            Callback
          </Badge>
        </div>
        <p className="text-slate-600">ToggleCard nhận props khởi tạo, state nội bộ thay đổi, và callback props báo ngược lên cha.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <ToggleCard
            title="Kích hoạt thông báo"
            description="Props initialOn quyết định trạng thái ban đầu. State thay đổi và gửi message lên cha."
            initialOn={true}
            onChange={(v) => setToggleMessage(v ? "Đã bật thông báo, UI phản hồi ngay." : "Đã tắt thông báo, trạng thái cập nhật tức thì.")}
          />
          <Card variant="default" padding="md" className="space-y-3">
            <h3 className="font-bold text-slate-900 text-lg">Cha nhận tín hiệu</h3>
            <p className="text-slate-700 text-sm">Khi state trong con thay đổi, callback props cập nhật state của cha, rồi render ra UI.</p>
            <Alert type="info">{toggleMessage}</Alert>
          </Card>
        </div>
      </section>

      {/* Live preview */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold text-slate-900">State + Props: Live binding</h2>
          <Badge color="orange" size="sm">
            Typing feedback
          </Badge>
        </div>
        <p className="text-slate-600">Gõ tới đâu, UI phản hồi tới đó. Props cung cấp giá trị khởi tạo, state giữ dữ liệu hiện tại.</p>
        <LivePreview />
      </section>

      {/* Parent controls child via props */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold text-slate-900">Props điều khiển component con</h2>
          <Badge color="blue" size="sm">
            One-way data flow
          </Badge>
        </div>
        <p className="text-slate-600">Cha thay đổi state và truyền xuống con qua props → con cập nhật UI ngay lập tức.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="default" padding="lg" className="space-y-4">
            <h3 className="font-bold text-slate-900 text-lg">Tùy chỉnh tiến độ tính năng</h3>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="secondary" onClick={() => setFeatureProgress((v) => Math.max(v - 10, 0))}>
                -10%
              </Button>
              <Button size="sm" variant="primary" onClick={() => setFeatureProgress((v) => Math.min(v + 10, 100))}>
                +10%
              </Button>
              <Button size="sm" variant="tertiary" onClick={() => setFeatureProgress(35)}>
                Reset
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="primary" onClick={() => setFeatureTone("blue")}>
                Nền tảng
              </Button>
              <Button size="sm" variant="success" onClick={() => setFeatureTone("emerald")}>
                Ổn định
              </Button>
              <Button size="sm" variant="warning" onClick={() => setFeatureTone("orange")}>
                Thử nghiệm
              </Button>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-slate-600 flex items-center gap-2">
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${toneColor[featureTone]}`}>{toneLabel[featureTone]}</span>
                <span className="text-slate-500">Props cấu hình màu và cảm xúc</span>
              </p>
              <Progress value={featureProgress} color={featureTone === "blue" ? "blue" : featureTone === "emerald" ? "emerald" : "orange"} />
              <p className="text-sm text-slate-700">{featureDesc}</p>
            </div>
          </Card>

          <Card variant="highlighted" padding="lg" className="space-y-3">
            <h3 className="font-bold text-slate-900 text-lg">Một chiều dữ liệu, nhiều chiều trải nghiệm</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>1. Cha giữ state (`featureProgress`, `featureTone`).</li>
              <li>2. Props truyền xuống `Progress` + `Badge` để render.</li>
              <li>3. Người dùng tương tác → state thay đổi → props thay đổi → UI cập nhật tức thì.</li>
            </ul>
            <Alert type="success">Không cần fetch lại hoặc reload. Chỉ với state + props, trải nghiệm đã trở nên sống động.</Alert>
          </Card>
        </div>
      </section>

      {/* Recap */}
      <section className="space-y-4 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-white p-8">
        <h2 className="text-3xl font-bold">Tổng kết</h2>
        <ul className="space-y-2 text-lg">
          <li>• State = ký ức hiện tại của UI.</li>
          <li>• Props = hợp đồng dữ liệu giữa cha và con.</li>
          <li>• Kết hợp chúng để đạt "phản hồi tức thì" và trải nghiệm mượt mà.</li>
        </ul>
        <p className="text-base text-white/90">Hãy biến mọi trang tĩnh thành cuộc đối thoại động bằng cách tận dụng state & props đúng chỗ.</p>
      </section>
    </main>
  );
}
