import { NextResponse } from 'next/server';
import {connectMongo} from '@/lib/db';
import Booking from '@/models/Booking';

export async function POST(request: Request) {
  const body = await request.json();
  await connectMongo();
  const newBooking = new Booking(body);
  await newBooking.save();
  return NextResponse.json({ message: 'Booking confirmed' });
}
