// // src/middleware/auth.ts
// import jwt from 'jsonwebtoken';
// import { NextRequest, NextResponse } from 'next/server';

// export async function middleware(req: NextRequest) {
//   const token = req.cookies.get('token');

//   if (!token) {
//     return NextResponse.redirect('/login'); // Redirect if no token is found
//   }

//   try {
//     jwt.verify(token, process.env.JWT_SECRET);
//     return NextResponse.next(); // Continue if valid token
//   } catch (err) {
//     return NextResponse.redirect('/login');
//   }
// }

// // Add middleware to protect specific routes
// export const config = {
//   matcher: ['/dashboard/:path*', '/profile/:path*'], // Add routes that require authentication
// };
