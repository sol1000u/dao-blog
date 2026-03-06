export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.85)),
        url('/bg.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center px-6 max-w-4xl bg-white/80 backdrop-blur-md p-12 rounded-2xl shadow-xl">

        <h1 className="text-6xl font-extrabold mb-6">
          BSC道教
        </h1>

        <p className="text-xl mb-12 text-gray-700">
          探寻道教文化 · 修心养性 · 顺应自然
        </p>

        <h2 className="text-3xl font-bold mb-6">
          《道德经》的智慧
        </h2>

        <p className="text-lg leading-relaxed text-gray-800">
          道可道，非常道。名可名，非常名。
          无为而治，并非什么都不做，
          而是不违背自然规律，让万物自化。
          真正的修行，是顺应天道，清净内心。
        </p>

        <footer className="mt-16 text-sm text-gray-600">
          © 2026 BSC道教
        </footer>

      </div>
    </div>
  );
}