import type { Metadata } from "next";
import "./globals.css";

// NOTE: Typography direction has not been approved yet (see docs/PROJECT.md).
// This uses the system font stack as a neutral placeholder rather than
// committing to a Google Fonts pairing prematurely. When the type system is
// chosen, prefer self-hosting the fonts via next/font/local for production
// reliability rather than fetching from Google Fonts at build time.

export const metadata: Metadata = {
  title: "Mendes",
  description:
    "Mendes — a premium, technology-oriented law firm. Foundation build.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
