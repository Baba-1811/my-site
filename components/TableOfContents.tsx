'use client'

import { useEffect, useState } from 'react'
import type { TocItem } from '@/lib/articles'

type Props = {
  toc: TocItem[]
}

export default function TableOfContents({ toc }: Props) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -60% 0px' }
    )

    toc.forEach(item => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [toc])

  if (toc.length === 0) return null

  return (
    <nav className="hidden lg:block sticky top-24 w-56 shrink-0">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">目次</p>
      <ul className="space-y-1">
        {toc.map(item => (
          <li key={item.id} style={{ paddingLeft: item.level === 3 ? '0.75rem' : '0' }}>
            <a href={"#" + item.id} className={"block text-sm py-0.5 transition-colors " + (activeId === item.id ? 'text-blue-500 font-medium' : 'text-slate-400 hover:text-slate-700')}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
