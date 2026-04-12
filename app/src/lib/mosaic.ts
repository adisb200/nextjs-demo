import { generateColor } from "@/lib/color";
import { getIntervalDate, type Pace } from "@/lib/pace";

export type MosaicTile = {
  id: string;
  color: string;
  name: string;
  unlocked: boolean;
};

const PREVIEW_TILE_COUNT = 12;

export function getMosaicPreview(userId: string, pace: Pace): MosaicTile[] {
  const currentInterval = getIntervalDate(pace);

  return Array.from({ length: PREVIEW_TILE_COUNT }, (_, index) => {
    const date = new Date(`${currentInterval}T00:00:00.000Z`);

    if (pace === "daily") {
      date.setUTCDate(date.getUTCDate() - index);
    } else if (pace === "weekly") {
      date.setUTCDate(date.getUTCDate() - index * 7);
    } else {
      date.setUTCMonth(date.getUTCMonth() - index);
    }

    const color = generateColor(userId, date.toISOString().slice(0, 10));

    return {
      id: `${userId}-${index}`,
      color: color.hex,
      name: color.name,
      unlocked: index < 5,
    };
  }).reverse();
}
