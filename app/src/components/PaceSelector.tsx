import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import { PACE_COOKIE, type UserTier } from "@/lib/auth";
import { isPace, type Pace } from "@/lib/pace";

type PaceSelectorProps = {
  activePace: Pace;
  tier?: UserTier;
};

const options: Array<{
  pace: Pace;
  colorsPerYear: string;
  preview: string[];
}> = [
  {
    pace: "daily",
    colorsPerYear: "365 colors per year",
    preview: ["#E85D4F", "#F2C14E", "#4D9078", "#4ECDC4", "#486581", "#A855F7"],
  },
  {
    pace: "weekly",
    colorsPerYear: "52 colors per year",
    preview: ["#F7F3E8", "#FF9F7A", "#2B7A78", "#102A43", "#E5E7EB", "#E5E7EB"],
  },
  {
    pace: "monthly",
    colorsPerYear: "12 colors per year",
    preview: ["#D9E2EC", "#7C8B5F", "#6B1E2A", "#E5E7EB", "#E5E7EB", "#E5E7EB"],
  },
];

export function PaceSelector({ activePace, tier = "free" }: PaceSelectorProps) {
  async function updatePace(formData: FormData) {
    "use server";

    const nextPace = formData.get("pace");

    if (typeof nextPace !== "string" || !isPace(nextPace)) {
      return;
    }

    const cookieStore = await cookies();
    const currentTier = cookieStore.get("colorday_tier")?.value ?? "free";

    if (currentTier === "free" && nextPace !== "daily") {
      return;
    }

    cookieStore.set(PACE_COOKIE, nextPace, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
    });
    revalidatePath("/settings");
    revalidatePath("/dashboard");
  }

  return (
    <form action={updatePace} style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        {options.map((option) => {
          const locked = tier === "free" && option.pace !== "daily";
          const active = option.pace === activePace;

          return (
            <button
              disabled={locked}
              key={option.pace}
              name="pace"
              style={{
                background: locked ? "#F3F4F6" : "#FFFFFF",
                border: active ? "2px solid #111827" : "1px solid rgba(17, 24, 39, 0.14)",
                borderRadius: 8,
                color: locked ? "#6B7280" : "#111827",
                cursor: locked ? "not-allowed" : "pointer",
                display: "grid",
                gap: 12,
                padding: 16,
                textAlign: "left",
              }}
              title={locked ? "Upgrade to Pro" : `Choose ${option.pace}`}
              type="submit"
              value={option.pace}
            >
              <strong style={{ textTransform: "capitalize" }}>{option.pace}</strong>
              <span>{option.colorsPerYear}</span>
              <span
                aria-hidden="true"
                style={{ display: "grid", gap: 4, gridTemplateColumns: "repeat(3, 1fr)" }}
              >
                {option.preview.map((color, index) => (
                  <span
                    key={`${option.pace}-${color}-${index}`}
                    style={{
                      aspectRatio: "1",
                      background: color,
                      borderRadius: 4,
                    }}
                  />
                ))}
              </span>
              {locked ? <span>Upgrade to Pro</span> : null}
            </button>
          );
        })}
      </div>
    </form>
  );
}
