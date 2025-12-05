'use client';

import { useState, useEffect } from 'react';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // GET: Lấy danh sách
  useEffect(() => {
    fetch('/api/todos')
      .then((res) => res.json())
      .then((data) => {
        // Kiểm tra nếu API trả về lỗi hoặc không phải mảng
        if (Array.isArray(data)) setTodos(data);
      });
  }, []);

  // POST: Thêm mới
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);

    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: input }),
    });

    if (res.ok) {
      const newTodo = await res.json();
      setTodos([...todos, newTodo]);
      setInput('');
    }
    setLoading(false);
  };

  // PATCH: Cập nhật trạng thái (Mới thêm)
  const toggleTodo = async (id: number, currentStatus: boolean) => {
    // 1. Cập nhật UI ngay lập tức (Optimistic Update) để người dùng thấy nhanh
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !currentStatus } : todo
    );
    setTodos(updatedTodos);

    // 2. Gọi API cập nhật DB ngầm bên dưới
    await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !currentStatus }),
    });
  };

  // DELETE: Xóa công việc (Mới thêm)
  const deleteTodo = async (id: number) => {
    // 1. Cập nhật UI trước
    setTodos(todos.filter((todo) => todo.id !== id));

    // 2. Gọi API xóa trong DB
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50 text-gray-800">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Quản Lý Công Việc ✅
        </h1>

        {/* Form nhập liệu */}
        <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Việc cần làm..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            Thêm
          </button>
        </form>

        {/* Danh sách hiển thị */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-3 rounded-lg border transition ${
                todo.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                {/* Checkbox cập nhật trạng thái */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id, todo.completed)}
                  className="w-5 h-5 text-blue-600 cursor-pointer"
                />
                <span
                  className={`truncate ${
                    todo.completed ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {todo.title}
                </span>
              </div>

              {/* Nút xóa */}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition"
                title="Xóa"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
          {todos.length === 0 && (
            <p className="text-center text-gray-400 italic text-sm">
              Bạn đang rảnh rỗi! Hãy thêm việc mới.
            </p>
          )}
        </ul>
      </div>
    </main>
  );
}