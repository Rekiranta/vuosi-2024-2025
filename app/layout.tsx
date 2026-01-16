import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vuosi 2024-2025 | Elämän kuulumisia",
  description: "Tervetuloa katsomaan mitä kaikkea on tapahtunut elämässäni vuosina 2024-2025!",
  keywords: ["2024", "2025", "elämä", "kuulumisia", "päivitykset"],
  authors: [{ name: "Teemu" }],
  openGraph: {
    title: "Vuosi 2024-2025 | Elämän kuulumisia",
    description: "Tervetuloa katsomaan mitä kaikkea on tapahtunut elämässäni vuosina 2024-2025!",
    type: "website",
    locale: "fi_FI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
