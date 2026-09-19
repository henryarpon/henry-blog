# Master prompt: personal website (Angular SPA)

Paste everything below into your AI coding tool. Fill in the `[BRACKETS]` first.

---

## 1. Role and goal

You are a senior Angular engineer and a careful front-end designer. Build a **personal website** as an **Angular single-page app**: a quiet, text-first site where I publish blog posts, jot down unpolished notes about what I'm doing right now, link out to my YouTube videos, and keep a list of articles I'm reading.

The structure is modeled on ludwigabap.com: a short home page with recent writing and a mixed "recent activity" feed, plus separate pages for each content type. Keep the same structure, but make it more modern and polished, with a matte black theme that is easy on the eyes.

Work **one milestone at a time** (section 10). After each milestone, stop, summarize what you built, tell me how to run it, and wait for me to say "next".

## 2. Stack and conventions

- Latest stable Angular, **standalone components only** (no NgModules), strict TypeScript.
- Signals for state, `inject()` for DI, built-in control flow (`@if`, `@for`), `ChangeDetectionStrategy.OnPush`.
- Lazy-loaded routes with `loadComponent`, `withComponentInputBinding()` for route params, scroll restoration on navigation, and a page title per route.
- Plain SPA. **No SSR, no prerendering.**
- Plain CSS with CSS custom properties. No UI framework, no Tailwind, no component library.
- Extra dependencies allowed: `ngx-markdown` (pick the version matching the installed Angular major) and `@fontsource/merriweather`. Ask before adding anything else.
- Small, single-purpose components. Feature folders: `core/` (services, models, config), `shared/` (reusable UI), `features/<page>/`.

## 3. Scope

**In:** Home, Blog, Notes, References, Reading, About, theme toggle, mock data, responsive layout.

**Out (do not build):** SSR, RSS, search, tag filtering or tag pages, comments, auth, analytics, a backend. Tags are displayed but not clickable.

## 4. Routes

| Route | Page |
|---|---|
| `/` | Home: intro, recent blog posts, recent activity feed |
| `/blog` | List of posts, newest first |
| `/blog/:slug` | Post detail (rendered Markdown) |
| `/notes` | Feed of notes, newest first: my unpolished "what I'm doing now" log |
| `/notes/:slug` | Note detail (rendered Markdown) |
| `/references` | Grid of my YouTube videos |
| `/reading` | List of articles I'm reading |
| `/about` | About page |
| `**` | Simple not-found page with a link home |

Header navigation: Blog, Notes, References, Reading, About. The site name links home.

## 5. Data model

One shared base, four content types. Dates are ISO strings.

```ts
export type ContentType = 'post' | 'note' | 'video' | 'link';

export interface BaseItem {
  id: string;
  type: ContentType;
  title: string;
  date: string;          // ISO 8601
  tags: string[];        // hierarchical paths, e.g. 'cs/architecture', 'dotnet/azure-functions'
}

export interface Post extends BaseItem {
  type: 'post';
  slug: string;
  summary: string;
  body: string;          // Markdown
}

export interface Note extends BaseItem {
  type: 'note';
  slug: string;
  body: string;          // Markdown
}

export interface Video extends BaseItem {
  type: 'video';
  videoId: string;       // YouTube video ID
  description: string;   // short, 1-2 sentences
}

export interface LinkItem extends BaseItem {
  type: 'link';
  url: string;
  source: string;        // site name or domain, e.g. 'martinfowler.com'
}

export type ContentItem = Post | Note | Video | LinkItem;
```

- Reading time is **derived** from the body word count (about 200 words per minute) by a small utility. Do not store it.
- Video thumbnail URL: `https://i.ytimg.com/vi/{videoId}/hqdefault.jpg`. Video link: `https://www.youtube.com/watch?v={videoId}`.
- Tags are hierarchical strings. Show the last segment as the label and put the full path in the `title` attribute.

## 6. Mock data and the service layer

- **One mock data file** (`core/data/mock-content.ts`) holds all content, written to match the model exactly so a future .NET Web API can return the same shapes.
- Write realistic developer content: about 5 posts, 8 notes, 6 videos, 12 links, with hierarchical tags across topics like Angular, .NET, Azure and career. Post and note bodies are real Markdown (headings, lists, a code block, a link).
- Use plausible but clearly placeholder YouTube video IDs, and make sure the layout still holds if a thumbnail fails to load (fixed 16:9 box, neutral fallback background).
- `ContentService` is the **only** thing that reads the mock file. It exposes Observables: `getPosts()`, `getPostBySlug(slug)`, `getNotes()`, `getNoteBySlug(slug)`, `getVideos()`, `getLinks()`, `getRecentActivity(limit)` (notes, videos and links merged, sorted newest first). Swapping the mock file for `HttpClient` calls later must only touch this service.
- A `core/config/site.config.ts` holds site-wide values: `siteName: '[YOUR NAME OR SITE NAME]'`, `tagline`, `intro`, `channelUrl: '[YOUR YOUTUBE CHANNEL URL]'`, and footer links.

