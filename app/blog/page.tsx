import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "글 목록",
  description: "생활비 절약, 정부지원금, 보험, 주거 제도 관련 글 목록입니다.",
  alternates: {
    canonical: "/blog",
  },
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams?: Promise<{
    page?: string;
  }>;
}

function getPageHref(page: number) {
  return page === 1 ? "/blog" : `/blog?page=${page}`;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const requestedPage = Number(params?.page ?? "1");
  const posts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? Math.min(requestedPage, totalPages)
      : 1;
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--color-foreground)" }}>
          글 목록
        </h1>
        <p className="text-sm" style={{ color: "var(--color-muted)" }}>
          전체 {posts.length}개 글 중 {startIndex + 1}-
          {Math.min(startIndex + POSTS_PER_PAGE, posts.length)}번째 글
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="py-10 text-center" style={{ color: "var(--color-muted)" }}>
          아직 작성된 글이 없습니다.
        </p>
      ) : (
        <div>
          {paginatedPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <nav
          aria-label="글 목록 페이지"
          className="mt-10 flex items-center justify-between gap-4"
        >
          {currentPage > 1 ? (
            <Link
              href={getPageHref(currentPage - 1)}
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-accent)" }}
            >
              이전
            </Link>
          ) : (
            <span className="text-sm opacity-40">이전</span>
          )}

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const isCurrent = page === currentPage;

              return (
                <Link
                  key={page}
                  href={getPageHref(page)}
                  aria-current={isCurrent ? "page" : undefined}
                  className="min-w-9 h-9 px-3 inline-flex items-center justify-center rounded border text-sm font-medium transition-opacity hover:opacity-70"
                  style={{
                    borderColor: "var(--color-border)",
                    background: isCurrent ? "var(--color-badge-bg)" : "transparent",
                    color: isCurrent ? "var(--color-badge-text)" : "var(--color-muted)",
                  }}
                >
                  {page}
                </Link>
              );
            })}
          </div>

          {currentPage < totalPages ? (
            <Link
              href={getPageHref(currentPage + 1)}
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-accent)" }}
            >
              다음
            </Link>
          ) : (
            <span className="text-sm opacity-40">다음</span>
          )}
        </nav>
      )}
    </div>
  );
}
