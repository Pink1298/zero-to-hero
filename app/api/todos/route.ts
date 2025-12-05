import { NextResponse } from 'next/server';

// Mô phỏng Database tạm thời (Lưu ý: Dữ liệu sẽ mất khi restart server)
// Trong thực tế, Bông sẽ dùng Prisma kết nối PostgreSQL ở đây [cite: 4]
const todos = [
  { id: 1, title: 'Học Next.js cơ bản', completed: false },
  { id: 2, title: 'Làm quen với TailwindCSS', completed: true },
];

// GET: Lấy danh sách công việc
export async function GET() {
  return NextResponse.json(todos);
}

// POST: Thêm công việc mới
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate đơn giản
    if (!body.title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const newTodo = {
      id: Date.now(),
      title: body.title,
      completed: false,
    };

    todos.push(newTodo);

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}