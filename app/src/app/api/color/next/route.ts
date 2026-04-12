import { NextResponse, type NextRequest } from "next/server";

import { getSessionFromRequest } from "@/lib/auth";
import { generateColor } from "@/lib/color";
import { getIntervalDate, getNextDelivery } from "@/lib/pace";

export function GET(request: NextRequest) {
  const session = getSessionFromRequest(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const nextDelivery = getNextDelivery(session.pace);
  const intervalDate = getIntervalDate(session.pace, nextDelivery);
  const color = generateColor(session.userId, intervalDate);

  return NextResponse.json({
    ...color,
    scheduledAt: nextDelivery.toISOString(),
  });
}
