export default function GioiThieu() {
  return (
    <main className="flex flex-col gap-12 w-full">
      {/* Hero Section */}
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Giới thiệu</p>
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Lập trình Full-stack với Next.js
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Tìm hiểu cách xây dựng ứng dụng web hoàn chỉnh từ Frontend đến Backend sử dụng Next.js, React, và Prisma ORM.
          </p>
        </div>
      </div>

      {/* What is Full-stack */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Full-stack là gì?</h2>
          <p className="text-slate-600">
            Một nhà phát triển full-stack là người có khả năng xây dựng cả phần giao diện người dùng (Frontend) và phần xử lý logic phía máy chủ (Backend), cùng 
            với việc quản lý cơ sở dữ liệu. Điều này cho phép bạn tạo ra những ứng dụng web hoàn chỉnh, từ giao diện đẹp mắt đến dữ liệu được lưu trữ an toàn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-lg bg-blue-600 p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Frontend</h3>
            </div>
            <p className="text-slate-700 mb-4 font-medium">Giao diện người dùng</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> React & JSX
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Interactive UI Components
              </li>
              <li className="flex items-center gap-2">  
                <span className="text-blue-600">✓</span> State Management
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-lg bg-emerald-600 p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5a2 2 0 01-2 2M5 12a2 2 0 00-2 2v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Backend</h3>
            </div>
            <p className="text-slate-700 mb-4 font-medium">Logic xử lý phía máy chủ</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span> Next.js API Routes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span> REST API Endpoints
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span> Authentication & Authorization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span> Business Logic
              </li>
            </ul>
          </div>

          {/* Database */}
          <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-lg bg-purple-600 p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Database</h3>
            </div>
            <p className="text-slate-700 mb-4 font-medium">Lưu trữ dữ liệu</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-purple-600">✓</span> Prisma ORM
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">✓</span> PostgreSQL
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">✓</span> Data Models & Relations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">✓</span> CRUD Operations
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Kiến trúc ứng dụng Todo</h2>
        <div className="rounded-2xl bg-slate-50 border-2 border-slate-100 p-8">
          <div className="space-y-6">
            {/* Layer 1 */}
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-100 p-3 text-blue-600 flex-shrink-0">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Frontend - React Components</h3>
                <p className="text-slate-600 mt-1">
                  Gọi API từ các React component để lấy dữ liệu. Sử dụng <code className="bg-slate-200 px-2 py-1 rounded text-sm">fetch()</code> hoặc 
                  <code className="bg-slate-200 px-2 py-1 rounded text-sm ml-1">axios</code> để gửi request đến Backend.
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <svg className="h-8 w-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Layer 2 */}
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-emerald-100 p-3 text-emerald-600 flex-shrink-0">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5a2 2 0 01-2 2M5 12a2 2 0 00-2 2v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Backend - Next.js API Routes</h3>
                <p className="text-slate-600 mt-1">
                  Tiếp nhận request, xử lý logic nghiệp vụ. Gọi Prisma để tương tác với cơ sở dữ liệu. Trả về dữ liệu JSON cho Frontend.
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <svg className="h-8 w-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Layer 3 */}
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-purple-100 p-3 text-purple-600 flex-shrink-0">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Database - PostgreSQL</h3>
                <p className="text-slate-600 mt-1">
                  Lưu trữ tất cả dữ liệu todo. Prisma ORM giúp thao tác dữ liệu một cách an toàn, không cần viết SQL trực tiếp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Stack công nghệ được sử dụng</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">⚡</span> Frontend
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-700">
                <span className="font-semibold text-slate-900">Next.js 16</span> - React framework với server-side rendering
              </li>
              <li className="text-slate-700">
                <span className="font-semibold text-slate-900">React 19</span> - Library xây dựng UI
              </li>
              <li className="text-slate-700">
                <span className="font-semibold text-slate-900">Tailwind CSS</span> - Utility-first CSS framework
              </li>
              <li className="text-slate-700">
                <span className="font-semibold text-slate-900">TypeScript</span> - Static typing cho JavaScript
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-emerald-600">🔧</span> Backend & Database
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-700">
                <span className="font-semibold text-slate-900">Next.js API Routes</span> - RESTful backend endpoints
              </li>
              <li className="text-slate-700">
                <span className="font-semibold text-slate-900">Prisma ORM</span> - Object-relational mapping
              </li>
              <li className="text-slate-700">
                <span className="font-semibold text-slate-900">PostgreSQL</span> - Relational database
              </li>
              <li className="text-slate-700">
                <span className="font-semibold text-slate-900">Prisma Accelerate</span> - Database connection pooling
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Các khái niệm chính</h2>
        <div className="space-y-4">
          {[
            {
              title: "API Routes",
              description:
                "Các file trong thư mục app/api/ tự động trở thành các endpoint API. Ví dụ: app/api/todos/route.ts sẽ xử lý request tới /api/todos",
              icon: "🔗",
            },
            {
              title: "CRUD Operations",
              description:
                "Create (POST), Read (GET), Update (PATCH), Delete (DELETE) - bốn phép toán cơ bản để quản lý dữ liệu",
              icon: "📝",
            },
            {
              title: "Prisma Schema",
              description:
                "Định nghĩa cấu trúc dữ liệu của ứng dụng. Từ schema này, Prisma tự động sinh ra Prisma Client để query dữ liệu",
              icon: "📐",
            },
            {
              title: "Database Migrations",
              description:
                "Quản lý các thay đổi schema. Khi cập nhật Prisma schema, chạy prisma migrate dev để cập nhật database",
              icon: "🚀",
            },
            {
              title: "Type Safety",
              description:
                "Sử dụng TypeScript giúp phát hiện lỗi sớm, tăng chất lượng code. Prisma auto-generate types dựa trên schema",
              icon: "✅",
            },
            {
              title: "Client-Server Communication",
              description:
                "Frontend gửi HTTP request (fetch/axios) tới Backend API. Backend xử lý, query database, trả về JSON response",
              icon: "🔄",
            },
          ].map((concept, index) => (
            <div key={index} className="rounded-xl border-2 border-slate-200 bg-white p-6 hover:shadow-lg transition-all">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{concept.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{concept.title}</h4>
                  <p className="text-slate-600 mt-1">{concept.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Todo App Example */}
      <section className="space-y-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 p-8">
        <h2 className="text-3xl font-bold text-slate-900">Ứng dụng Todo - Ví dụ thực tế</h2>
        <p className="text-slate-700 text-lg">
          Ứng dụng Todo trên trang này là một ví dụ về full-stack development. Dưới đây là cách nó hoạt động:
        </p>

        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
            <h4 className="font-bold text-slate-900">1. Thêm công việc mới</h4>
            <p className="text-slate-600 text-sm mt-1">
              • Frontend: Nhập tiêu đề → Gửi POST request tới /api/todos<br />
              • Backend: Nhận dữ liệu → Tạo record mới trong database qua Prisma<br />
              • Database: Lưu trữ todo mới → Trả về cho Frontend<br />
              • Frontend: Cập nhật state → Hiển thị todo vừa tạo trên giao diện
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-600">
            <h4 className="font-bold text-slate-900">2. Đánh dấu hoàn thành</h4>
            <p className="text-slate-600 text-sm mt-1">
              • Frontend: Click checkbox → Gửi PATCH request tới /api/todos/[id]<br />
              • Backend: Nhận request → Cập nhật trường completed qua Prisma<br />
              • Database: Lưu thay đổi → Xác nhận thành công<br />
              • Frontend: Cập nhật giao diện → Hiển thị todo với style hoàn thành
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
            <h4 className="font-bold text-slate-900">3. Lọc theo ngày</h4>
            <p className="text-slate-600 text-sm mt-1">
              • Frontend: Chọn ngày → Gọi GET /api/todos (lấy tất cả)<br />
              • Backend: Truy xuất toàn bộ todos từ database<br />
              • Frontend: Lọc danh sách dựa vào createdAt field<br />
              • Hiển thị chỉ những todos của ngày đó
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
            <h4 className="font-bold text-slate-900">4. Xóa công việc</h4>
            <p className="text-slate-600 text-sm mt-1">
              • Frontend: Click xóa → Gửi DELETE request tới /api/todos/[id]<br />
              • Backend: Xóa record khỏi database qua Prisma<br />
              • Frontend: Xóa todo khỏi state<br />
              • Giao diện tự động cập nhật
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Những thực hành tốt nhất</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Type Safety", items: ["Luôn sử dụng TypeScript", "Định nghĩa interface/type rõ ràng", "Sử dụng Prisma types"] },
            { title: "Error Handling", items: ["Try-catch trong API routes", "Trả về status codes thích hợp", "Log lỗi cho debugging"] },
            { title: "Performance", items: ["Cache khi có thể", "Pagination cho danh sách dài", "Optimize database queries"] },
            { title: "Security", items: ["Validate input từ client", "Sử dụng environment variables", "Implement authentication nếu cần"] },
          ].map((practice, index) => (
            <div key={index} className="rounded-xl bg-white border-2 border-slate-200 p-6">
              <h4 className="font-bold text-slate-900 mb-4 text-lg">{practice.title}</h4>
              <ul className="space-y-2">
                {practice.items.map((item, i) => (
                  <li key={i} className="text-slate-600 flex items-center gap-2">
                    <span className="text-blue-600">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="space-y-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
        <h2 className="text-3xl font-bold">Kết luận</h2>
        <p className="text-lg">
          Full-stack development không phải là những gì quá phức tạp. Bằng cách sử dụng các công cụ hiện đại như Next.js, Prisma, và TypeScript, bạn có thể 
          xây dựng những ứng dụng web chất lượng cao một cách hiệu quả.
        </p>
        <p className="text-lg">
          Chìa khóa là hiểu rõ cách mỗi layer (Frontend, Backend, Database) hoạt động cùng nhau, và thực hành thường xuyên. Ứng dụng Todo này là một bước 
          khởi đầu tốt - tiếp tục xây dựng thêm các tính năng khác để làm phong phú kiến thức của bạn!
        </p>
      </section>
    </main>
  );
}
