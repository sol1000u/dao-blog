import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "DAO Web3",
  description: "DAO Web3 Project",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        <nav style={{
          padding:"20px",
          borderBottom:"1px solid #ccc",
          display:"flex",
          gap:"20px"
        }}>

          <Link href="/">Home</Link>
          <Link href="/token">Token</Link>
          <Link href="/community">Community</Link>
          <Link href="/roadmap">Roadmap</Link>
          <Link href="/posts/daodejing">DaoDeJing</Link>

        </nav>

        {children}

      </body>
    </html>
  )
}