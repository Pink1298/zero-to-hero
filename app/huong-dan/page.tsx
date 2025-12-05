export default function HuongDan() {
  return (
    <main className="flex flex-col gap-8 w-full">
      {/* Hero */}
      <section className="space-y-4">
        <div className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white">
          📚 Step-by-Step Guide
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Hướng Dẫn Xây Dựng Fullstack Web App
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Hướng dẫn chi tiết từng bước để tạo ứng dụng Fullstack với Next.js 15, Prisma, PostgreSQL và deploy lên Vercel.
            Làm theo từng bước để có ứng dụng Todo hoàn chỉnh như ví dụ này.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">📋 Nội dung</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="#setup" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline">
            <span className="font-semibold">1.</span> Setup môi trường
          </a>
          <a href="#create-project" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline">
            <span className="font-semibold">2.</span> Tạo Next.js project
          </a>
          <a href="#prisma" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline">
            <span className="font-semibold">3.</span> Setup Prisma + PostgreSQL
          </a>
          <a href="#database" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline">
            <span className="font-semibold">4.</span> Tạo Database Schema
          </a>
          <a href="#api" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline">
            <span className="font-semibold">5.</span> Tạo API Routes
          </a>
          <a href="#ui" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline">
            <span className="font-semibold">6.</span> Xây dựng UI Components
          </a>
          <a href="#styling" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline">
            <span className="font-semibold">7.</span> Styling với Tailwind CSS
          </a>
          <a href="#deploy" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline">
            <span className="font-semibold">8.</span> Deploy lên Vercel
          </a>
        </div>
      </section>

      {/* Step 1: Setup Environment */}
      <section id="setup" className="space-y-6 scroll-mt-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
            1
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Setup Môi Trường</h2>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <h3 className="text-xl font-semibold text-slate-800">Yêu cầu hệ thống</h3>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span><strong>Node.js</strong> version 18.17 trở lên (kiểm tra: <code className="bg-slate-100 px-2 py-1 rounded text-sm">node -v</code>)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span><strong>npm</strong> hoặc <strong>yarn</strong> hoặc <strong>pnpm</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span><strong>Git</strong> để version control</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✓</span>
              <span><strong>VS Code</strong> (khuyến nghị) với extension: Prisma, Tailwind CSS IntelliSense</span>
            </li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-blue-800">
              💡 <strong>Tip:</strong> Nếu chưa có Node.js, tải tại{' '}
              <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="underline">
                nodejs.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Step 2: Create Next.js Project */}
      <section id="create-project" className="space-y-6 scroll-mt-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
            2
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Tạo Next.js Project</h2>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <h3 className="text-xl font-semibold text-slate-800">Bước 2.1: Tạo project mới</h3>
          <p className="text-slate-700">Sử dụng <code className="bg-slate-100 px-2 py-1 rounded text-sm">create-next-app</code> để tạo project với TypeScript và Tailwind CSS:</p>
          
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`npx create-next-app@latest my-todo-app`}</code>
            </pre>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800 font-semibold mb-2">Khi được hỏi, chọn các option sau:</p>
            <ul className="text-sm text-yellow-800 space-y-1 ml-4">
              <li>✓ Would you like to use TypeScript? → <strong>Yes</strong></li>
              <li>✓ Would you like to use ESLint? → <strong>Yes</strong></li>
              <li>✓ Would you like to use Tailwind CSS? → <strong>Yes</strong></li>
              <li>✓ Would you like to use `src/` directory? → <strong>No</strong></li>
              <li>✓ Would you like to use App Router? → <strong>Yes</strong></li>
              <li>✓ Would you like to customize the default import alias? → <strong>No</strong></li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 pt-4">Bước 2.2: Di chuyển vào thư mục project</h3>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`cd my-todo-app`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 pt-4">Bước 2.3: Chạy development server</h3>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`npm run dev`}</code>
            </pre>
          </div>
          <p className="text-slate-700">Mở trình duyệt tại <code className="bg-slate-100 px-2 py-1 rounded text-sm">http://localhost:3000</code></p>
        </div>
      </section>

      {/* Step 3: Setup Prisma + PostgreSQL */}
      <section id="prisma" className="space-y-6 scroll-mt-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
            3
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Setup Prisma + PostgreSQL</h2>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <h3 className="text-xl font-semibold text-slate-800">Bước 3.1: Cài đặt Prisma</h3>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`npm install prisma @prisma/client
npx prisma init`}</code>
            </pre>
          </div>
          <p className="text-slate-700">Lệnh này sẽ tạo:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li><code className="bg-slate-100 px-2 py-1 rounded text-sm">prisma/schema.prisma</code> - File cấu hình database</li>
            <li><code className="bg-slate-100 px-2 py-1 rounded text-sm">.env</code> - File chứa DATABASE_URL</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 pt-4">Bước 3.2: Setup PostgreSQL Database</h3>
          <p className="text-slate-700">Có 2 cách để có PostgreSQL database:</p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <h4 className="font-semibold text-emerald-800 mb-2">Option 1: Dùng Vercel Postgres (Khuyến nghị - Miễn phí)</h4>
            <ol className="text-sm text-emerald-800 space-y-2 ml-4 list-decimal">
              <li>Đăng ký tài khoản tại <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline">vercel.com</a></li>
              <li>Vào Dashboard → Storage → Create Database → Postgres</li>
              <li>Copy <strong>DATABASE_URL</strong> từ tab <code className="bg-emerald-100 px-1 rounded">.env.local</code></li>
              <li>Paste vào file <code className="bg-emerald-100 px-1 rounded">.env</code> của project</li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Option 2: Dùng Supabase (Miễn phí)</h4>
            <ol className="text-sm text-blue-800 space-y-2 ml-4 list-decimal">
              <li>Đăng ký tại <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="underline">supabase.com</a></li>
              <li>Tạo project mới</li>
              <li>Vào Settings → Database → Connection String → URI</li>
              <li>Copy connection string và paste vào <code className="bg-blue-100 px-1 rounded">.env</code></li>
            </ol>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-2">Option 3: PostgreSQL Local (Development)</h4>
            <ol className="text-sm text-slate-700 space-y-2 ml-4 list-decimal">
              <li>Cài PostgreSQL từ <a href="https://www.postgresql.org/download/" target="_blank" rel="noopener noreferrer" className="underline">postgresql.org</a></li>
              <li>Tạo database: <code className="bg-slate-100 px-1 rounded">createdb my_todo_db</code></li>
              <li>Connection string: <code className="bg-slate-100 px-1 rounded text-xs">postgresql://user:password@localhost:5432/my_todo_db</code></li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 pt-4">Bước 3.3: Cấu hình .env</h3>
          <p className="text-slate-700">Mở file <code className="bg-slate-100 px-2 py-1 rounded text-sm">.env</code> và thêm DATABASE_URL:</p>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`# .env
DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Step 4: Create Database Schema */}
      <section id="database" className="space-y-6 scroll-mt-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
            4
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Tạo Database Schema</h2>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <h3 className="text-xl font-semibold text-slate-800">Bước 4.1: Định nghĩa model</h3>
          <p className="text-slate-700">Mở <code className="bg-slate-100 px-2 py-1 rounded text-sm">prisma/schema.prisma</code> và thêm Todo model:</p>
          
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
  output   = "../app/generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Todo {
  id        Int      @id @default(autoincrement())
  text      String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              💡 <strong>Giải thích:</strong> Model Todo có 5 fields: id (tự động), text (nội dung), completed (trạng thái), createdAt/updatedAt (timestamp)
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 pt-4">Bước 4.2: Tạo migration và apply lên database</h3>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`npx prisma migrate dev --name init`}</code>
            </pre>
          </div>
          <p className="text-slate-700">Lệnh này sẽ:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Tạo migration file trong <code className="bg-slate-100 px-1 rounded text-xs">prisma/migrations/</code></li>
            <li>Apply migration lên database</li>
            <li>Generate Prisma Client</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 pt-4">Bước 4.3: Tạo Prisma Client singleton</h3>
          <p className="text-slate-700">Tạo file <code className="bg-slate-100 px-2 py-1 rounded text-sm">app/lib/prisma.ts</code>:</p>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`// app/lib/prisma.ts
