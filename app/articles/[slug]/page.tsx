import { getAllArticles, getArticleBySlug, extractToc } from '@/lib/articles'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import CodeBlock from '@/components/CodeBlock'
import DownloadButton from '@/components/DownloadButton'
import TableOfContents from '@/components/TableOfContents'

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map(article => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://my-site-chi-lime.vercel.app/articles/${slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: article.title,
      description: article.excerpt,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  const toc = extractToc(article.content)

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex gap-12">
        <main className="flex-1 min-w-0">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded">
                {article.category}
              </span>
              <span className="text-xs text-slate-400">{article.date}</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">{article.title}</h1>
            <div className="flex gap-2">
              {article.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <article className="prose max-w-none">
            <MDXRemote
              source={article.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
              components={{
                pre: ({ children }) => <>{children}</>,
                code: ({ className, children }) => {
                  const isInline = !className
                  return (
                    <CodeBlock className={className} inline={isInline}>
                      {String(children).replace(/\n$/, '')}
                    </CodeBlock>
                  )
                },
                DownloadButton,
              }}
            />
          </article>
        </main>
        <TableOfContents toc={toc} />
      </div>
    </div>
  )
}