import { getAllPostSlugs, getPostBySlug, formatDate } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import remarkGfm from "remark-gfm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
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
        <hr className="mt-8" style={{ borderColor: "var(--color-border)" }} />
      </header>

      <div className="prose" style={{ maxWidth: "100%" }}>
        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </article>
  );
}
