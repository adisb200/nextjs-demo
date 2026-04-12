import { MosaicCanvas } from "@/components/MosaicCanvas";
import type { MosaicTile } from "@/lib/mosaic";

type TeamMosaicProps = {
  tiles: MosaicTile[];
};

export function TeamMosaic({ tiles }: TeamMosaicProps) {
  return (
    <section style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0 }}>Shared team mosaic</h2>
      <MosaicCanvas columns={4} tiles={tiles} />
    </section>
  );
}
