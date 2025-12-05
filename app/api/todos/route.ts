import { NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

// GET: Lấy danh sách từ Database
export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: "asc", // Sắp xếp cũ nhất lên đầu
      },
    });
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching todos" }, { status: 500 });
  }
}

// POST: Thêm mới vào Database
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const newTodo = await prisma.todo.create({
      data: {
        title: body.title,
        // completed và createdAt sẽ tự động lấy giá trị default
      },
    });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating todo" }, { status: 500 });
  }
}
