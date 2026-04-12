import { NextResponse, type NextRequest } from "next/server";

import { getSessionFromRequest } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const session = getSessionFromRequest(request);

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-user-id", session.userId);
  requestHeaders.set("x-user-pace", session.pace);
  requestHeaders.set("x-user-tier", session.tier);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/dashboard/:path*", "/mosaic/:path*", "/team/:path*"],
};
