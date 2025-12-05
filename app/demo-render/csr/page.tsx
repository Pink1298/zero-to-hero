'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/app/components';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function CSRDemo() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fetchTime, setFetchTime] = useState<number>(0);

  useEffect(() => {
    const startTime = performance.now();
    
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => response.json())
      .then((data: Post[]) => {
        setPosts(data);
        setLoading(false);
        const endTime = performance.now();
        setFetchTime(endTime - startTime);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Client-Side Rendering Demo
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            CSR Live Example
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dữ liệu được fetch từ API sau khi trang đã load trong browser
          </p>
        </div>

        {/* Code Explanation */}
        <Card variant="default" padding="lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📝 Code Explanation</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold text-slate-800 mb-2">1. Directive &quot;use client&quot;</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`'use client'; // Bắt buộc cho CSR trong Next.js 13+`}</pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold text-slate-800 mb-2">2. State Management</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`const [posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState(true);`}</pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold text-slate-800 mb-2">3. Fetch Data trong useEffect</h3>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => response.json())
    .then(data => {
      setPosts(data);
      setLoading(false);
    });
}, []);`}</pre>
            </div>
          </div>
        </Card>

        {/* Fetch Status */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card variant="highlighted" padding="md">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {loading ? '⏳' : '✅'}
              </div>
              <p className="text-sm text-slate-600 mt-2">
                Status: {loading ? 'Loading...' : 'Complete'}
              </p>
            </div>
          </Card>

          <Card variant="highlighted" padding="md">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">
                {fetchTime > 0 ? `${fetchTime.toFixed(0)}ms` : '--'}
              </div>
              <p className="text-sm text-slate-600 mt-2">Fetch Time</p>
            </div>
          </Card>

          <Card variant="highlighted" padding="md">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">
                {posts.length}
              </div>
              <p className="text-sm text-slate-600 mt-2">Posts Loaded</p>
            </div>
          </Card>
        </div>

        {/* Data Display */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">🔄 Dữ liệu từ API</h2>
          
          {loading && (
            <Card variant="default" padding="lg">
              <div className="flex items-center justify-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="text-slate-600">Đang fetch dữ liệu từ API...</p>
              </div>
            </Card>
          )}

          {error && (
            <Card variant="default" padding="lg">
              <div className="text-red-600">
                ❌ Error: {error}
              </div>
            </Card>
          )}

          {!loading && !error && posts.map((post) => (
            <Card key={post.id} variant="default" padding="md">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-800 flex-1">
                    {post.id}. {post.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shrink-0">
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
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🎯 Điểm Chính của CSR</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-slate-800 mb-2">Ưu điểm</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Tương tác nhanh sau khi load</li>
                <li>• Giảm tải cho server</li>
                <li>• Tốt cho app cần login</li>
                <li>• SEO không quan trọng</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
              <div className="text-2xl mb-2">⚠️</div>
              <h3 className="font-semibold text-slate-800 mb-2">Nhược điểm</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Initial load chậm (loading state)</li>
                <li>• SEO kém (không có nội dung ban đầu)</li>
                <li>• Phụ thuộc JavaScript</li>
                <li>• Nhiều network requests</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <Card variant="default" padding="lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">⏱️ CSR Timeline</h2>
          <div className="relative pl-8 space-y-6">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {[
              { step: 1, title: 'Browser request HTML', desc: 'Server gửi HTML rỗng với <div id="root"></div>' },
              { step: 2, title: 'Download JavaScript', desc: 'Browser tải về React bundle và dependencies' },
              { step: 3, title: 'Execute JavaScript', desc: 'React khởi tạo và render component' },
              { step: 4, title: 'Fetch Data (useEffect)', desc: 'Gọi API để lấy dữ liệu - THẤY LOADING STATE' },
              { step: 5, title: 'Update UI', desc: 'Dữ liệu về, setState, re-render với nội dung thực' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[2.15rem] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-50"></div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-blue-600">Step {item.step}</span>
                    <span className="font-semibold text-slate-800">{item.title}</span>
                  </div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
