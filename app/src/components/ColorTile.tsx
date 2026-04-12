import type { CSSProperties } from "react";

type ColorTileProps = {
  color: string;
  name?: string;
  unlocked?: boolean;
};

export function ColorTile({ color, name, unlocked = true }: ColorTileProps) {
  const style: CSSProperties = {
    aspectRatio: "1",
    background: unlocked ? color : "repeating-linear-gradient(135deg, #E5E7EB 0 8px, #F8FAFC 8px 16px)",
    border: "1px solid rgba(17, 24, 39, 0.12)",
    borderRadius: 6,
  };

  return <div aria-label={name ?? "Locked color tile"} title={name} style={style} />;
}
