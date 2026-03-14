export default function AboutPage() {
  const techs = ['Python', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Linux', 'Git']
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About</h1>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">このサイトについて</h2>
        <p className="text-gray-600 leading-relaxed">
          研究・開発の過程で得た知識を整理・再利用するためのナレッジベースです。
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">自己紹介</h2>
        <p className="text-gray-600 leading-relaxed">
          大学院で研究をしながらWeb開発・Python自動化に取り組んでいます。
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">技術スタック</h2>
        <div className="flex flex-wrap gap-2">
          {techs.map(tech => (
            <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-3">リンク</h2>
        <div className="flex gap-4">
          <a href="https://github.com/Baba-1811" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">GitHub</a>
        </div>
      </section>
    </main>
  )
}
