import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Globe,
  Search,
  X,
} from "lucide-react";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Separator } from "./components/ui/separator";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ArticlePage } from "./components/article-page";
import { articleBySlug, categories, heroArticles, posts, site, type BlogArticle } from "./data/blog";

type SortMode = "latest" | "oldest";

function getArticleTimestamp(post: BlogArticle) {
  const parsed = Date.parse(post.date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function getArticleUrl(slug: string) {
  return `${window.location.origin}${window.location.pathname}#article/${encodeURIComponent(slug)}`;
}

function HeroWithNav({
  onOpen,
  query,
  onQueryChange,
  onCategoryChange,
}: {
  onOpen: (slug: string) => void;
  query: string;
  onQueryChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % heroArticles.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = heroArticles[idx];

  return (
    <section className="relative">
      <div className="relative overflow-hidden">
        {heroArticles.map((s, i) => (
          <ImageWithFallback
            key={s.slug}
            src={s.img}
            alt={s.title}
            onClick={() => onOpen(s.slug)}
            className={`absolute inset-0 h-full w-full cursor-pointer object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <ImageWithFallback src={slide.img} alt="" className="invisible h-[480px] w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70" />

        <div className="absolute inset-x-0 top-0 z-10">
          <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6 text-white">
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-white text-neutral-900">✦</div>
              <span>{site.name}</span>
            </div>
            <nav className="hidden items-center gap-5 text-sm text-white/85 md:flex">
              {site.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  onClick={() => {
                    if (item.category) {
                      onCategoryChange(item.category);
                    }
                  }}
                  className="hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="relative ml-auto hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
              <input
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="Search essays..."
                className="h-9 w-64 rounded-full border border-white/20 bg-white/10 pl-9 pr-4 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur focus:border-white/40"
              />
            </div>
            <a
              href="#latest-notes"
              onClick={() => onCategoryChange("All")}
              className="rounded-full bg-white px-4 py-1.5 text-sm text-neutral-900 hover:bg-white/90"
            >
              Archive
            </a>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-white md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge className="bg-black/50 text-white backdrop-blur hover:bg-black/60">{slide.tag}</Badge>
            <h1 className="leading-tight text-white">{slide.title}</h1>
            <p className="max-w-xl text-sm text-white/85">{slide.excerpt}</p>
            <div className="flex items-center gap-2 pt-2">
              {heroArticles.map((_, i) => (
                <button
                  key={i}
                  aria-label={`slide ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2 bg-white/50"}`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-full text-right">
            <div className="text-sm">
              <div>{slide.author}</div>
              <div className="text-white/70">
                {slide.date} · {slide.read}
              </div>
            </div>
            <Avatar className="h-9 w-9 ring-2 ring-white/40">
              <AvatarImage src={slide.avatar} />
              <AvatarFallback>{slide.author.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onCategoryChange(c)}
          className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
            c === activeCategory
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-white text-muted-foreground hover:text-foreground"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

function PostCard({ post, onOpen }: { post: BlogArticle; onOpen: (slug: string) => void }) {
  const handleOpen = () => {
    if (post.externalUrl) {
      window.location.assign(post.externalUrl);
      return;
    }

    onOpen(post.slug);
  };

  return (
    <article
      onClick={handleOpen}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative h-44 overflow-hidden">
        <ImageWithFallback
          src={post.img}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="text-xs text-muted-foreground">{post.date}</div>
        <h3 className="leading-snug">{post.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
        <div className="mt-auto flex items-center gap-2 pt-3">
          <Avatar className="h-7 w-7">
            {post.avatar && <AvatarImage src={post.avatar} />}
            <AvatarFallback>{post.author.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{post.author}</span>
        </div>
      </div>
    </article>
  );
}

function BlogGrid({
  filteredPosts,
  activeCategory,
  query,
  sortMode,
  onCategoryChange,
  onQueryChange,
  onSortModeChange,
  onOpen,
}: {
  filteredPosts: BlogArticle[];
  activeCategory: string;
  query: string;
  sortMode: SortMode;
  onCategoryChange: (category: string) => void;
  onQueryChange: (query: string) => void;
  onSortModeChange: (mode: SortMode) => void;
  onOpen: (slug: string) => void;
}) {
  return (
    <section id="latest-notes" className="mx-auto max-w-7xl scroll-mt-8 px-6 py-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2>Latest Notes</h2>
          <p className="text-sm text-muted-foreground">Essays, project logs, and working notes from this blog.</p>
        </div>
        <button
          onClick={() => onSortModeChange(sortMode === "latest" ? "oldest" : "latest")}
          className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
        >
          Sort: {sortMode === "latest" ? "Latest" : "Oldest"} <ChevronDown className="h-4 w-4" />
        </button>
      </div>
      <div className="mb-5 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search essays..."
            className="h-10 w-full rounded-full border bg-white pl-9 pr-10 text-sm outline-none focus:border-neutral-400"
          />
          {query && (
            <button
              onClick={() => onQueryChange("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      <div className="mb-8">
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={onCategoryChange} />
      </div>
      <div className="mb-5 flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>
          Showing {filteredPosts.length} of {posts.length} posts
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </span>
        <button
          onClick={() => onSortModeChange(sortMode === "latest" ? "oldest" : "latest")}
          className="inline-flex items-center gap-1 rounded-full border bg-white px-3 py-1.5 hover:text-foreground md:hidden"
        >
          {sortMode === "latest" ? "Latest" : "Oldest"} <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((p) => (
            <PostCard key={p.slug} post={p} onOpen={onOpen} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border bg-white px-6 py-10 text-center text-sm text-muted-foreground">
          No posts found{query ? ` for "${query}"` : ""}.
        </div>
      )}
    </section>
  );
}

const WORKSPACE_IMAGE =
  "https://images.unsplash.com/photo-1649866187721-230095765727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const WIDE_IMAGE =
  "https://images.unsplash.com/photo-1633294070758-68ab308898ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80";

function Promo({ onCategoryChange }: { onCategoryChange: (category: string) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="grid grid-rows-2 gap-4 md:col-span-4">
          <div className="relative overflow-hidden rounded-2xl bg-neutral-900 p-6 text-white">
            <Globe className="h-5 w-5 text-white/60" />
            <div className="mt-8 space-y-2">
              <h2 className="text-white leading-tight">A small place for durable thinking</h2>
              <p className="text-sm text-white/70">Design notes, code decisions, and project journals.</p>
            </div>
            <Button asChild variant="secondary" className="mt-5 rounded-full bg-white text-neutral-900 hover:bg-white/90">
              <a href="#latest-notes" onClick={() => onCategoryChange("All")}>
                Read the archive <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <ImageWithFallback src={WORKSPACE_IMAGE} alt="workspace" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-5 left-5 text-white">
              <div className="text-sm text-white/80">Drafts and notes</div>
              <div className="text-4xl">{posts.length}</div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl md:col-span-8 min-h-[420px]">
          <ImageWithFallback src={WIDE_IMAGE} alt="quiet landscape" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <h2 className="max-w-md leading-tight text-white">
              A personal archive for ideas before they become too polished
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onCategoryChange }: { onCategoryChange: (category: string) => void }) {
  return (
    <footer id="about" className="bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-white text-neutral-900">✦</div>
              <span>{site.name}</span>
            </div>
            <p className="max-w-xs text-sm text-neutral-400">{site.description}</p>
          </div>
          <div className="space-y-3 md:col-span-2">
            <div className="text-white">Browse</div>
            <ul className="space-y-2 text-sm text-neutral-400">
              {site.footerLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 md:col-span-2">
            <div className="text-white">Topics</div>
            <ul className="space-y-2 text-sm text-neutral-400">
              {categories.slice(1, 4).map((item) => (
                <li key={item}>
                  <a href="#latest-notes" onClick={() => onCategoryChange(item)} className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 space-y-4 md:col-span-4">
            <div className="text-white">{site.githubProjectIntro.title}</div>
            <p className="max-w-sm text-sm leading-6 text-neutral-400">{site.githubProjectIntro.description}</p>
            <a
              href={site.githubRepositoriesUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-100 transition-colors hover:bg-neutral-800"
            >
              <Github className="h-4 w-4" />
              {site.githubProjectIntro.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <Separator className="my-8 bg-neutral-800" />
        <div className="flex flex-col items-start justify-between gap-3 text-xs text-neutral-500 md:flex-row md:items-center">
          <div>©2026 {site.name}. All rights reserved.</div>
          <div>Built and maintained by Julyan.</div>
        </div>
        <div className="mt-5 text-center text-xs text-neutral-500">
          <a
            href={site.icp.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            {site.icp.number}
          </a>
        </div>
        <div className="mt-3 text-center text-xs text-neutral-500">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("latest");
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("bookmarkedArticles") ?? "[]"));
    } catch {
      return new Set();
    }
  });
  const article = selectedSlug ? articleBySlug.get(selectedSlug) : null;
  const normalizedQuery = query.trim().toLowerCase();

  useEffect(() => {
    const syncArticleFromHash = () => {
      const match = window.location.hash.match(/^#article\/(.+)$/);
      setSelectedSlug(match ? decodeURIComponent(match[1]) : null);
    };

    syncArticleFromHash();
    window.addEventListener("hashchange", syncArticleFromHash);
    return () => window.removeEventListener("hashchange", syncArticleFromHash);
  }, []);

  const filteredPosts = useMemo(() => {
    return posts
      .filter((post) => {
        const matchesCategory = activeCategory === "All" || post.tag === activeCategory;
        const searchableText = `${post.title} ${post.excerpt} ${post.tag} ${post.author}`.toLowerCase();
        return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
      })
      .sort((a, b) => {
        const result = getArticleTimestamp(b) - getArticleTimestamp(a);
        return sortMode === "latest" ? result : -result;
      });
  }, [activeCategory, normalizedQuery, sortMode]);

  const open = (slug: string) => {
    setSelectedSlug(slug);
    window.history.pushState(null, "", `#article/${encodeURIComponent(slug)}`);
    window.scrollTo({ top: 0 });
  };

  const closeArticle = () => {
    setSelectedSlug(null);
    window.history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
    window.scrollTo({ top: 0 });
  };

  const toggleBookmark = (slug: string) => {
    setBookmarkedSlugs((current) => {
      const next = new Set(current);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }

      localStorage.setItem("bookmarkedArticles", JSON.stringify([...next]));
      return next;
    });
  };

  if (article) {
    return (
      <ArticlePage
        article={article}
        isBookmarked={bookmarkedSlugs.has(article.slug)}
        articleUrl={getArticleUrl(article.slug)}
        onBack={closeArticle}
        onToggleBookmark={() => toggleBookmark(article.slug)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-foreground">
      <HeroWithNav
        onOpen={open}
        query={query}
        onQueryChange={setQuery}
        onCategoryChange={setActiveCategory}
      />
      <BlogGrid
        filteredPosts={filteredPosts}
        activeCategory={activeCategory}
        query={query}
        sortMode={sortMode}
        onCategoryChange={setActiveCategory}
        onQueryChange={setQuery}
        onSortModeChange={setSortMode}
        onOpen={open}
      />
      <Promo onCategoryChange={setActiveCategory} />
      <Footer onCategoryChange={setActiveCategory} />
    </div>
  );
}
