import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '研究・開発効率化ナレッジベース',
  description: 'Python自動化・環境構築・情報系理論・研究効率化に関する技術記事とツール',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-slate-900 tracking-tight">
              KB<span className="text-blue-500">.</span>
            </Link>
            <div className="flex gap-8 text-sm font-medium">
              <Link href="/articles" className="text-slate-500 hover:text-blue-500 transition">
                記事
              </Link>
              <Link href="/tools" className="text-slate-500 hover:text-blue-500 transition">
                ツール
              </Link>
              <Link href="/about" className="text-slate-500 hover:text-blue-500 transition">
                About
              </Link>
            </div>
          </nav>
        </header>
        <div className="min-h-screen">
          {children}
        </div>
        <footer className="border-t border-slate-200 bg-white mt-20">
          <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-slate-400 flex justify-between">
            <span>研究・開発効率化ナレッジベース</span>
            <a href="https://github.com/Baba-1811" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">GitHub</a>
          </div>
        </footer>
      </body>
    </html>
  )
}