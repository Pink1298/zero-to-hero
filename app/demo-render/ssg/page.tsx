import { Card } from '@/app/components/Card';

// Server Component - Static Site Generation
// Data fetched at BUILD TIME and reused for all requests

interface Post {
  id: number;
  title: string;
  body: string;
}

// Fetch data at build time with caching enabled
async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    cache: 'force-cache', // DEFAULT: Cache forever (SSG)
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}

// Get build time (this will be the same for all requests)
function getBuildTime(): string {
  return new Date().toISOString();
}

export default async function SSGDemo() {
  // This data is fetched ONCE at build time
  const posts = await getPosts();
  const buildTime = getBuildTime();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Static Site Generation Demo
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            SSG Live Example
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dữ liệu được fetch MỘT LẦN lúc build, sau đó serve static HTML cho tất cả requests
          </p>
        </div>

        {/* Build Info */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card variant="highlighted" padding="md">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">🏗️</div>
              <p className="text-sm text-slate-600 mt-2">Built at Build Time</p>
            </div>
          </Card>

          <Card variant="highlighted" padding="md">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">⚡</div>
              <p className="text-sm text-slate-600 mt-2">Lightning Fast</p>
            </div>
          </Card>

          <Card variant="highlighted" padding="md">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-600">
                {posts.length}
              </div>
              <p className="text-sm text-slate-600 mt-2">Static Posts</p>
            </div>
          </Card>
        </div>

        {/* Build Time */}
        <Card variant="gradient" padding="lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🕐 Build Timestamp</h2>
          <div className="bg-white/70 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Page built at:</span>
              <span className="font-mono font-bold text-emerald-600 text-lg">
                {buildTime}
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              💡 Refresh trang NHIỀU LẦN - timestamp KHÔNG ĐỔI vì trang đã được build sẵn!
            </p>
            <p className="text-sm text-amber-600 mt-2 font-medium">
              ⚠️ Để thấy timestamp mới, cần chạy <code className="bg-slate-800 text-white px-2 py-1 rounded">npm run build</code>
            </p>
          </div>
        </Card>

        {/* Code Explanation */}
        <Card variant="default" padding="lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📝 Code Explanation</h2>
          <div className="space-y-4">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
              <h3 className="font-semibold text-slate-800 mb-2">1. NO &quot;use client&quot; - Server Component</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// Đây là Server Component (giống SSR)
// Khác biệt: fetch với cache: 'force-cache'`}</pre>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
              <h3 className="font-semibold text-slate-800 mb-2">2. Fetch với cache: &apos;force-cache&apos; (DEFAULT)</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    cache: 'force-cache', // DEFAULT trong Next.js
    // Hoặc bỏ qua option này - mặc định là force-cache
  });
  return res.json();
}`}</pre>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
              <h3 className="font-semibold text-slate-800 mb-2">3. Data fetched AT BUILD TIME</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`export default async function SSGDemo() {
  const posts = await getPosts(); // Chỉ chạy khi BUILD
  // Runtime: Serve HTML tĩnh, KHÔNG fetch lại
  return <div>...</div>;
}`}</pre>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
              <h3 className="font-semibold text-slate-800 mb-2">4. Build Command</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`# Build static pages
npm run build

