import { headers } from "next/headers";

import { DailyColorCard } from "@/components/DailyColorCard";
import { MosaicCanvas } from "@/components/MosaicCanvas";
import { generateColor } from "@/lib/color";
import { getMosaicPreview } from "@/lib/mosaic";
import { getIntervalDate, getNextDelivery, isPace } from "@/lib/pace";

export default async function DashboardPage() {
  const headerList = await headers();
  const userId = headerList.get("x-user-id") ?? "demo-user";
  const paceHeader = headerList.get("x-user-pace");
  const pace = isPace(paceHeader) ? paceHeader : "daily";
  const intervalDate = getIntervalDate(pace);
  const color = generateColor(userId, intervalDate);
  const tiles = getMosaicPreview(userId, pace);

  return (
    <main style={{ display: "grid", gap: 32, padding: "48px clamp(20px, 6vw, 80px)" }}>
      <div>
        <p style={{ margin: "0 0 8px", textTransform: "uppercase" }}>{pace} pace</p>
        <h1 style={{ fontSize: 48, margin: 0 }}>Your next tile is ready.</h1>
      </div>
      <section style={{ display: "grid", gap: 28, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <DailyColorCard color={color} nextDelivery={getNextDelivery(pace)} />
        <div style={{ display: "grid", gap: 16 }}>
          <h2 style={{ margin: 0 }}>Mosaic preview</h2>
          <MosaicCanvas compact columns={4} tiles={tiles} />
        </div>
      </section>
    </main>
  );
}
