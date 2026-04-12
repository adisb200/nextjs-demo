export type PaletteTier = "free" | "pro" | "team";

export type Palette = {
  id: string;
  name: string;
  colors: string[];
  tier: PaletteTier;
};

export const palettes: Palette[] = [
  {
    id: "morning-glass",
    name: "Morning Glass",
    colors: ["#F8FAFC", "#D9E2EC", "#9FB3C8", "#486581", "#102A43"],
    tier: "free",
  },
  {
    id: "field-note",
    name: "Field Note",
    colors: ["#F7F3E8", "#D7C9AA", "#7C8B5F", "#3F5D3A", "#1F2D1B"],
    tier: "free",
  },
  {
    id: "signal-coral",
    name: "Signal Coral",
    colors: ["#FFF1E6", "#FFD6BA", "#FF9F7A", "#E85D4F", "#6B1E2A"],
    tier: "pro",
  },
  {
    id: "studio-ink",
    name: "Studio Ink",
    colors: ["#F4F0EA", "#C9B8A8", "#6E7F80", "#324B4F", "#101820"],
    tier: "pro",
  },
  {
    id: "market-day",
    name: "Market Day",
    colors: ["#FAF8F0", "#F2C14E", "#F78154", "#4D9078", "#243E36"],
    tier: "team",
  },
  {
    id: "night-garden",
    name: "Night Garden",
    colors: ["#F1FFE7", "#A9E5BB", "#4ECDC4", "#2B7A78", "#17252A"],
    tier: "team",
  },
];
