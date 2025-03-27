import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 获取响应对象
  const response = NextResponse.next();

  // 添加 CORS 头
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  response.headers.set('Access-Control-Allow-Headers', 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization');
  response.headers.set('Access-Control-Expose-Headers', 'Content-Length,Content-Range');

  return response;
}

export const config = {
  matcher: [
    // 应用到所有路径，包括静态资源
    '/(.*)',
  ],
};
