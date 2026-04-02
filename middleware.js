import { NextResponse } from 'next/server';

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  const isMobile = /android|iphone|ipad|ipod|mobile/i.test(userAgent);

  if (isMobile) {
    return NextResponse.redirect('https://streetmobile.vercel.app');
  }

  return NextResponse.redirect('https://streetwheels.vercel.app');
}

export const config = {
  matcher: '/',
};
