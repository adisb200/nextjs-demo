import type { NextRequest } from "next/server";

import { isPace, type Pace } from "@/lib/pace";

export type UserTier = "free" | "pro" | "team";

export type Session = {
  userId: string;
  pace: Pace;
  tier: UserTier;
};

export const AUTH_COOKIE = "colorday_user_id";
export const PACE_COOKIE = "colorday_pace";
export const TIER_COOKIE = "colorday_tier";

function isTier(value: string | undefined): value is UserTier {
  return value === "free" || value === "pro" || value === "team";
}

export function getSessionFromRequest(request: NextRequest): Session | null {
  const userId = request.cookies.get(AUTH_COOKIE)?.value;

  if (!userId) {
    return null;
  }

  const pace = request.cookies.get(PACE_COOKIE)?.value;
  const tier = request.cookies.get(TIER_COOKIE)?.value;

  return {
    userId,
    pace: isPace(pace) ? pace : "daily",
    tier: isTier(tier) ? tier : "free",
  };
}

export function getSessionFromCookieValues(
  userId: string | undefined,
  pace: string | undefined,
  tier: string | undefined,
): Session {
  return {
    userId: userId ?? "demo-user",
    pace: isPace(pace) ? pace : "daily",
    tier: isTier(tier) ? tier : "free",
  };
}
