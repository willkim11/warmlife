import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import remarkGfm from "remark-gfm";
import { SITE_AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.canonicalSlug ?? post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${SITE_URL}/blog/${post.canonicalSlug ?? post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    inLanguage: "ko-KR",
    mainEntityOfPage: `${SITE_URL}/blog/${post.canonicalSlug ?? post.slug}`,
    author: {
      "@type": "Person",
      name: SITE_AUTHOR,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4 text-sm" style={{ color: "var(--color-muted)" }}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span
            className="px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ background: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
          >
            {post.category}
          </span>
        </div>
        <h1
          className="text-3xl font-bold leading-tight mb-4"
          style={{ color: "var(--color-foreground)" }}
        >
          {post.title}
        </h1>
        <p className="text-lg" style={{ color: "var(--color-muted)" }}>
          {post.description}
        </p>
        <p className="mt-4 text-sm" style={{ color: "var(--color-muted)" }}>
          기준일: {formatDate(post.updated || post.date)} · 작성자: {SITE_AUTHOR}
        </p>
        <hr className="mt-8" style={{ borderColor: "var(--color-border)" }} />
      </header>

      <div className="prose" style={{ maxWidth: "100%" }}>
        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
      <footer
        className="mt-12 pt-6 text-sm leading-relaxed"
        style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-muted)" }}
      >
        <p>
          이 글은 생활 정보 제공을 목적으로 작성되었습니다. 지원금, 세금, 보험, 대출 등 제도성 정보는 개인 상황과 시행 시점에 따라 달라질 수 있으므로 최종 신청·계약 전에는 반드시 공식 기관과 약관을 확인해 주세요.
        </p>
      </footer>
    </article>
  );
}
