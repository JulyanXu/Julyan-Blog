export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogArticle = {
  slug: string;
  img: string;
  tag: string;
  title: string;
  excerpt: string;
  author: string;
  avatar?: string;
  date: string;
  read: string;
  externalUrl?: string;
  body: ArticleBlock[];
};

export const site = {
  name: "Julyan Blog",
  description: "Notes on design, code, products, and the small decisions behind personal projects.",
  email: "1581085037@qq.com",
  githubRepositoriesUrl: "https://github.com/JulyanXu?tab=repositories",
  githubProjectIntro: {
    title: "GitHub Projects",
    description:
      "The blog keeps the thinking, notes, and release stories. GitHub keeps the code and project pages, so the writing and the work can point back to each other.",
    cta: "View projects on GitHub",
  },
  icp: {
    number: "粤ICP备2026052106号-2",
    href: "https://beian.miit.gov.cn/",
  },
  nav: [
    { label: "Essays", href: "#latest-notes", category: "All" },
    { label: "Design", href: "#latest-notes", category: "Design" },
    { label: "Code", href: "#latest-notes", category: "Code" },
    { label: "Projects", href: "https://github.com/JulyanXu?tab=repositories", external: true },
    { label: "About", href: "#about" },
  ],
  footerLinks: [
    { label: "Archive", href: "#latest-notes" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "https://github.com/JulyanXu?tab=repositories", external: true },
  ],
};

const author = {
  name: "Julyan",
  avatar: "https://i.pravatar.cc/64?img=12",
};

export const heroArticles: BlogArticle[] = [
  {
    slug: "designing-a-quiet-homepage",
    img: "https://images.unsplash.com/photo-1702401708068-c6a59562e01b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80",
    tag: "Design",
    title: "Designing a Quiet Homepage",
    excerpt: "How I am turning a Figma sketch into a calmer personal blog that can grow with the writing.",
    author: author.name,
    avatar: author.avatar,
    date: "May 06, 2026",
    read: "5 min read",
    body: [
      {
        type: "paragraph",
        text: "A personal blog does not need to shout. The first job of this homepage is to make the writing easy to browse, while still carrying enough visual character to feel personal.",
      },
      { type: "heading", text: "Start from the prototype" },
      {
        type: "paragraph",
        text: "The Figma export gives the site a useful visual direction: generous imagery, a clear hero area, and simple article cards. The implementation keeps that shape, but moves content into data so the interface is easier to maintain.",
      },
      { type: "quote", text: "A good first version should make the next version obvious." },
      { type: "heading", text: "Keep the system small" },
      {
        type: "paragraph",
        text: "For now, posts live in a local TypeScript file. That is enough to test categories, article pages, and publishing rhythm before introducing Markdown, MDX, or a CMS.",
      },
    ],
  },
  {
    slug: "notes-from-building-small-tools",
    img: "https://images.unsplash.com/photo-1654488719071-40a7a4b0d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80",
    tag: "Code",
    title: "Notes From Building Small Tools",
    excerpt: "The practical value of tiny interfaces, local workflows, and prototypes that answer one question well.",
    author: author.name,
    avatar: author.avatar,
    date: "Apr 28, 2026",
    read: "7 min read",
    body: [
      {
        type: "paragraph",
        text: "Small tools are useful because they create fast feedback. They make one repeated decision cheaper, and that clarity is often more valuable than a large feature set.",
      },
      { type: "heading", text: "Build around the repeated action" },
      {
        type: "paragraph",
        text: "The interface should make the common path feel almost invisible. Everything else can wait until the workflow proves that it needs to exist.",
      },
      { type: "heading", text: "Leave room for deletion" },
      {
        type: "paragraph",
        text: "When a prototype is small, removing a weak idea is easy. That keeps the project honest and prevents the codebase from becoming a museum of abandoned guesses.",
      },
    ],
  },
  {
    slug: "keeping-a-product-journal",
    img: "https://images.unsplash.com/photo-1636622437109-b7f8ed02c2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80",
    tag: "Process",
    title: "Keeping a Product Journal",
    excerpt: "A lightweight habit for recording product decisions before memory edits out the hard parts.",
    author: author.name,
    avatar: author.avatar,
    date: "Apr 12, 2026",
    read: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "A product journal is less about polished writing and more about preserving context. The useful parts are the tradeoffs, constraints, and reasons that disappear after a project starts working.",
      },
      { type: "heading", text: "Write before the decision feels obvious" },
      {
        type: "paragraph",
        text: "The best notes are captured while the alternatives are still uncomfortable. Later, they help explain why the final shape looks the way it does.",
      },
      { type: "quote", text: "Documentation is most useful when it records uncertainty, not only conclusions." },
      {
        type: "paragraph",
        text: "This blog will use that habit as a starting point: short posts, clear tags, and enough structure to find old thinking again.",
      },
    ],
  },
];

import { suujikatAiDaily20260506 } from "./articles/suujikat-ai-daily-2026-05-06";
import { suujikatAiDaily20260507 } from "./articles/suujikat-ai-daily-2026-05-07";
import { suujikatAiDaily20260508 } from "./articles/suujikat-ai-daily-2026-05-08";
import { suujikatAiDaily20260509 } from "./articles/suujikat-ai-daily-2026-05-09";
import { suujikatAiDaily20260511 } from "./articles/suujikat-ai-daily-2026-05-11";
import { suujikatAiDaily20260512 } from "./articles/suujikat-ai-daily-2026-05-12";
import { suujikatAiDaily20260513 } from "./articles/suujikat-ai-daily-2026-05-13";
import { suujikatAiDaily20260514 } from "./articles/suujikat-ai-daily-2026-05-14";
import { suujikatAiDaily20260515 } from "./articles/suujikat-ai-daily-2026-05-15";
import { marathonFirstYear } from "./articles/marathon-first-year";

