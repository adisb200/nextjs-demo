type PricingCardProps = {
  name: string;
  price: string;
  features: string[];
};

export function PricingCard({ name, price, features }: PricingCardProps) {
  return (
    <article
      style={{
        border: "1px solid rgba(17, 24, 39, 0.14)",
        borderRadius: 8,
        display: "grid",
        gap: 16,
        padding: 20,
      }}
    >
      <h2 style={{ margin: 0 }}>{name}</h2>
      <p style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>{price}</p>
      <ul style={{ display: "grid", gap: 8, margin: 0, paddingLeft: 20 }}>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
}
