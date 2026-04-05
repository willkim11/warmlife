import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-muted)" }}
      className="w-full mt-auto"
    >
      <div className="max-w-[680px] mx-auto px-5 py-6 text-sm text-center space-y-2">
        <div className="flex items-center justify-center gap-4">
          <Link href="/privacy-policy" className="hover:opacity-70 transition-opacity">
            개인정보처리방침
          </Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">
            소개
          </Link>
        </div>
        <div>© {new Date().getFullYear()} 따뜻한 일상. All rights reserved.</div>
      </div>
    </footer>
  );
}
