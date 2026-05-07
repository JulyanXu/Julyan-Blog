import { useState } from "react";
import { ArrowLeft, Bookmark, Check, Facebook, Link2, Share2, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { site, type ArticleBlock, type BlogArticle } from "../data/blog";

function ArticleBodyBlock({ block }: { block: ArticleBlock }) {
  if (block.type === "heading") {
    if (block.level === 3) {
      return <h3>{block.text}</h3>;
    }

    return <h2>{block.text}</h2>;
  }

  if (block.type === "quote") {
    return (
      <blockquote className="border-l-4 border-neutral-300 pl-4 italic text-neutral-600">
        "{block.text}"{block.cite ? ` - ${block.cite}` : ""}
      </blockquote>
    );
  }

  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";

    return (
      <ListTag className={`space-y-2 pl-5 ${block.ordered ? "list-decimal" : "list-disc"}`}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ListTag>
    );
  }

  if (block.type === "image") {
    return (
      <figure className="space-y-2">
        <ImageWithFallback src={block.src} alt={block.alt} className="w-full rounded-xl object-cover" />
        {block.caption && <figcaption className="text-sm text-neutral-500">{block.caption}</figcaption>}
      </figure>
    );
  }

  return <p>{block.text}</p>;
}

export function ArticlePage({
  article,
  articleUrl,
  isBookmarked,
  onBack,
  onToggleBookmark,
}: {
  article: BlogArticle;
  articleUrl: string;
  isBookmarked: boolean;
  onBack: () => void;
  onToggleBookmark: () => void;
}) {
  const [shareMessage, setShareMessage] = useState("");

  const showShareMessage = (message: string) => {
    setShareMessage(message);
    window.setTimeout(() => setShareMessage(""), 1800);
  };

  const copyArticleUrl = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      showShareMessage("Link copied");
    } catch {
      showShareMessage("Copy failed");
    }
  };

  const shareArticle = async () => {
    const shareData = {
      title: article.title,
      text: article.excerpt,
      url: articleUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await copyArticleUrl();
    } catch {
      showShareMessage("Share canceled");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={article.img}
          alt=""
          className="absolute inset-0 h-full w-full scale-125 object-cover blur-3xl"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative">
          <header className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6 text-white">
            <button onClick={onBack} className="flex items-center gap-2 text-sm text-white/85 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <nav className="hidden items-center gap-5 text-sm text-white/85 md:flex">
              {site.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={onToggleBookmark}
                aria-pressed={isBookmarked}
                aria-label={isBookmarked ? "Remove bookmark" : "Bookmark article"}
                className={`rounded-full border border-white/20 p-2 text-white backdrop-blur hover:bg-white/20 ${
                  isBookmarked ? "bg-white/25" : "bg-white/10"
                }`}
              >
                <Bookmark className="h-4 w-4" />
              </button>
              <button
                onClick={shareArticle}
                aria-label="Share article"
                className="rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </header>

          <div className="mx-auto max-w-4xl px-6 pb-10 pt-10 text-white">
            <Badge className="bg-white/15 text-white backdrop-blur hover:bg-white/25">{article.tag}</Badge>
            <h1 className="mt-4 leading-tight text-white">{article.title}</h1>
            <p className="mt-4 max-w-2xl text-white/85">{article.excerpt}</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 ring-2 ring-white/30">
                  {article.avatar && <AvatarImage src={article.avatar} />}
                  <AvatarFallback>{article.author.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div>{article.author}</div>
                  <div className="text-white/70">
                    {article.date} · {article.read}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span className="hidden text-sm sm:inline">{shareMessage || "Share"}</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(articleUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on Twitter"
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/10 hover:bg-white/20"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on Facebook"
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/10 hover:bg-white/20"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <button
                  onClick={copyArticleUrl}
                  aria-label="Copy article link"
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/10 hover:bg-white/20"
                >
                  {shareMessage === "Link copied" ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-5xl px-6 pb-16">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback src={article.img} alt={article.title} className="h-[460px] w-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-neutral-800">
        {article.body.map((block, index) => (
          <ArticleBodyBlock key={`${article.slug}-${index}`} block={block} />
        ))}
      </article>
    </div>
  );
}
