import Link from "next/link";
import { notFound } from "next/navigation";
import { Wayfinding } from "@/components/museum/Wayfinding";
import { HallHeader } from "@/components/museum/HallHeader";
import { articles, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <Wayfinding
        youAreHere={article.title}
        crumbs={[
          { label: "Entrance", href: "/" },
          { label: "Archive", href: "/articles" },
          { label: "Essay" },
        ]}
      />
      <HallHeader
        wing={`${article.publishedLabel} · ${article.epoch}`}
        title={article.title}
        subtitle={article.deck}
        span={`${article.readingMinutes} min read`}
      />
      <div className="prose-museum">
        {article.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-2">
        {article.tags.map((t) => (
          <span key={t} className="border border-museum-brass/30 px-2 py-1 text-[10px] uppercase tracking-wider text-museum-brass">
            {t}
          </span>
        ))}
      </div>
      <p className="mt-10 text-sm">
        <Link href={`/epochs/${article.epoch}`} className="text-museum-brass hover:underline focus-ring">
          ← Return to the {article.epoch} wing
        </Link>
      </p>
    </article>
  );
}
