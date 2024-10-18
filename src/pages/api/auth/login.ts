// src/pages/api/auth/login.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { connectMongo } from '@/lib/db';
import User from '@/models/User';
import Cookies from 'js-cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await connectMongo();
  const { email, password }: { email: string; password: string } = req.body;

  // Find user
  const user = await User.findOne({ email });
  
  if (!user) {
    return res.status(400).json({ message: 'Invalid email credentials' });
  }
  console.log(user);
  

  // Compare password
  // const isMatch = await bcrypt.compare(password, user.password);
  // if (!isMatch) {
  //   return res.status(400).json({ message: 'Invalid credentials' });
  // }

  // Create JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  console.log(token);
  

  // Set token in cookie
  // res.setHeader(
  //   'Set-Cookie',
  //   cookie.serialize('token', token, {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === 'production',
  //     sameSite: 'strict',
  //     maxAge: 3600,
  //     path: '/',
  //   })
  // );
  console.log('befro return');
  
  return res.status(200).json({ message: 'Login successful' });
}
