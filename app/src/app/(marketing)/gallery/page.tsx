import Image from "next/image";

export const revalidate = 3600;

const mosaics = [
  { id: "north-light", title: "North Light" },
  { id: "second-rain", title: "Second Rain" },
  { id: "quiet-signal", title: "Quiet Signal" },
];

export default function GalleryPage() {
  return (
    <main style={{ display: "grid", gap: 32, padding: "48px clamp(20px, 6vw, 80px)" }}>
      <div>
        <p style={{ margin: "0 0 8px", textTransform: "uppercase" }}>Gallery</p>
        <h1 style={{ fontSize: 48, margin: 0 }}>Community mosaics</h1>
      </div>
      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {mosaics.map((mosaic) => (
          <article key={mosaic.id} style={{ display: "grid", gap: 12 }}>
            <Image
              alt={`${mosaic.title} mosaic preview`}
              height={630}
              src="/mosaic-og.svg"
              style={{ borderRadius: 8, height: "auto", width: "100%" }}
              width={1200}
            />
            <h2 style={{ margin: 0 }}>{mosaic.title}</h2>
          </article>
        ))}
      </div>
    </main>
  );
}
