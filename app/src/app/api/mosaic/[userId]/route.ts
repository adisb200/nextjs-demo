import { NextResponse, type NextRequest } from "next/server";

import { getSessionFromRequest } from "@/lib/auth";
import { getMosaicPreview } from "@/lib/mosaic";

type MosaicRouteContext = {
  params: Promise<{
    userId: string;
  }>;
};

export async function GET(
  request: NextRequest,
  { params }: MosaicRouteContext,
) {
  const session = getSessionFromRequest(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { userId } = await params;

  if (session.userId !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json({
    tiles: getMosaicPreview(userId, session.pace),
  });
}
