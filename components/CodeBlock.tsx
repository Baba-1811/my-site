'use client'

import { useState } from 'react'

type Props = {
  children: string
  className?: string
  inline?: boolean
}

export default function CodeBlock({ children, className, inline }: Props) {
  const [copied, setCopied] = useState(false)

  if (inline) {
    return (
      <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    )
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <span className="relative block my-4">
      <pre className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto">
        <code className={className}>{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-xs px-2 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
      >
        {copied ? 'コピー済み ✓' : 'コピー'}
      </button>
    </span>
  )
}