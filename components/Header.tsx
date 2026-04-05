import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header
      style={{ borderBottom: "1px solid var(--color-border)" }}
      className="w-full"
    >
      <div className="max-w-[680px] mx-auto px-5 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-bold tracking-tight"
          style={{ color: "var(--color-foreground)" }}
        >
          <span style={{ color: "var(--color-accent)" }}>🌿</span>
          <span className="text-lg">따뜻한 일상</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6 text-sm" style={{ color: "var(--color-muted)" }}>
            <Link href="/blog" className="hover:opacity-70 transition-opacity">
              글 목록
            </Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              소개
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
