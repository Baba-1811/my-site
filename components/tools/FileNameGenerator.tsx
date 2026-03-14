'use client'

import { useState } from 'react'

export default function FileNameGenerator() {
  const [prefix, setPrefix] = useState('data')
  const [start, setStart] = useState(1)
  const [end, setEnd] = useState(10)
  const [ext, setExt] = useState('txt')
  const [digits, setDigits] = useState(3)
  const [copied, setCopied] = useState(false)

  const filenames = Array.from({ length: end - start + 1 }, (_, i) => {
    const num = String(start + i).padStart(digits, '0')
    return `${prefix}_${num}.${ext}`
  })

  const handleCopy = async () => {
    await navigator.clipboard.writeText(filenames.join('\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">プレフィックス</label>
          <input
            type="text"
            value={prefix}
            onChange={e => setPrefix(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">拡張子</label>
          <input
            type="text"
            value={ext}
            onChange={e => setExt(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">開始番号</label>
          <input
            type="number"
            value={start}
            onChange={e => setStart(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">終了番号</label>
          <input
            type="number"
            value={end}
            onChange={e => setEnd(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">桁数（ゼロ埋め）</label>
          <input
            type="number"
            value={digits}
            onChange={e => setDigits(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">生成結果（{filenames.length}件）</span>
          <button
            onClick={handleCopy}
            className="text-xs px-3 py-1 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            {copied ? 'コピー済み ✓' : '全てコピー'}
          </button>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-64 overflow-y-auto">
          {filenames.map(name => (
            <div key={name} className="text-sm font-mono text-gray-700 py-0.5">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}