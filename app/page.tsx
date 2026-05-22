import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div>
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--color-foreground)" }}>
          따뜻한 일상
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: "var(--color-muted)" }}>
          생활비 절약, 정부지원금, 보험, 주거 제도를 공식 출처와 함께 차분히 정리합니다.
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--color-muted)" }}>
            최근 글
          </h2>
          <Link
            href="/blog"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            전체 보기 →
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="py-10 text-center" style={{ color: "var(--color-muted)" }}>
            아직 작성된 글이 없습니다.
          </p>
        ) : (
          <div>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
