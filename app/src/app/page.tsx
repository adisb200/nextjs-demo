import Image from "next/image";

export default function Home() {
  return (
    <main style={{ display: "grid", gap: 48, padding: "48px clamp(20px, 6vw, 80px)" }}>
      <section style={{ alignItems: "center", display: "grid", gap: 32, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <div style={{ display: "grid", gap: 20 }}>
          <p style={{ margin: 0, textTransform: "uppercase" }}>Colorday</p>
          <h1 style={{ fontSize: "clamp(44px, 8vw, 88px)", lineHeight: 1, margin: 0 }}>
            Build a mosaic one color at a time.
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.6, margin: 0, maxWidth: 680 }}>
            Choose a daily, weekly, or monthly delivery pace. Each color fills a tile in your personal abstract canvas until the finished artwork is yours.
          </p>
        </div>
        <Image
          alt="A colorful abstract mosaic artwork"
          height={630}
          priority
          src="/mosaic-og.svg"
          style={{ borderRadius: 8, height: "auto", width: "100%" }}
          width={1200}
        />
      </section>
    </main>
  );
}
