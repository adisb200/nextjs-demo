import { PricingCard } from "@/components/PricingCard";

const tiers = [
  {
    name: "Free",
    price: "$0",
    features: ["Daily pace", "12-tile mosaic", "No download"],
  },
  {
    name: "Pro",
    price: "$8",
    features: ["Daily, weekly, or monthly pace", "Unlimited mosaic", "Downloadable canvas"],
  },
  {
    name: "Team",
    price: "$24",
    features: ["Everything in Pro", "Shared team mosaic canvas", "Up to 10 members"],
  },
];

export default function PricingPage() {
  return (
    <main style={{ display: "grid", gap: 32, padding: "48px clamp(20px, 6vw, 80px)" }}>
      <div>
        <p style={{ margin: "0 0 8px", textTransform: "uppercase" }}>Pricing</p>
        <h1 style={{ fontSize: 48, margin: 0 }}>Choose your color rhythm.</h1>
      </div>
      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {tiers.map((tier) => (
          <PricingCard
            features={tier.features}
            key={tier.name}
            name={tier.name}
            price={tier.price}
          />
        ))}
      </div>
    </main>
  );
}
