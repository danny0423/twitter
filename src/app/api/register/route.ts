import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, username, email, password } = await req.json();

    // 1. 基本驗證
    if (!name || !username || !email || !password) {
      return NextResponse.json({ error: '所有欄位都必填' }, { status: 400 });
    }

    // 2. 檢查重複
    const existing = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });
    if (existing) {
      return NextResponse.json({ error: 'Email 或使用者名稱已被使用' }, { status: 409 });
    }

    // 3. hash 密碼
    const hashed = await bcrypt.hash(password, 10);

    // 4. 寫入資料庫
    const user = await prisma.user.create({
      data: { name, username, email, password: hashed },
    });

    return NextResponse.json({ id: user.id }, { status: 201 });
  } catch (error) {
    console.error("Registration endpoint error:", error);
    return NextResponse.json(
      { error: '伺服器發生錯誤，請稍後再試' },
      { status: 500 }
    );
  }
}
