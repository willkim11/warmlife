import Link from "next/link";
import { PostMeta, formatDate } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="py-7" style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div className="flex items-center gap-3 mb-2 text-sm" style={{ color: "var(--color-muted)" }}>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>·</span>
        <span
          className="px-2 py-0.5 rounded-full text-xs font-medium"
          style={{ background: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
        >
          {post.category}
        </span>
      </div>
      <Link href={`/blog/${post.slug}`}>
        <h2
          className="text-xl font-semibold mb-2 leading-snug hover:opacity-70 transition-opacity"
          style={{ color: "var(--color-foreground)" }}
        >
          {post.title}
        </h2>
      </Link>
      <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
        {post.description}
      </p>
    </article>
  );
}
