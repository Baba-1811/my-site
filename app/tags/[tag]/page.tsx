import Link from 'next/link'
import { getAllArticles, getAllTags } from '@/lib/articles'

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map(tag => ({ tag }))
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  const articles = getAllArticles().filter(a => a.tags.includes(tag))

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/articles" className="text-sm text-gray-500 hover:underline">
          記事一覧に戻る
        </Link>
        <h1 className="text-3xl font-bold mt-2">#{tag}</h1>
        <p className="text-gray-500 text-sm mt-1">{articles.length}件</p>
      </div>
      <ul className="space-y-4">
        {articles.map(article => (
          <li key={article.slug} className="border border-gray-200 rounded-lg p-5">
            <Link href={`/articles/${article.slug}`}>
              <h2 className="font-semibold hover:underline">{article.title}</h2>
            </Link>
            <p className="text-sm text-gray-500 mt-1">{article.date} · {article.category}</p>
            <p className="text-gray-600 text-sm mt-2">{article.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}