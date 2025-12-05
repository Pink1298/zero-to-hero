"use client";

import { useState, useEffect } from "react";
import { TodoHeader } from "./components/TodoHeader";
import { DateFilter } from "./components/DateFilter";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoStats } from "./components/TodoStats";
import { TodoList } from "./components/TodoList";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);

  // GET: Lấy danh sách
  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setTodos(data);
      });
  }, []);

  // Lọc todos theo ngày được chọn
  const filteredTodos = todos.filter((todo) => {
    const todoDate = new Date(todo.createdAt).toISOString().split("T")[0];
    return todoDate === selectedDate;
  });

  // POST: Thêm mới
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: input }),
    });

    if (res.ok) {
      const newTodo = await res.json();
      setTodos([...todos, newTodo]);
      setInput("");
    }
    setLoading(false);
  };

  // PATCH: Cập nhật trạng thái
  const toggleTodo = async (id: number, currentStatus: boolean) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !currentStatus } : todo));
    setTodos(updatedTodos);

    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !currentStatus }),
    });
  };

  // DELETE: Xóa công việc
  const deleteTodo = async (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
  };

  // Tính stats
  const completedCount = filteredTodos.filter((t) => t.completed).length;
  const pendingCount = filteredTodos.filter((t) => !t.completed).length;

  return (
    <main className="flex flex-col gap-8 w-full">
      <TodoHeader totalCount={todos.length} />
      <DateFilter selectedDate={selectedDate} onDateChange={setSelectedDate} todos={todos} />
      <AddTodoForm input={input} onInputChange={setInput} onSubmit={handleAddTodo} loading={loading} />
      <TodoStats completed={completedCount} pending={pendingCount} total={filteredTodos.length} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} selectedDate={selectedDate} />
    </main>
  );
}
