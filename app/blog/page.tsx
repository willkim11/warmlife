import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "글 목록",
  description: "생활비 절약, 정부지원금, 보험, 주거 제도 관련 글 목록입니다.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8" style={{ color: "var(--color-foreground)" }}>
        글 목록
      </h1>

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
    </div>
  );
}
