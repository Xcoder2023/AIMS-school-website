import { Metadata } from "next";
import { notFound } from "next/navigation";

import Hero from "@/components/news/details/Hero";
import Article from "@/components/news/details/Article";
import RelatedNews from "@/components/news/details/RelatedNews";

import { news } from "@/data/news/news";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const article = news.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const relatedNews = news.filter(
    (item) =>
      item.category === article.category &&
      item.slug !== article.slug
  );

  return (
    <main>
      <Hero article={article} />
      <Article article={article} />
      <RelatedNews news={relatedNews} />
    </main>
  );
}

export async function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = news.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "News Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}