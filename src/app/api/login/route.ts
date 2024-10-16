import { NextResponse } from 'next/server';
import {connectMongo} from '@/lib/db';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



export async function POST(request: Request) {
  const { email, password } = await request.json();
  await connectMongo();

  const admin = await Admin.findOne({ email });
  if (!admin || !await bcrypt.compare(password, admin.password)) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return NextResponse.json({ token, message: 'Login successful' });
}
