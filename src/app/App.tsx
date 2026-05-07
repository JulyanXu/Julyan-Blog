import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Github,
  Globe,
  Instagram,
  MessageCircle,
  Music2,
  Search,
  Twitter,
} from "lucide-react";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Separator } from "./components/ui/separator";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ArticlePage } from "./components/article-page";
import { articleBySlug, categories, heroArticles, posts, site, type BlogArticle } from "./data/blog";

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
        <Badge className="absolute left-3 top-3 bg-white/90 text-foreground hover:bg-white">{post.tag}</Badge>
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
  onCategoryChange,
  onOpen,
}: {
  filteredPosts: BlogArticle[];
  activeCategory: string;
  query: string;
  onCategoryChange: (category: string) => void;
  onOpen: (slug: string) => void;
}) {
  return (
    <section id="latest-notes" className="mx-auto max-w-7xl scroll-mt-8 px-6 py-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2>Latest Notes</h2>
          <p className="text-sm text-muted-foreground">Essays, project logs, and working notes from this blog.</p>
        </div>
        <button className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground md:inline-flex">
          Sort: Latest <ChevronDown className="h-4 w-4" />
        </button>
      </div>
      <div className="mb-8">
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={onCategoryChange} />
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
  const socialLinks = [
    { label: "GitHub", href: site.githubRepositoriesUrl, icon: Github },
    { label: "Instagram", href: "#", icon: Instagram },
    { label: "Twitter", href: "#", icon: Twitter },
    { label: "Facebook", href: "#", icon: Facebook },
    { label: "Messages", href: "#", icon: MessageCircle },
    { label: "Music", href: "#", icon: Music2 },
  ];

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
                  <a href={item.href} className="hover:text-white">
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
            <div className="text-white">Elsewhere</div>
            <p className="text-sm text-neutral-400">Project code and public updates live outside this site.</p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-neutral-800" />
        <div className="flex flex-col items-start justify-between gap-3 text-xs text-neutral-500 md:flex-row md:items-center">
          <div>©2026 {site.name}. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const article = selectedSlug ? articleBySlug.get(selectedSlug) : null;
  const normalizedQuery = query.trim().toLowerCase();
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.tag === activeCategory;
      const searchableText = `${post.title} ${post.excerpt} ${post.tag} ${post.author}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeCategory, normalizedQuery]);

  const open = (slug: string) => {
    setSelectedSlug(slug);
    window.scrollTo({ top: 0 });
  };

  if (article) {
    return <ArticlePage article={article} onBack={() => setSelectedSlug(null)} />;
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
        onCategoryChange={setActiveCategory}
        onOpen={open}
      />
      <Promo onCategoryChange={setActiveCategory} />
      <Footer onCategoryChange={setActiveCategory} />
    </div>
  );
}
