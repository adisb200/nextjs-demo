import { cookies } from "next/headers";

import { PaceSelector } from "@/components/PaceSelector";
import { AUTH_COOKIE, getSessionFromCookieValues, PACE_COOKIE, TIER_COOKIE } from "@/lib/auth";

export default async function SettingsPage() {
  const cookieStore = await cookies();
  const session = getSessionFromCookieValues(
    cookieStore.get(AUTH_COOKIE)?.value,
    cookieStore.get(PACE_COOKIE)?.value,
    cookieStore.get(TIER_COOKIE)?.value,
  );

  return (
    <main style={{ display: "grid", gap: 32, padding: "48px clamp(20px, 6vw, 80px)" }}>
      <div>
        <p style={{ margin: "0 0 8px", textTransform: "uppercase" }}>Settings</p>
        <h1 style={{ fontSize: 48, margin: 0 }}>Choose your delivery pace.</h1>
      </div>
      <PaceSelector activePace={session.pace} tier={session.tier} />
    </main>
  );
}
