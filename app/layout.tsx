import type { Metadata } from "next"
import './globals.css'   // ← 你新加的这一行

export const metadata: Metadata = {
  title: 'BSC道教',
  // ...
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}