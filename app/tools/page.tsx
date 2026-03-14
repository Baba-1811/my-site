import Link from 'next/link'

const tools = [
  {
    slug: 'file-name-generator',
    title: '連番ファイル名ジェネレーター',
    description: 'プレフィックス・開始番号・終了番号・拡張子を指定して連番ファイル名を一括生成します。',
  },
]

export default function ToolsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">ツール</h1>
      <ul className="space-y-4">
        {tools.map(tool => (
          <li key={tool.slug} className="border border-gray-200 rounded-lg p-6">
            <Link href={`/tools/${tool.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">{tool.title}</h2>
            </Link>
            <p className="text-gray-600 mt-2 text-sm">{tool.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}