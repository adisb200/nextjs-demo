export type ColorResult = {
  hex: string;
  hsl: string;
  name: string;
  tileNumber: number;
  scheduledAt: string;
};

function hashString(input: string): number {
  let hash = 2166136261;

  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function hueToName(hue: number): string {
  if (hue <= 15 || hue >= 346) return "Crimson";
  if (hue <= 35) return "Coral";
  if (hue <= 55) return "Amber";
  if (hue <= 75) return "Gold";
  if (hue <= 105) return "Olive";
  if (hue <= 135) return "Forest";
  if (hue <= 165) return "Teal";
  if (hue <= 195) return "Sky";
  if (hue <= 225) return "Cobalt";
  if (hue <= 255) return "Indigo";
  if (hue <= 285) return "Violet";
  if (hue <= 315) return "Fuchsia";
  return "Rose";
}

function hslToHex(hue: number, saturation: number, lightness: number): string {
  const s = saturation / 100;
  const l = lightness / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = l - c / 2;

  let red = 0;
  let green = 0;
  let blue = 0;

  if (hue < 60) {
    red = c;
    green = x;
  } else if (hue < 120) {
    red = x;
    green = c;
  } else if (hue < 180) {
    green = c;
    blue = x;
  } else if (hue < 240) {
    green = x;
    blue = c;
  } else if (hue < 300) {
    red = x;
    blue = c;
  } else {
    red = c;
    blue = x;
  }

  return [red, green, blue]
    .map((channel) =>
      Math.round((channel + m) * 255)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")
    .toUpperCase()
    .padStart(6, "0")
    .replace(/^/, "#");
}

export function generateColor(
  userId: string,
  intervalDate: string,
): ColorResult {
  const hash = hashString(`${userId}:${intervalDate}`);
  const hue = hash % 361;
  const saturation = 65;
  const lightness = 55;

  return {
    hex: hslToHex(hue, saturation, lightness),
    hsl: `hsl(${hue} ${saturation}% ${lightness}%)`,
    name: hueToName(hue),
    tileNumber: (hash % 10000) + 1,
    scheduledAt: new Date(`${intervalDate}T00:00:00.000Z`).toISOString(),
  };
}
