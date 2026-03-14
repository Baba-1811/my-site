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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b border-gray-200">
          <nav className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">
              KB
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/articles" className="text-gray-600 hover:text-black transition">
                記事
              </Link>
              <Link href="/tools" className="text-gray-600 hover:text-black transition">
                ツール
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-black transition">
                About
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}