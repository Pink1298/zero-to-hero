import { NextResponse } from 'next/server';
import { prisma } from '@lib/prisma';

// 1. PATCH: Cập nhật trạng thái (Completed: true/false)
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const numId = Number(id); // Chuyển ID từ URL (string) sang số
    const body = await request.json();

    const updatedTodo = await prisma.todo.update({
      where: { id: numId },
      data: { completed: body.completed },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating todo' }, { status: 500 });
  }
}

// 2. DELETE: Xóa công việc
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const numId = Number(id);

    await prisma.todo.delete({
      where: { id: numId },
    });

    return NextResponse.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting todo' }, { status: 500 });
  }
}