import { PrismaClient } from '@/app/generated/prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Step 5: Create API Routes */}
      <section id="api" className="space-y-6 scroll-mt-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
            5
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Tạo API Routes</h2>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <h3 className="text-xl font-semibold text-slate-800">Bước 5.1: Tạo GET và POST todos</h3>
          <p className="text-slate-700">Tạo file <code className="bg-slate-100 px-2 py-1 rounded text-sm">app/api/todos/route.ts</code>:</p>
          
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`// app/api/todos/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

// GET all todos
export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(todos);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch todos' },
      { status: 500 }
    );
  }
}

// POST new todo
export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    const todo = await prisma.todo.create({
      data: { text },
    });
    return NextResponse.json(todo);
  } catch {
    return NextResponse.json(
      { error: 'Failed to create todo' },
      { status: 500 }
    );
  }
}`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 pt-4">Bước 5.2: Tạo PUT và DELETE cho từng todo</h3>
          <p className="text-slate-700">Tạo file <code className="bg-slate-100 px-2 py-1 rounded text-sm">app/api/todos/[id]/route.ts</code>:</p>
          
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`// app/api/todos/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

// PUT update todo
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const { completed } = await request.json();
    const todo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: { completed },
    });
    return NextResponse.json(todo);
  } catch {
    return NextResponse.json(
      { error: 'Failed to update todo' },
      { status: 500 }
    );
  }
}

// DELETE todo
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    await prisma.todo.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to delete todo' },
      { status: 500 }
    );
  }
}`}</code>
            </pre>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-emerald-800">
              ✅ <strong>Hoàn thành:</strong> Bây giờ bạn đã có 4 API endpoints:
            </p>
            <ul className="text-sm text-emerald-800 space-y-1 ml-4 mt-2">
              <li>• <code className="bg-emerald-100 px-1 rounded">GET /api/todos</code> - Lấy danh sách todos</li>
              <li>• <code className="bg-emerald-100 px-1 rounded">POST /api/todos</code> - Tạo todo mới</li>
              <li>• <code className="bg-emerald-100 px-1 rounded">PUT /api/todos/[id]</code> - Cập nhật todo</li>
              <li>• <code className="bg-emerald-100 px-1 rounded">DELETE /api/todos/[id]</code> - Xóa todo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step 6: Build UI Components */}
      <section id="ui" className="space-y-6 scroll-mt-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
            6
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Xây Dựng UI Components</h2>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <h3 className="text-xl font-semibold text-slate-800">Bước 6.1: Tạo Main Page với CSR</h3>
          <p className="text-slate-700">Cập nhật file <code className="bg-slate-100 px-2 py-1 rounded text-sm">app/page.tsx</code>:</p>
          
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`'use client';

import { useState, useEffect } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  // Fetch todos
  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // Add todo
  const addTodo = async () => {
    if (!input.trim()) return;
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    });
    const newTodo = await res.json();
    setTodos([newTodo, ...todos]);
    setInput('');
  };

  // Toggle todo
  const toggleTodo = async (id: number, completed: boolean) => {
    await fetch(\`/api/todos/\${id}\`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed }),
    });
    setTodos(todos.map(t => 
      t.id === id ? { ...t, completed: !completed } : t
    ));
  };

  // Delete todo
  const deleteTodo = async (id: number) => {
    await fetch(\`/api/todos/\${id}\`, { method: 'DELETE' });
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-slate-800">
          My Todo App
        </h1>

        {/* Add Todo Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTodo}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Add
            </button>
          </div>
        </div>

        {/* Todo List */}
        <div className="space-y-2">
          {todos.map(todo => (
            <div
              key={todo.id}
              className="bg-white rounded-lg shadow p-4 flex items-center gap-3"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id, todo.completed)}
                className="w-5 h-5"
              />
              <span className={\`flex-1 \${todo.completed ? 'line-through text-slate-400' : 'text-slate-800'}\`}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              💡 <strong>Lưu ý:</strong> Đây là ví dụ cơ bản. Bạn có thể tham khảo các components trong app này để có UI đẹp hơn với Card, Badge, Alert, Button components.
            </p>
          </div>
        </div>
      </section>

      {/* Step 7: Styling */}
      <section id="styling" className="space-y-6 scroll-mt-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
            7
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Styling với Tailwind CSS</h2>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <p className="text-slate-700">Tailwind CSS đã được cài sẵn khi tạo project. Bạn có thể:</p>

          <h3 className="text-xl font-semibold text-slate-800">Customize Tailwind Config</h3>
          <p className="text-slate-700">Mở <code className="bg-slate-100 px-2 py-1 rounded text-sm">tailwind.config.ts</code> để thêm màu sắc, fonts tùy chỉnh:</p>
          
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
      },
    },
  },
  plugins: [],
};
export default config;`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 pt-4">Tạo Reusable Components</h3>
          <p className="text-slate-700">Xem các components mẫu tại:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li><code className="bg-slate-100 px-1 rounded text-xs">app/components/Button.tsx</code></li>
            <li><code className="bg-slate-100 px-1 rounded text-xs">app/components/Card.tsx</code></li>
            <li><code className="bg-slate-100 px-1 rounded text-xs">app/components/Badge.tsx</code></li>
          </ul>
        </div>
      </section>

      {/* Step 8: Deploy to Vercel */}
      <section id="deploy" className="space-y-6 scroll-mt-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
            8
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Deploy Lên Vercel</h2>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <h3 className="text-xl font-semibold text-slate-800">Bước 8.1: Push code lên GitHub</h3>
          
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`# Khởi tạo git (nếu chưa có)
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit"

# Tạo repo trên GitHub rồi push
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main`}</code>
            </pre>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              ⚠️ <strong>Quan trọng:</strong> Đảm bảo file <code className="bg-yellow-100 px-1 rounded">.env</code> đã có trong <code className="bg-yellow-100 px-1 rounded">.gitignore</code> để không push DATABASE_URL lên GitHub!
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 pt-4">Bước 8.2: Deploy với Vercel</h3>
          <ol className="space-y-3 text-slate-700 ml-4 list-decimal">
            <li>
              <strong>Đăng nhập Vercel:</strong> Truy cập{' '}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                vercel.com
              </a>
              {' '}và đăng nhập bằng GitHub
            </li>
            <li>
              <strong>Import Repository:</strong> Click &quot;Add New&quot; → &quot;Project&quot; → Chọn repo GitHub của bạn
            </li>
            <li>
              <strong>Configure Project:</strong>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                <li>Framework Preset: Next.js (auto-detect)</li>
                <li>Root Directory: <code className="bg-slate-100 px-1 rounded text-xs">./</code></li>
                <li>Build Command: <code className="bg-slate-100 px-1 rounded text-xs">npm run build</code></li>
                <li>Output Directory: <code className="bg-slate-100 px-1 rounded text-xs">.next</code></li>
              </ul>
            </li>
            <li>
              <strong>Environment Variables:</strong> Add DATABASE_URL:
              <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                <li>Key: <code className="bg-slate-100 px-1 rounded text-xs">DATABASE_URL</code></li>
                <li>Value: Paste your production database URL</li>
              </ul>
            </li>
            <li>
              <strong>Deploy:</strong> Click &quot;Deploy&quot; button
            </li>
          </ol>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-emerald-800">
              ✅ <strong>Hoàn thành!</strong> App của bạn sẽ có URL dạng: <code className="bg-emerald-100 px-1 rounded">https://your-app.vercel.app</code>
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 pt-4">Bước 8.3: Run Prisma Migrations trên Production</h3>
          <p className="text-slate-700">Nếu dùng Vercel Postgres, migrations sẽ tự động chạy. Nếu không, chạy thủ công:</p>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-slate-100 text-sm">
              <code>{`# Set DATABASE_URL to production
export DATABASE_URL="your-production-database-url"

# Run migration
npx prisma migrate deploy`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Bonus Tips */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">💡 Tips và Best Practices</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">🔒 Bảo mật</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Không commit file <code className="bg-blue-100 px-1 rounded">.env</code></li>
              <li>• Dùng environment variables cho sensitive data</li>
              <li>• Validate input trên cả client và server</li>
            </ul>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <h3 className="font-semibold text-emerald-800 mb-2">⚡ Performance</h3>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>• Sử dụng SSR/SSG khi có thể</li>
              <li>• Optimize images với <code className="bg-emerald-100 px-1 rounded">next/image</code></li>
              <li>• Enable caching cho API routes</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-800 mb-2">🧪 Testing</h3>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Viết tests cho API routes</li>
              <li>• Test components với React Testing Library</li>
              <li>• E2E testing với Playwright</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-semibold text-orange-800 mb-2">📊 Monitoring</h3>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• Dùng Vercel Analytics (miễn phí)</li>
              <li>• Setup error tracking (Sentry)</li>
              <li>• Monitor database queries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">📚 Tài Liệu Tham Khảo</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Official Docs</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  → Next.js Documentation
                </a>
              </li>
              <li>
                <a href="https://www.prisma.io/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  → Prisma Documentation
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  → Tailwind CSS Documentation
                </a>
              </li>
              <li>
                <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  → Vercel Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Learning Resources</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  → Next.js Tutorial
                </a>
              </li>
              <li>
                <a href="https://www.prisma.io/learn" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  → Prisma Learn
                </a>
              </li>
              <li>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  → React Documentation
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  → TypeScript Handbook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Message */}
      <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Chúc Mừng!</h2>
        <p className="text-slate-600">
          Bạn đã hoàn thành việc xây dựng một ứng dụng Fullstack với Next.js, Prisma, PostgreSQL và deploy lên Vercel.
          <br />
          Tiếp tục học hỏi và phát triển thêm nhiều tính năng mới nhé! 🚀
        </p>
      </section>
    </main>
  );
}
