'use client'

import { useState } from 'react'
import Fuse from 'fuse.js'
import Link from 'next/link'
import type { ArticleMeta } from '@/lib/articles'

type Props = {
  articles: ArticleMeta[]
}

export default function Search({ articles }: Props) {
  const [query, setQuery] = useState('')

  const fuse = new Fuse(articles, {
    keys: ['title', 'excerpt', 'tags', 'category'],
    threshold: 0.3,
  })

  const results = query
    ? fuse.search(query).map(r => r.item)
    : []

  return (
    <div className="mb-12">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="記事を検索..."
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      {query && (
        <div className="mt-4">
          {results.length === 0 ? (
            <p className="text-sm text-gray-500">「{query}」に一致する記事が見つかりませんでした。</p>
          ) : (
            <ul className="space-y-3">
              {results.map(article => (
                <li key={article.slug} className="border border-gray-200 rounded-lg p-4">
                  <Link href={`/articles/${article.slug}`}>
                    <h3 className="font-semibold hover:underline">{article.title}</h3>
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">{article.date} · {article.category}</p>
                  <p className="text-sm text-gray-600 mt-1">{article.excerpt}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}