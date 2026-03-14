import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles')

export type ArticleMeta = {
  title: string
  date: string
  category: string
  tags: string[]
  excerpt: string
  slug: string
  draft?: boolean
}

export type Article = ArticleMeta & {
  content: string
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(ARTICLES_DIR)
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(filename => {
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), 'utf-8')
      const { data } = matter(raw)
      return {
        ...(data as ArticleMeta),
        slug: filename.replace('.mdx', ''),
        date: data.date instanceof Date
          ? data.date.toISOString().split('T')[0]
          : String(data.date),
      }
    })
    .filter(article => !article.draft)
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getArticleBySlug(slug: string): Article {
  const filepath = path.join(ARTICLES_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    ...(data as ArticleMeta),
    slug,
    content,
    date: data.date instanceof Date
      ? data.date.toISOString().split('T')[0]
      : String(data.date),
  }
}

export function getAllTags(): string[] {
  const articles = getAllArticles()
  const tags = articles.flatMap(a => a.tags ?? [])
  return [...new Set(tags)]
}