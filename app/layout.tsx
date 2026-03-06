import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "BSC道教",
  description: "探寻道教文化 · 修心养性 · 顺应自然",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="bg-stone-50 text-gray-900">

        {/* 导航栏 */}
        <nav className="w-full border-b bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

            <Link href="/" className="text-xl font-bold">
              BSC道教
            </Link>

            <div className="flex gap-6 text-sm font-medium">

              <Link href="/">首页</Link>

              <Link href="/posts/daodejing">
                道德经
              </Link>

              <Link href="/posts/daodejing">
                修行
              </Link>

              <Link href="/posts/daodejing">
                道教文化
              </Link>

            </div>
          </div>
        </nav>

        {/* 页面内容 */}
        <main className="pt-24">
          {children}
        </main>

      </body>
    </html>
  );
}