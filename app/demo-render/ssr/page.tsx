import { Card } from '@/app/components/Card';

// Server Component - NO "use client"
// Data fetching happens on the server for EVERY request

interface Post {
  id: number;
  title: string;
  body: string;
}

// Async Server Component
async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    cache: 'no-store', // IMPORTANT: Disable caching for SSR
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}

// Get server timestamp
function getServerTime(): string {
  return new Date().toISOString();
}

export default async function SSRDemo() {
  // Fetch data on the server
  const posts = await getPosts();
  const serverTime = getServerTime();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Server-Side Rendering Demo
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            SSR Live Example
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dữ liệu được fetch trên SERVER trước khi HTML được gửi về browser
          </p>
        </div>

        {/* Server Info */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card variant="highlighted" padding="md">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">⚡</div>
              <p className="text-sm text-slate-600 mt-2">Server Rendered</p>
            </div>
          </Card>

          <Card variant="highlighted" padding="md">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">
                Real-time
              </div>
              <p className="text-sm text-slate-600 mt-2">Fresh Every Request</p>
            </div>
          </Card>

          <Card variant="highlighted" padding="md">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">
                {posts.length}
              </div>
              <p className="text-sm text-slate-600 mt-2">Posts Loaded</p>
            </div>
          </Card>
        </div>

        {/* Server Time */}
        <Card variant="gradient" padding="lg">
          <h2 className="text-2xl font-bold text-white mb-4">🕐 Server Timestamp</h2>
          <div className="bg-white/70 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Rendered on server at:</span>
              <span className="font-mono font-bold text-purple-600 text-lg">
                {serverTime}
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              💡 Refresh trang để thấy timestamp mới - mỗi request = render mới trên server
            </p>
          </div>
        </Card>

        {/* Code Explanation */}
        <Card variant="default" padding="lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📝 Code Explanation</h2>
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <h3 className="font-semibold text-slate-800 mb-2">1. NO &quot;use client&quot; directive</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// Đây là Server Component (default trong Next.js 13+)
// KHÔNG có 'use client' ở đầu file`}</pre>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <h3 className="font-semibold text-slate-800 mb-2">2. Async Server Component</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`export default async function SSRDemo() {
  // Component CÓ THỂ async
  const posts = await getPosts(); // Fetch TRỰC TIẾP
  return <div>...</div>;
}`}</pre>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <h3 className="font-semibold text-slate-800 mb-2">3. Fetch với cache: &apos;no-store&apos;</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    cache: 'no-store', // MỖI REQUEST = FETCH MỚI
  });
  return res.json();
}`}</pre>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <h3 className="font-semibold text-slate-800 mb-2">4. KHÔNG có useState/useEffect</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// ❌ KHÔNG CẦN useState (vì data đã có sẵn)
// ❌ KHÔNG CẦN useEffect (vì fetch trên server)
// ✅ Chỉ cần await data và render`}</pre>
            </div>
          </div>
        </Card>

        {/* Data Display */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">📦 Dữ liệu từ Server</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              ✨ <strong>Lưu ý:</strong> Dữ liệu này đã có SẴN trong HTML khi trang load. 
              View page source (Ctrl+U) để thấy nội dung posts ngay trong HTML!
            </p>
          </div>
          
          {posts.map((post) => (
            <Card key={post.id} variant="default" padding="md">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-800 flex-1">
                    {post.id}. {post.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium shrink-0">
                    ID: {post.id}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {post.body}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Points */}
        <Card variant="default" padding="lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🎯 Điểm Chính của SSR</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-slate-800 mb-2">Ưu điểm</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• SEO tuyệt vời (HTML có nội dung)</li>
                <li>• Không có loading state</li>
                <li>• Dữ liệu fresh mỗi request</li>
                <li>• Time-to-content nhanh</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
              <div className="text-2xl mb-2">⚠️</div>
              <h3 className="font-semibold text-slate-800 mb-2">Nhược điểm</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Server phải xử lý mỗi request</li>
                <li>• TTFB chậm hơn (server fetch data)</li>
                <li>• Chi phí server cao hơn</li>
                <li>• Không cache được (no-store)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <Card variant="default" padding="lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">⏱️ SSR Timeline</h2>
          <div className="relative pl-8 space-y-6">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-200"></div>
            
            {[
              { step: 1, title: 'Browser request', desc: 'User yêu cầu trang' },
              { step: 2, title: 'Server fetch data', desc: 'Server gọi API, đợi response (CHẬM NHƯ CSR nhưng ẨN khỏi user)' },
              { step: 3, title: 'Server render HTML', desc: 'Server chạy React, tạo HTML với ĐẦY ĐỦ dữ liệu' },
              { step: 4, title: 'Send HTML to browser', desc: 'Browser nhận HTML hoàn chỉnh - ĐÃ CÓ NỘI DUNG' },
              { step: 5, title: 'Hydration', desc: 'React hydrate để thêm interactivity' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[2.15rem] top-1 w-4 h-4 rounded-full bg-purple-600 border-4 border-slate-50"></div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-purple-600">Step {item.step}</span>
                    <span className="font-semibold text-slate-800">{item.title}</span>
                  </div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Comparison */}
        <Card variant="default" padding="lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🔍 So sánh CSR vs SSR</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700">Tiêu chí</th>
                  <th className="text-left p-3 font-semibold text-blue-700">CSR</th>
                  <th className="text-left p-3 font-semibold text-purple-700">SSR</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t">
                  <td className="p-3 font-medium">Loading State</td>
                  <td className="p-3 text-blue-600">✅ Có (user thấy loading)</td>
                  <td className="p-3 text-purple-600">❌ Không (HTML đã có data)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">SEO</td>
                  <td className="p-3 text-blue-600">❌ Kém (HTML rỗng)</td>
                  <td className="p-3 text-purple-600">✅ Tốt (HTML đầy đủ)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Server Load</td>
                  <td className="p-3 text-blue-600">✅ Thấp (chỉ serve HTML)</td>
                  <td className="p-3 text-purple-600">❌ Cao (render mỗi request)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Time to Content</td>
                  <td className="p-3 text-blue-600">❌ Chậm (fetch sau)</td>
                  <td className="p-3 text-purple-600">✅ Nhanh (có sẵn)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Data Freshness</td>
                  <td className="p-3 text-blue-600">✅ Fresh (fetch real-time)</td>
                  <td className="p-3 text-purple-600">✅ Fresh (mỗi request)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
