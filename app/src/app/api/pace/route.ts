import { NextResponse, type NextRequest } from "next/server";

import { getSessionFromRequest, PACE_COOKIE } from "@/lib/auth";
import { isPace } from "@/lib/pace";

export async function POST(request: NextRequest) {
  const session = getSessionFromRequest(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const pace = body?.pace;

  if (typeof pace !== "string" || !isPace(pace)) {
    return NextResponse.json({ error: "Invalid pace" }, { status: 400 });
  }

  if (session.tier === "free" && pace !== "daily") {
    return NextResponse.json(
      { error: "Upgrade to Pro to choose weekly or monthly pace" },
      { status: 403 },
    );
  }

  const response = NextResponse.json({ pace });
  response.cookies.set(PACE_COOKIE, pace, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
  });

  return response;
}
