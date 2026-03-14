import FileNameGenerator from '@/components/tools/FileNameGenerator'

const tools: Record<string, { title: string; component: React.ReactNode }> = {
  'file-name-generator': {
    title: '連番ファイル名ジェネレーター',
    component: <FileNameGenerator />,
  },
}

export function generateStaticParams() {
  return Object.keys(tools).map(slug => ({ slug }))
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tool = tools[slug]

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{tool.title}</h1>
      {tool.component}
    </main>
  )
}