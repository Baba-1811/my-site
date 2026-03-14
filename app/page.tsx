import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'

export default function Home() {
  const articles = getAllArticles().slice(0, 3)

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">
          研究・開発効率化ナレッジベース
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Python自動化・環境構築・情報系理論・研究効率化に関する技術記事とツールをまとめています。
          コードはすべてコピー・ダウンロードして使えます。
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            href="/articles"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            記事を読む
          </Link>
          <Link
            href="/about"
            className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            このサイトについて
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">最新記事</h2>
          <Link href="/articles" className="text-sm text-gray-500 hover:underline">
            すべて見る →
          </Link>
        </div>
        <ul className="space-y-4">
          {articles.map(article => (
            <li key={article.slug} className="border border-gray-200 rounded-lg p-5">
              <Link href={`/articles/${article.slug}`}>
                <h3 className="font-semibold hover:underline">{article.title}</h3>
              </Link>
              <p className="text-sm text-gray-500 mt-1">
                {article.date} · {article.category}
              </p>
              <p className="text-gray-600 text-sm mt-2">{article.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}