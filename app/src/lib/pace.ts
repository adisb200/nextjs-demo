export type Pace = "daily" | "weekly" | "monthly";

function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function startOfUtcDay(date: Date): Date {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
  );
}

export function getIntervalDate(pace: Pace, from = new Date()): string {
  const currentDay = startOfUtcDay(from);

  if (pace === "daily") {
    return toIsoDate(currentDay);
  }

  if (pace === "weekly") {
    const day = currentDay.getUTCDay();
    const daysSinceMonday = day === 0 ? 6 : day - 1;
    currentDay.setUTCDate(currentDay.getUTCDate() - daysSinceMonday);

    return toIsoDate(currentDay);
  }

  return toIsoDate(
    new Date(Date.UTC(currentDay.getUTCFullYear(), currentDay.getUTCMonth(), 1)),
  );
}

export function getNextDelivery(pace: Pace): Date {
  const intervalStart = new Date(`${getIntervalDate(pace)}T00:00:00.000Z`);

  if (pace === "daily") {
    intervalStart.setUTCDate(intervalStart.getUTCDate() + 1);
  } else if (pace === "weekly") {
    intervalStart.setUTCDate(intervalStart.getUTCDate() + 7);
  } else {
    intervalStart.setUTCMonth(intervalStart.getUTCMonth() + 1);
  }

  return intervalStart;
}

export function isPace(value: string | null | undefined): value is Pace {
  return value === "daily" || value === "weekly" || value === "monthly";
}
