import { NextResponse } from 'next/server';
import {connectMongo} from '@/lib/db';
import Booking from '@/models/Rooms';

export async function POST(request: Request) {

    const room = [
        {
            _id : 'hjgh',
            name : 'delux',
            price :'1000',
            description :'hjgdfhgdfh',
        },
        {
            _id : 'new',
            name : 'delux',
            price :'20',
            description :'hjgdfhgdfh',
        }

    ]
  const body = await request.json();
  await connectMongo();
  const newBooking = new Booking(body);
  await newBooking.save();
  return NextResponse.json({room});
}
