import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'

export default function Home() {
  const articles = getAllArticles().slice(0, 3)

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide">
            KNOWLEDGE BASE
          </div>
          <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
            研究・開発効率化<br />ナレッジベース
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl">
            Python自動化・環境構築・情報系理論・研究効率化に関する技術記事とツールをまとめています。コードはすべてコピー・ダウンロードして使えます。
          </p>
          <div className="flex gap-3">
            <Link href="/articles" className="bg-blue-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition text-sm">
              記事を読む
            </Link>
            <Link href="/tools" className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg font-medium hover:border-blue-300 hover:text-blue-500 transition text-sm">
              ツールを使う
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-slate-900">最新記事</h2>
          <Link href="/articles" className="text-sm text-blue-500 hover:underline font-medium">
            すべて見る
          </Link>
        </div>
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
                <h3 className="font-semibold text-slate-900 hover:text-blue-500 transition mb-2">
                  {article.title}
                </h3>
              </Link>
              <p className="text-sm text-slate-500">{article.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}