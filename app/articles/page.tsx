import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'
import Search from '@/components/Search'

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-1">記事一覧</h1>
        <p className="text-slate-400 text-sm">{articles.length}本の記事</p>
      </div>
      <Search articles={articles} />
      <ul className="space-y-4">
        {articles.map(article => (
          <li key={article.slug} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-sm transition">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded">
                {article.category}
              </span>
              <span className="text-xs text-slate-400">{article.date}</span>
            </div>
            <Link href={`/articles/${article.slug}`}>
              <h2 className="font-semibold text-slate-900 hover:text-blue-500 transition mb-2">
                {article.title}
              </h2>
            </Link>
            <p className="text-sm text-slate-500 mb-3">{article.excerpt}</p>
            <div className="flex gap-2">
              {article.tags.map(tag => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded hover:bg-blue-50 hover:text-blue-500 transition"
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