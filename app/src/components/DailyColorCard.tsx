import type { ColorResult } from "@/lib/color";

type DailyColorCardProps = {
  color: ColorResult;
  nextDelivery: Date;
};

export function DailyColorCard({ color, nextDelivery }: DailyColorCardProps) {
  return (
    <section
      style={{
        border: "1px solid rgba(17, 24, 39, 0.14)",
        borderRadius: 8,
        display: "grid",
        gap: 16,
        padding: 20,
      }}
    >
      <div
        aria-label={`${color.name} swatch`}
        style={{
          aspectRatio: "16 / 9",
          background: color.hex,
          borderRadius: 8,
          minHeight: 180,
        }}
      />
      <div>
        <p style={{ margin: "0 0 6px", textTransform: "uppercase" }}>
          Tile {color.tileNumber}
        </p>
        <h2 style={{ fontSize: 32, margin: 0 }}>{color.name}</h2>
        <p style={{ margin: "8px 0 0" }}>{color.hex} · {color.hsl}</p>
        <p style={{ margin: "8px 0 0" }}>
          Next delivery at {nextDelivery.toISOString()}
        </p>
      </div>
    </section>
  );
}
