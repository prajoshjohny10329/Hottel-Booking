// src/pages/api/auth/signup.ts
import { NextApiRequest, NextApiResponse } from 'next';
import {connectMongo} from '@/lib/db';
import bcrypt from 'bcryptjs'
import User from '@/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  await connectMongo();

  const { email, password, name,  phone } = req.body;
  console.log(req.body);
  

  // Check if user already exists
  const existingUser = await User.findOne({
    $or: [{ email }, { phone }]
  });
  
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  console.log('not ext');
  
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  


  // Create new user
  const user = new User({ 
      email, 
      password : hashedPassword, 
      name, 
      phone 
    });
  await user.save();
  console.log(user);
  

  // res.status(201).json({ user: { email: newUser.email, name: newUser.name } });
}
