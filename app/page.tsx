export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-between bg-gradient-to-b from-rose-50/10 via-amber-50/8 to-transparent"
      style={{
        backgroundImage: `linear-gradient(rgba(250, 240, 230, 0.35), rgba(250, 240, 230, 0.25)), url('/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 上部分：标题 + 副标题 + CA */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4 pt-16 md:pt-24 lg:pt-32">
        {/* 主标题 - 正常突出大小 */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-black tracking-widest text-amber-950 drop-shadow-xl leading-none mb-6 md:mb-8">
          BSC道教
        </h1>

        {/* 副标题 */}
        <p className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-medium text-stone-900 tracking-wide drop-shadow-md mb-4 md:mb-6">
          探寻道教文化 · 修心养性 · 顺应自然
        </p>

        {/* CA 地址 */}
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-mono text-stone-900 tracking-wider drop-shadow-md opacity-95">
          CA: 0x48aca960e7df8d0dd0cb746725d75d602f14444
        </p>
      </div>

      {/* 中部分：道德经正文 */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4 py-12 md:py-16 lg:py-20">
        {/* 小标题 */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-serif font-bold text-amber-950 tracking-wide drop-shadow-lg mb-8 md:mb-12">
          《道德经》的智慧
        </h2>

        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
          {/* 正文段落1 */}
          <p className="text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed md:leading-loose text-stone-900 font-serif drop-shadow-md">
            道可道，非常道。名可名，非常名。<br />
            无为而治，并非什么都不做，<br />
            而是不违背自然规律，让万物自化。<br />
            真正的修行，是顺应天道，清净内心。
          </p>

          {/* 正文段落2 */}
          <p className="text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed md:leading-loose text-stone-900 font-light italic opacity-95 drop-shadow-md">
            众所周知，我在四川出生，我们在四川不知道什么山东学，也不尊儒学；<br />
            我们一般推崇道教，你看四川人人都自称老子。
          </p>
        </div>
      </div>

      {/* 下部分：三个链接 + 版权 */}
      <footer className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-12 md:py-16 text-center">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-10">
          {/* X 社区 */}
          <a
            href="https://x.com/i/communities/1921021510644625668"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/85 hover:bg-white/95 backdrop-blur-sm rounded-full border border-amber-200/60 shadow-sm hover:shadow-md transition-all duration-300 text-amber-950 font-medium text-lg md:text-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X 社区</span>
          </a>

          {/* Telegram 群 */}
          <a
            href="https://t.me/daojiaobnb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/85 hover:bg-white/95 backdrop-blur-sm rounded-full border border-teal-200/60 shadow-sm hover:shadow-md transition-all duration-300 text-teal-950 font-medium text-lg md:text-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.639-17.062c.373-1.747-.654-2.54-1.885-2.013l-17.5 6.734c-1.78.715-1.77 1.73-.308 2.21l4.482 1.392 10.42-6.54c.492-.31 1.049-.14.64.22l-8.875 8.014z" />
            </svg>
            <span>Telegram 群</span>
          </a>

          {/* X 讨论 */}
          <a
            href="https://x.com/heyibinance/status/2009661769921577371"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/85 hover:bg-white/95 backdrop-blur-sm rounded-full border border-blue-200/60 shadow-sm hover:shadow-md transition-all duration-300 text-blue-950 font-medium text-lg md:text-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X 讨论</span>
          </a>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl text-stone-900/90 mt-8 md:mt-10">
          © 2026 BSC道教
        </p>
      </footer>
    </div>
  );
}