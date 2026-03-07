import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "道教-B S C ",
  description: "道教-B S C "
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <nav className="nav">

          <div className="logo">DAO</div>

          <div className="menu">
            <Link href="/">Home</Link>
            <Link href="/token">Token</Link>
            <Link href="/tokenomics">Tokenomics</Link>
            <Link href="/roadmap">Roadmap</Link>
            <Link href="/community">Community</Link>
            <Link href="/about">About</Link>
          </div>

        </nav>

        {children}

      </body>
    </html>
  );
}