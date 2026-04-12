export default function LoginPage() {
  return (
    <main style={{ display: "grid", gap: 16, padding: "48px clamp(20px, 6vw, 80px)" }}>
      <h1 style={{ fontSize: 48, margin: 0 }}>Log in</h1>
      <p style={{ fontSize: 20, lineHeight: 1.6, margin: 0 }}>
        Connect an auth provider here to start receiving Colorday tiles.
      </p>
    </main>
  );
}
