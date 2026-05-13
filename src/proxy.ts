// src/middleware.ts
import { authConfig } from '@/auth.config';
import { NextResponse } from 'next/server';
import NextAuth from 'next-auth';

const { auth } = NextAuth(authConfig);  // 這裡產生 auth




export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  const publicPaths = ['/', '/auth/signup','/auth/login'];
  const isPublicPath = publicPaths.includes(pathname);

  if (!isLoggedIn && !isPublicPath) {
    return NextResponse.redirect(new URL('/', req.url));
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icons).*)'],
};
