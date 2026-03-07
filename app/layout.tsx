import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "道教 Web3",
  description: "道教 Web3 -B S C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <nav className="nav">

          <Link href="/">DAO</Link>
          <Link href="/token">Token</Link>
          <Link href="/tokenomics">Tokenomics</Link>
          <Link href="/roadmap">Roadmap</Link>
          <Link href="/community">Community</Link>
          <Link href="/about">About</Link>

        </nav>

        {children}

      </body>
    </html>
  );
}