export const categories = ["All", "AI", "Design", "Code", "Product", "Notes", "Projects"];

export const posts: BlogArticle[] = [
  suujikatAiDaily20260515,
  suujikatAiDaily20260514,
  marathonFirstYear,
  suujikatAiDaily20260513,
  suujikatAiDaily20260512,
  suujikatAiDaily20260511,
  suujikatAiDaily20260509,
  suujikatAiDaily20260508,
  suujikatAiDaily20260507,
  suujikatAiDaily20260506,
  ...heroArticles,
  {
    slug: "what-belongs-on-a-personal-blog",
    img: "https://images.unsplash.com/photo-1608708853716-db81026691b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    tag: "Notes",
    title: "What Belongs on a Personal Blog",
    excerpt: "A working definition for essays, project logs, reading notes, and experiments.",
    author: author.name,
    avatar: author.avatar,
    date: "Mar 30, 2026",
    read: "4 min read",
    body: [
      {
        type: "paragraph",
        text: "A personal blog can hold anything, which is exactly why it needs a few boundaries. The first version will focus on durable notes: things worth finding again in six months.",
      },
      { type: "heading", text: "Use categories as promises" },
      {
        type: "paragraph",
        text: "Design posts should show visual decisions. Code posts should include implementation details. Product notes should make tradeoffs explicit.",
      },
    ],
  },
  {
    slug: "a-small-reading-system",
    img: "https://images.unsplash.com/photo-1664088673619-38b275539bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    tag: "Notes",
    title: "A Small Reading System",
    excerpt: "How saved quotes, summaries, and follow-up questions can turn reading into reusable material.",
    author: author.name,
    avatar: author.avatar,
    date: "Mar 18, 2026",
    read: "5 min read",
    body: [
      {
        type: "paragraph",
        text: "Reading notes become useful when they are easy to revisit. The goal is not to capture everything, but to keep the parts that can change future work.",
      },
      { type: "heading", text: "Summaries before storage" },
      {
        type: "paragraph",
        text: "A short summary forces a point of view. It also makes search more meaningful than a folder full of untouched highlights.",
      },
    ],
  },
  {
    slug: "prototype-before-polish",
    img: "https://images.unsplash.com/photo-1722152909289-89d345b9c9a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    tag: "Product",
    title: "Prototype Before Polish",
    excerpt: "A reminder to answer the risky question before tuning the surface.",
    author: author.name,
    avatar: author.avatar,
    date: "Feb 26, 2026",
    read: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "Polish can hide weak assumptions. A prototype should answer the riskiest question first, even when the interface is still rough.",
      },
      { type: "quote", text: "Make the unknown visible before making the visible beautiful." },
      {
        type: "paragraph",
        text: "Once the risky path works, visual refinement has a stronger foundation and fewer decisions are wasted.",
      },
    ],
  },
  {
    slug: "design-systems-as-memory",
    img: "https://images.unsplash.com/photo-1687876252613-bfc815c8aab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    tag: "Design",
    title: "Design Systems as Memory",
    excerpt: "Tokens, components, and written rules as a way to remember why an interface behaves consistently.",
    author: author.name,
    avatar: author.avatar,
    date: "Feb 14, 2026",
    read: "7 min read",
    body: [
      {
        type: "paragraph",
        text: "A design system is not only a component library. It is a memory system for decisions that should not be remade on every screen.",
      },
      { type: "heading", text: "Rules need examples" },
      {
        type: "paragraph",
        text: "Tokens describe the options, but examples describe judgment. The two work best together.",
      },
    ],
  },
  {
    slug: "making-room-for-project-logs",
    img: "https://images.unsplash.com/photo-1728035728955-0c159ea5249a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    tag: "Projects",
    title: "Making Room for Project Logs",
    excerpt: "Why personal projects deserve logs that track intent, implementation, and unresolved questions.",
    author: author.name,
    avatar: author.avatar,
    date: "Jan 31, 2026",
    read: "4 min read",
    body: [
      {
        type: "paragraph",
        text: "Project logs make progress legible. They capture the current bet, the next constraint, and the thing that still needs proof.",
      },
      {
        type: "paragraph",
        text: "This format keeps the blog close to the work instead of turning every post into a finished essay.",
      },
    ],
  },
  {
    slug: "local-first-drafts",
    img: "https://images.unsplash.com/photo-1543105619-c1d621b43ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    tag: "Code",
    title: "Local-first Drafts",
    excerpt: "Starting with plain local data before choosing a larger publishing pipeline.",
    author: author.name,
    avatar: author.avatar,
    date: "Jan 12, 2026",
    read: "5 min read",
    body: [
      {
        type: "paragraph",
        text: "Local data keeps the first version simple. There is no authoring pipeline to debug before the site proves what it wants to be.",
      },
      { type: "heading", text: "Migrate when the pain is real" },
      {
        type: "paragraph",
        text: "Markdown or MDX will make sense once there are enough posts for writing ergonomics to matter more than implementation speed.",
      },
    ],
  },
];

export const articleBySlug = new Map(posts.map((post) => [post.slug, post]));
