# Charlie Posting Instructions

## What to update

All blog posts live in **one file**:

`src/lib/blog.ts`

When you add a new post there, it automatically feeds:

- the website blog: `/blog`
- the article page: `/blog/your-post-slug`
- the RSS feed: `/rss.xml`
- the social feed: `/social-feed.json`

That means you only update **one place**.

---

## Simple posting workflow

### 1. Open the blog file

Open:

`src/lib/blog.ts`

### 2. Copy an existing post

Find a post object inside the `const posts: BlogPost[] = [ ... ]` list.

Copy one full post block and paste it above the closing `];`.

### 3. Replace the fields

Update these fields:

- `slug`  
  Use lowercase words with hyphens.  
  Example: `nonprofit-board-insurance-mistakes`

- `title`  
  The full article title people see on the page.

- `description`  
  A short search-friendly summary of the article.

- `excerpt`  
  A short preview paragraph for the blog page.

- `publishedAt`  
  Use this format: `YYYY-MM-DD`  
  Example: `2026-06-27`

- `category`  
  Examples: `Unemployment Savings`, `Employee Benefits`, `Nonprofit Insurance`

- `readingTime`  
  Example: `4 min read`

- `tags`  
  Add 3 short search phrases.

- `social.linkedin`  
  Short LinkedIn post copy.

- `social.facebook`  
  Short Facebook post copy.

- `social.x`  
  Short X post copy.

- `social.hashtags`  
  Add 2-4 hashtags.

- `sections`  
  This is the article body. Each section needs:
  - `heading`
  - `paragraphs`
  - optional `bullets`

### 4. Do not change these unless needed

- `legacySlugs`  
  Only use this if you are migrating an old Wix blog URL.

If this is a brand-new post, you can leave `legacySlugs` out completely.

---

## Easy template to copy

```ts
{
  slug: "replace-with-post-slug",
  title: "Replace with article title",
  description:
    "Replace with a short SEO-friendly description.",
  excerpt:
    "Replace with the short preview text that will show on the blog page.",
  publishedAt: "2026-06-27",
  category: "Nonprofit Insurance",
  readingTime: "4 min read",
  tags: ["tag one", "tag two", "tag three"],
  social: {
    linkedin:
      "Replace with LinkedIn post copy.",
    facebook:
      "Replace with Facebook post copy.",
    x: "Replace with X post copy.",
    hashtags: ["#NonprofitInsurance", "#RiskManagement"],
  },
  sections: [
    {
      heading: "First section heading",
      paragraphs: [
        "First paragraph.",
        "Second paragraph.",
      ],
    },
    {
      heading: "Second section heading",
      paragraphs: [
        "Intro paragraph for this section.",
      ],
      bullets: [
        "Bullet one",
        "Bullet two",
        "Bullet three",
      ],
    },
  ],
}
```

---

## Before you save

Make sure:

1. The `slug` is unique.
2. The `title` is clear and specific.
3. The `description` explains the post in plain English.
4. The `excerpt` is short and readable.
5. The article sections are complete.
6. The social copy sounds natural and not overly salesy.

---

## After you save

Once the site is deployed, the new post will appear in:

- `/blog`
- `/blog/your-post-slug`
- `/rss.xml`
- `/social-feed.json`

If LinkedIn or other social automation tools are connected to the RSS feed or social feed, the same post can be reused there without rewriting everything manually.

---

## Very important note

If you are only posting a **new article**, Charlie only needs to update:

`src/lib/blog.ts`

That is the single source of truth.
