// pages/api/rooms.ts
import { NextApiRequest, NextApiResponse } from 'next';
import {connectMongo} from '@/lib/db';
import Rooms from '@/models/Rooms';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectMongo();
  try {
    const rooms = await Rooms.find({});
    console.log("rooms");
    console.log(rooms);
    
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rooms' });
  }
}
