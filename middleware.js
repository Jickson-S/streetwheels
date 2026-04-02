import { NextResponse } from 'next/server';

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);

  if (isMobile) {
    return NextResponse.redirect('https://streetmobile.vercel.app');
  }

  return NextResponse.redirect('https://streetwheelscars.com');
}
