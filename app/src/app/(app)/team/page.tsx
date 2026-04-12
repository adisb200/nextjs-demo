import { headers } from "next/headers";

import { TeamMosaic } from "@/components/TeamMosaic";
import { getMosaicPreview } from "@/lib/mosaic";
import { isPace } from "@/lib/pace";

export default async function TeamPage() {
  const headerList = await headers();
  const userId = headerList.get("x-user-id") ?? "demo-user";
  const paceHeader = headerList.get("x-user-pace");
  const pace = isPace(paceHeader) ? paceHeader : "daily";

  return (
    <main style={{ display: "grid", gap: 32, padding: "48px clamp(20px, 6vw, 80px)" }}>
      <div>
        <p style={{ margin: "0 0 8px", textTransform: "uppercase" }}>Team</p>
        <h1 style={{ fontSize: 48, margin: 0 }}>Shared team canvas</h1>
      </div>
      <TeamMosaic tiles={getMosaicPreview(`${userId}-team`, pace)} />
    </main>
  );
}
