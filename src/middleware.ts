import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;

  return NextResponse.next();
}

export const config = {
  matcher: ["/hello/:path*"],
};
