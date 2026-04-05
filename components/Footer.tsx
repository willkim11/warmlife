export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-muted)" }}
      className="w-full mt-auto"
    >
      <div className="max-w-[680px] mx-auto px-5 py-6 text-sm text-center">
        © {new Date().getFullYear()} 따뜻한 일상. All rights reserved.
      </div>
    </footer>
  );
}