# Data được fetch trong quá trình này
# Output: Static HTML files`}</pre>
            </div>
          </div>
        </Card>

        {/* Data Display */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">📦 Static Data</h2>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <p className="text-sm text-emerald-800">
              ✨ <strong>Lưu ý:</strong> Dữ liệu này được fetch LÚC BUILD và không bao giờ thay đổi cho đến khi rebuild. 
              Refresh trang bao nhiêu lần cũng thấy CÙNG dữ liệu này!
            </p>
          </div>
          
          {posts.map((post) => (
            <Card key={post.id} variant="default" padding="md">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-800 flex-1">
                    {post.id}. {post.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium shrink-0">
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
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🎯 Điểm Chính của SSG</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-slate-800 mb-2">Ưu điểm</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• CỰC KỲ nhanh (static HTML)</li>
                <li>• SEO hoàn hảo (HTML đầy đủ)</li>
                <li>• Chi phí server = 0 (có thể dùng CDN)</li>
                <li>• Không cần database runtime</li>
                <li>• Scale dễ dàng</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
              <div className="text-2xl mb-2">⚠️</div>
              <h3 className="font-semibold text-slate-800 mb-2">Nhược điểm</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Data CŨ (chỉ update khi rebuild)</li>
                <li>• Build time lâu (nhiều pages)</li>
                <li>• Không real-time</li>
                <li>• Cần rebuild để update content</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <Card variant="default" padding="lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">⏱️ SSG Timeline</h2>
          <div className="space-y-8">
            {/* Build Time */}
            <div>
              <h3 className="font-bold text-emerald-600 mb-3">📦 BUILD TIME (npm run build)</h3>
              <div className="relative pl-8 space-y-4">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
                
                {[
                  { step: 1, title: 'Developer runs build', desc: 'npm run build' },
                  { step: 2, title: 'Next.js fetch data', desc: 'Gọi API, lấy dữ liệu' },
                  { step: 3, title: 'Generate static HTML', desc: 'Render React component thành HTML tĩnh' },
                  { step: 4, title: 'Save to disk', desc: 'Lưu file .html vào /out hoặc /.next' },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[2.15rem] top-1 w-4 h-4 rounded-full bg-emerald-600 border-4 border-slate-50"></div>
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-emerald-600 text-sm">Step {item.step}</span>
                        <span className="font-semibold text-slate-800 text-sm">{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Runtime */}
            <div>
              <h3 className="font-bold text-teal-600 mb-3">⚡ RUNTIME (User Request)</h3>
              <div className="relative pl-8 space-y-4">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-teal-200"></div>
                
                {[
                  { step: 1, title: 'User requests page', desc: 'Browser gửi request' },
                  { step: 2, title: 'Serve static HTML', desc: 'Server/CDN trả về HTML có SẴN (CỰC NHANH)' },
                  { step: 3, title: 'Browser renders', desc: 'Hiển thị ngay - KHÔNG CÓ LOADING' },
                  { step: 4, title: 'Hydration', desc: 'React hydrate để thêm interactivity' },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[2.15rem] top-1 w-4 h-4 rounded-full bg-teal-600 border-4 border-slate-50"></div>
                    <div className="bg-teal-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-teal-600 text-sm">Step {item.step}</span>
                        <span className="font-semibold text-slate-800 text-sm">{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Comparison */}
        <Card variant="default" padding="lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🔍 So sánh CSR vs SSR vs SSG</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-semibold text-slate-700">Tiêu chí</th>
                  <th className="text-left p-3 font-semibold text-blue-700">CSR</th>
                  <th className="text-left p-3 font-semibold text-purple-700">SSR</th>
                  <th className="text-left p-3 font-semibold text-emerald-700">SSG</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t">
                  <td className="p-3 font-medium">Fetch Time</td>
                  <td className="p-3 text-blue-600">Runtime (browser)</td>
                  <td className="p-3 text-purple-600">Runtime (server)</td>
                  <td className="p-3 text-emerald-600">Build time</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Speed</td>
                  <td className="p-3 text-blue-600">⚡ Chậm (fetch sau)</td>
                  <td className="p-3 text-purple-600">⚡⚡ Trung bình</td>
                  <td className="p-3 text-emerald-600">⚡⚡⚡ CỰC NHANH</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">SEO</td>
                  <td className="p-3 text-blue-600">❌ Kém</td>
                  <td className="p-3 text-purple-600">✅ Tốt</td>
                  <td className="p-3 text-emerald-600">✅ Tốt</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Data Freshness</td>
                  <td className="p-3 text-blue-600">✅ Real-time</td>
                  <td className="p-3 text-purple-600">✅ Real-time</td>
                  <td className="p-3 text-emerald-600">❌ Cũ (build time)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Server Cost</td>
                  <td className="p-3 text-blue-600">✅ Thấp</td>
                  <td className="p-3 text-purple-600">❌ Cao</td>
                  <td className="p-3 text-emerald-600">✅ Rất thấp/0</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Use Case</td>
                  <td className="p-3 text-blue-600">Dashboard, Admin</td>
                  <td className="p-3 text-purple-600">News, E-commerce</td>
                  <td className="p-3 text-emerald-600">Blog, Docs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* When to Use */}
        <Card variant="default" padding="lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">💡 Khi nào dùng SSG?</h2>
          <div className="space-y-4">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4">
              <h3 className="font-bold text-emerald-800 mb-2">✅ TỐT cho:</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Blog posts, documentation pages</li>
                <li>• Marketing pages, landing pages</li>
                <li>• Product catalog (ít thay đổi)</li>
                <li>• Pricing pages</li>
                <li>• About us, Company info</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-bold text-red-800 mb-2">❌ KHÔNG tốt cho:</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Real-time data (stock prices, chat)</li>
                <li>• Personalized content (user dashboard)</li>
                <li>• Frequently changing data (news)</li>
                <li>• Content cần authentication</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