## 7. Page specs

**Home**
- Short intro (2-3 sentences from `site.config.ts`) with a link to About.
- "Recent posts": latest 5, each row shows date, reading time, title (links to the post).
- "Recent activity": mixed feed of notes, videos and links, latest 12, grouped under date headings. Each row shows a type label, the title, and the source or duration where relevant, plus tags. Videos and links open externally; notes go to their detail page.
- Below the feed, quiet links to the full pages with counts ("all 8 notes", "all 6 videos", "all 12 links").

**Blog:** rows of date, reading time and title, with the summary underneath. Detail page: title, date, reading time, tags, then the rendered Markdown body.

**Notes:** the same list pattern as Blog, but lighter: date, title, first line of the body. Detail page shows the rendered body. Feels like a running log, less formal than the blog.

**References:** responsive grid of video cards. Each card shows the thumbnail, title and short description, and the whole card links to the YouTube video (new tab, `rel="noopener noreferrer"`). Include a link to my channel at the top.

**Reading:** simple list of link items: title (external link), source site, tags, date added.

**About:** a short bio section and links, with copy placeholders I will replace.

Every list needs an empty state that explains what will appear there, in plain language.

## 8. Design system

Direction: quiet, matte, editorial. Calm and readable rather than flashy.

- **Theme:** matte black by default, with a light theme toggle in the header. Implement with CSS custom properties on `[data-theme]` at the `<html>` element. Persist the choice in `localStorage` (wrapped in try/catch) and set the theme with a tiny inline script in `index.html` before bootstrap so there is no flash.
- **Starting tokens** (adjust if something looks off, and tell me what you changed): dark background `#161616`, text `#e8e6e3`, muted text `#9a9a97`, borders `#2a2a2a`; light background `#f5f5f3`, text `#1a1a1a`. Keep the accent very restrained (link underlines and hover states, not colored blocks). Maintain accessible contrast in both themes.
- **Type:** Merriweather (self-hosted via `@fontsource/merriweather`, weights 400 and 700 plus 400 italic) for everything, with `Georgia, serif` fallback. Use a system monospace stack only for small metadata such as dates and tags. Body line-height about 1.7, content column capped at roughly 70 characters wide, a clear type scale for headings.
- **Layout:** single centered column, generous whitespace, left-aligned text. Lists are **rows separated by thin dividers, not stacks of cards**. The only card-like element is the video card in References.
- **Restraint:** one memorable element, which is the typography of the home intro. Everything else stays quiet. No gradients, no drop-shadow stacks, no fade-in on every section, no hover animation on every element. Motion only in response to interaction (theme switch, hover on links).
- **Copy:** sentence case, plain verbs, no filler, no marketing tone.
- **Quality floor:** responsive down to 360px wide, visible keyboard focus, `prefers-reduced-motion` respected, semantic HTML (`header`, `nav`, `main`, `article`, `time`), meaningful `alt` text and link text.

## 9. Markdown rendering

Use `ngx-markdown` to render post and note bodies. Style headings, lists, blockquotes, links and inline code to match the theme. Code blocks get a distinct background, monospace font, and horizontal scroll rather than wrapping. Syntax highlighting is welcome only if it is a small addition that fits the palette.

## 10. Milestones

1. **Scaffold and shell.** New Angular project, folder structure, routes with placeholder pages, header nav, footer, theme toggle with persistence and no flash, Merriweather loaded, design tokens in place.
2. **Data and service.** Models, mock data file, `ContentService`, reading-time utility, `site.config.ts`.
3. **Blog and Notes.** List and detail pages, Markdown rendering, empty states.
4. **References and Reading.** Video card grid with thumbnails and fallback, reading list.
5. **Home, About and polish.** Home feed grouped by date, counts links, About page, not-found page, responsive pass, accessibility pass.

At the end of each milestone, confirm that the project builds with no errors, list any decision you made that I didn't specify, and suggest what to check in the browser.

## 11. Working rules

- Don't add features from the "Out" list, even if they seem easy.
- If something is ambiguous, pick the simplest reasonable option, state it, and continue. Ask only when a wrong guess would be expensive to undo.
- Keep components small and readable. Prefer clarity over cleverness. No dead code or leftover boilerplate from the generator.
- Keep all content shapes in `core/models` and all data access in `ContentService` so the backend swap stays trivial.

Start with **Milestone 2**.