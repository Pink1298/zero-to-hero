'use client';

import React from 'react';
import { Badge, Alert, Card, RenderMethodCard, LiveRenderDemo, RenderComparisonTable } from '../components';

export default function DemoRender() {
  return (
    <main className="flex flex-col gap-12 w-full">
      {/* Hero */}
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Rendering Strategies</p>
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            CSR, SSR, SSG, ISR trong Next.js
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Next.js hỗ trợ nhiều phương pháp render để tối ưu hiệu năng, SEO và trải nghiệm người dùng. Mỗi phương pháp có
            ưu nhược điểm riêng, phù hợp với từng tình huống cụ thể.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge color="blue">CSR = Client</Badge>
            <Badge color="emerald">SSR = Server</Badge>
            <Badge color="purple">SSG = Static</Badge>
            <Badge color="orange">ISR = Hybrid</Badge>
          </div>
        </div>

        {/* Demo Links */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="/demo-render/csr"
            className="flex-1 min-w-[200px] group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="relative z-10">
              <div className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Live Demo</div>
              <div className="text-2xl font-bold mb-2">CSR Example</div>
              <div className="text-sm opacity-90">Client-Side Rendering với fetch API</div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                <span>Xem demo</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>

          <a
            href="/demo-render/ssr"
            className="flex-1 min-w-[200px] group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="relative z-10">
              <div className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Live Demo</div>
              <div className="text-2xl font-bold mb-2">SSR Example</div>
              <div className="text-sm opacity-90">Server-Side Rendering mỗi request</div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                <span>Xem demo</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>

          <a
            href="/demo-render/ssg"
            className="flex-1 min-w-[200px] group relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="relative z-10">
              <div className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Live Demo</div>
              <div className="text-2xl font-bold mb-2">SSG Example</div>
              <div className="text-sm opacity-90">Static Site Generation lúc build</div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                <span>Xem demo</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Current Todo App Analysis */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Ứng dụng Todo hiện tại dùng phương pháp nào?</h2>
          <p className="text-slate-600">Phân tích chi tiết cách ứng dụng todo của chúng ta hoạt động.</p>
        </div>

        <Alert type="info" title="Todo App = CSR (Client-Side Rendering)">
          Trang chính <code className="bg-blue-100 px-1 rounded text-xs">app/page.tsx</code> bắt đầu với{' '}
          <code className="bg-blue-100 px-1 rounded text-xs">&quot;use client&quot;</code> - đây là directive báo Next.js
          render component này trên client.
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="highlighted" padding="lg" className="space-y-3">
            <h3 className="font-bold text-slate-900 text-lg">Bằng chứng CSR trong Todo App</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">1.</span>
                <span>
                  <code className="bg-slate-200 px-1 rounded text-xs">&quot;use client&quot;</code> directive ở đầu file
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">2.</span>
                <span>
                  <code className="bg-slate-200 px-1 rounded text-xs">useState</code>,{' '}
                  <code className="bg-slate-200 px-1 rounded text-xs">useEffect</code> - React hooks chỉ chạy trên
                  client
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">3.</span>
                <span>
                  <code className="bg-slate-200 px-1 rounded text-xs">fetch()</code> được gọi trong{' '}
                  <code className="bg-slate-200 px-1 rounded text-xs">useEffect</code> - data load sau khi JS chạy
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">4.</span>
                <span>User interactions (click, input) cập nhật state và re-render UI ngay lập tức</span>
              </li>
            </ul>
          </Card>

          <Card variant="default" padding="lg" className="space-y-3">
            <h3 className="font-bold text-slate-900 text-lg">Tại sao dùng CSR cho Todo?</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">✓</span>
                <span>
                  <strong>Interactive cao:</strong> Todo cần phản hồi tức thì khi user thêm/xóa/toggle
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">✓</span>
                <span>
                  <strong>Real-time updates:</strong> State thay đổi → UI update ngay, không cần reload
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">✓</span>
                <span>
                  <strong>Personalized:</strong> Mỗi user có danh sách todo riêng, không cần pre-render
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✗</span>
                <span>
                  <strong>Trade-off:</strong> SEO không quan trọng với private todo app
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Method breakdown */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">4 Phương pháp Rendering trong Next.js</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RenderMethodCard
            method="CSR"
            title="Client-Side Rendering"
            description="HTML rỗng được gửi đến browser, JavaScript chạy và render UI trên client."
            when="Ứng dụng interactive cao, nội dung cá nhân hóa, không cần SEO (dashboard, admin panel)."
            pros={['Tương tác mượt mà', 'Giảm tải server', 'Rich interactivity', 'Real-time updates dễ dàng']}
            cons={['Initial load chậm', 'SEO kém', 'Phụ thuộc JavaScript', 'Blank screen khi JS loading']}
            code={`"use client";

export default function Page() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(setData);
  }, []);
  
  return <div>{/* render data */}</div>;
}`}
            renderTime="~2-3s"
          />

          <RenderMethodCard
            method="SSR"
            title="Server-Side Rendering"
            description="Server render HTML đầy đủ cho mỗi request, gửi đến browser sẵn nội dung."
            when="Nội dung thay đổi thường xuyên, cần SEO tốt, personalized content (feed, news, e-commerce)."
            pros={['SEO tốt', 'Initial content nhanh', 'Always fresh data', 'Works without JS']}
            cons={['Server load cao', 'TTFB chậm hơn SSG', 'Chi phí server cao', 'Mỗi request đều render']}
            code={`// Next.js App Router (default SSR)
export default async function Page() {
  const data = await fetch(
    'https://api.example.com/data',
    { cache: 'no-store' } // force SSR
  );
  
  return <div>{/* render */}</div>;
}`}
            renderTime="~500ms"
          />

          <RenderMethodCard
            method="SSG"
            title="Static Site Generation"
            description="HTML được generate tại build time, serving tĩnh cực nhanh cho mọi user."
            when="Nội dung ít thay đổi, cần tốc độ cực nhanh, SEO tối ưu (blog, docs, landing page)."
            pros={['Cực nhanh (CDN)', 'SEO tuyệt vời', 'Chi phí thấp', 'Highly scalable']}
            cons={['Nội dung cố định', 'Rebuild để update', 'Không phù hợp dynamic', 'Build time tăng theo số trang']}
            code={`// Next.js App Router (default SSG)
export default async function Page() {
  const data = await fetch(
    'https://api.example.com/data'
    // default: cache forever (SSG)
  );
  
  return <div>{/* render */}</div>;
}`}
            renderTime="~50ms"
          />

          <RenderMethodCard
            method="ISR"
            title="Incremental Static Regeneration"
            description="Kết hợp SSG + SSR: static page tự động rebuild sau một khoảng thời gian."
            when="Nội dung thay đổi vừa phải, cần tốc độ cao + fresh data (product listing, articles)."
            pros={['Nhanh như SSG', 'Tự động cập nhật', 'Best of both worlds', 'Scalable + Fresh']}
            cons={['Stale content trong revalidate window', 'Phức tạp hơn', 'Cache management', 'First user sees stale']}
            code={`export default async function Page() {
  const data = await fetch(
    'https://api.example.com/data',
    { next: { revalidate: 60 } } // ISR
  );
  
  return <div>{/* render */}</div>;
}

// Rebuild every 60s automatically`}
            renderTime="~50ms (cached)"
          />
        </div>
      </section>

      {/* Live Demo */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Live Demo: CSR in Action</h2>
          <p className="text-slate-600">Component này render hoàn toàn trên client, không có pre-rendered HTML.</p>
        </div>
        <LiveRenderDemo />
      </section>

      {/* Comparison Table */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">So sánh nhanh các phương pháp</h2>
        <RenderComparisonTable />
      </section>

      {/* Decision flowchart */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Chọn phương pháp nào?</h2>
        <Card variant="highlighted" padding="lg">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-blue-600 text-white font-bold w-8 h-8 flex items-center justify-center shrink-0">
                ?
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 mb-2">Decision Tree</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-700">1.</span>
                    <div>
                      <p className="font-semibold text-slate-800">Nội dung có cần SEO không?</p>
                      <p className="text-slate-600 ml-4">→ Không? → Xem câu 2</p>
                      <p className="text-slate-600 ml-4">→ Có? → Xem câu 3</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-700">2.</span>
                    <div>
                      <p className="font-semibold text-slate-800">Highly interactive + personalized?</p>
                      <p className="text-slate-600 ml-4">
                        → Có? → <Badge color="blue">CSR</Badge> (Dashboard, Admin, Todo)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-700">3.</span>
                    <div>
                      <p className="font-semibold text-slate-800">Nội dung thay đổi thường xuyên?</p>
                      <p className="text-slate-600 ml-4">
                        → Mỗi request khác nhau? → <Badge color="emerald">SSR</Badge> (News feed, Search results)
                      </p>
                      <p className="text-slate-600 ml-4">
                        → Ít thay đổi? → <Badge color="purple">SSG</Badge> (Blog, Docs, Marketing)
                      </p>
                      <p className="text-slate-600 ml-4">
                        → Thay đổi vừa phải? → <Badge color="orange">ISR</Badge> (Product catalog, Articles)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Best practices */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Best Practices</h2>
        <div className="space-y-3">
          <Alert type="success" title="💡 Combine Strategies">
            Một app thường dùng nhiều phương pháp: Landing page (SSG) + Dashboard (CSR) + Blog (ISR).
          </Alert>
          <Alert type="info" title="⚡ Optimize for First Paint">
            Dùng SSR/SSG cho above-the-fold content, CSR cho phần interactive bên dưới.
          </Alert>
          <Alert type="warning" title="🔍 SEO Matters?">
            Nếu Google cần index → tránh pure CSR. Dùng SSR/SSG/ISR để có HTML đầy đủ ngay từ đầu.
          </Alert>
          <Alert type="info" title="💰 Cost Consideration">
            SSG = chi phí thấp nhất (CDN), SSR = chi phí cao nhất (server mỗi request), CSR/ISR = trung bình.
          </Alert>
        </div>
      </section>

      {/* Conclusion */}
      <section className="space-y-4 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-white p-8">
        <h2 className="text-3xl font-bold">Tổng kết</h2>
        <ul className="space-y-2 text-lg">
          <li>
            • <strong>CSR:</strong> Interactive apps, không cần SEO (Todo ✓)
          </li>
          <li>
            • <strong>SSR:</strong> Dynamic + SEO, always fresh
          </li>
          <li>
            • <strong>SSG:</strong> Static + SEO, cực nhanh
          </li>
          <li>
            • <strong>ISR:</strong> Best of both, auto-refresh
          </li>
        </ul>
        <p className="text-base text-white/90">
          Next.js cho phép bạn mix & match các strategy trong cùng một app. Chọn đúng công cụ cho đúng việc!
        </p>
      </section>
    </main>
  );
}
