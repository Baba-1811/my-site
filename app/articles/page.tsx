import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'
import Search from '@/components/Search'

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">記事一覧</h1>
      <Search articles={articles} />
      <ul className="space-y-6">
        {articles.map(article => (
          <li key={article.slug} className="border border-gray-200 rounded-lg p-6">
            <Link href={`/articles/${article.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {article.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mt-1">{article.date} · {article.category}</p>
            <p className="text-gray-700 mt-2">{article.excerpt}</p>
            <div className="flex gap-2 mt-3">
              {article.tags.map(tag => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded hover:bg-gray-200 transition"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}