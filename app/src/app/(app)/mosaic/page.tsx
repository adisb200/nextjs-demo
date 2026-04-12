import { headers } from "next/headers";

import { MosaicCanvas } from "@/components/MosaicCanvas";
import { getMosaicPreview } from "@/lib/mosaic";
import { isPace } from "@/lib/pace";

export default async function MosaicPage() {
  const headerList = await headers();
  const userId = headerList.get("x-user-id") ?? "demo-user";
  const paceHeader = headerList.get("x-user-pace");
  const pace = isPace(paceHeader) ? paceHeader : "daily";

  return (
    <main style={{ display: "grid", gap: 32, padding: "48px clamp(20px, 6vw, 80px)" }}>
      <h1 style={{ fontSize: 48, margin: 0 }}>Mosaic canvas</h1>
      <MosaicCanvas columns={4} tiles={getMosaicPreview(userId, pace)} />
    </main>
  );
}
