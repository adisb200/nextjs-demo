import { ColorTile } from "@/components/ColorTile";
import type { MosaicTile } from "@/lib/mosaic";

type MosaicCanvasProps = {
  tiles: MosaicTile[];
  columns?: number;
  compact?: boolean;
};

export function MosaicCanvas({
  tiles,
  columns = 4,
  compact = false,
}: MosaicCanvasProps) {
  return (
    <div
      aria-label="Mosaic canvas"
      style={{
        display: "grid",
        gap: compact ? 6 : 10,
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        maxWidth: compact ? 280 : 720,
        width: "100%",
      }}
    >
      {tiles.map((tile) => (
        <ColorTile
          color={tile.color}
          key={tile.id}
          name={tile.name}
          unlocked={tile.unlocked}
        />
      ))}
    </div>
  );
}
