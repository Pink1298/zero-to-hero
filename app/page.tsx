'use client'; // Đánh dấu đây là Client Component

import { useState, useEffect } from 'react';

// Định nghĩa kiểu dữ liệu
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // 1. Fetch dữ liệu từ API khi tải trang
  useEffect(() => {
    fetch('/api/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // 2. Xử lý thêm mới
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);

    // Gọi API POST
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: input }),
    });

    if (res.ok) {
      const newTodo = await res.json();
      // Cập nhật UI ngay lập tức mà không reload trang
      setTodos([...todos, newTodo]);
      setInput('');
    }
    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50 text-gray-800">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Quản Lý Công Việc 🚀
        </h1>

        {/* Form nhập liệu */}
        <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập công việc mới..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? '...' : 'Thêm'}
          </button>
        </form>

        {/* Danh sách hiển thị */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition"
            >
              <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                {todo.title}
              </span>
              <span className="text-xs text-gray-400">#{todo.id}</span>
            </li>
          ))}
          {todos.length === 0 && (
            <p className="text-center text-gray-400 italic">Chưa có công việc nào.</p>
          )}
        </ul>
      </div>
    </main>
  );
}