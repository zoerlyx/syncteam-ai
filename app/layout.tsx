import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "SyncTeam-AI | AI-Powered Developer Productivity Platform",
    template: "%s | SyncTeam-AI",
  },

  description:
    "An AI-powered project management platform that helps developer teams plan projects, generate tasks, collaborate, and track productivity.",

  keywords: [
    "AI project management",
    "developer productivity",
    "task management",
    "team collaboration",
    "Next.js",
    "Supabase",
    "Groq AI",
  ],

  openGraph: {
    title: "SyncTeam-AI | AI-Powered Developer Productivity Platform",

    description:
      "Plan projects, generate AI-powered tasks, collaborate with your team, and track productivity.",

    url: "https://syncteam-ai.vercel.app",

    siteName: "SyncTeam-AI",

    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "SyncTeam-AI Application Preview",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "SyncTeam-AI | AI-Powered Developer Productivity Platform",

    description:
      "AI-powered project management platform for developer teams.",

    images: ["/banner.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('st-theme')||'obsidian';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}