import Link from "next/link";

export default function DaoDeJing() {
  return (
    <main className="min-h-screen bg-stone-50 text-gray-800 px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <Link href="/" className="text-green-700 hover:underline mb-6 inline-block">
          ← 返回首页
        </Link>

        <h1 className="text-4xl font-serif text-green-900 mb-6">
          《道德经》的智慧
        </h1>

        <p className="leading-8 text-lg mb-6">
          道可道，非常道。名可名，非常名。
        </p>

        <p className="leading-8 text-lg mb-6">
          无为而治，并非什么都不做，
          而是不违背自然规律，
          让万物自化。
        </p>

        <p className="leading-8 text-lg">
          真正的修行，是顺应天道，
          清净内心。
        </p>
      </div>
    </main>
  );
}