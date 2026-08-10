import type { Metadata } from "next"
import { Inter, Sora, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import ClientLayout from "@/components/layout/ClientLayout"
import JsonLd from "@/components/ui/JsonLd"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
})

const BASE_URL = "https://iamtofunmi.vercel.app"
const siteTitle = "Emmanuel Tofunmi | Frontend Engineer"
const siteDescription =
  "Frontend engineer building product-grade interfaces for CRM systems, admin dashboards, fintech platforms, high-end websites, and embedded widgets. Based in Lagos, Nigeria."

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Emmanuel Tofunmi",
  },
  description: siteDescription,
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "UI Engineer",
    "Web Developer",
    "CRM Development",
    "Admin Dashboard",
    "Fintech Frontend",
    "Lagos",
    "Nigeria",
    "Remote Frontend Developer",
  ],
  authors: [{ name: "Emmanuel Tofunmi", url: BASE_URL }],
  creator: "Emmanuel Tofunmi",
  publisher: "Emmanuel Tofunmi",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: BASE_URL,
    siteName: "Emmanuel Tofunmi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@hemazyn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "DevEmma",
    statusBarStyle: "black-translucent",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getTheme() {
                  const storedTheme = localStorage.getItem('theme');
                  if (storedTheme === 'dark' || storedTheme === 'light') {
                    return storedTheme;
                  }
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    return 'dark';
                  }
                  return 'light';
                }
                const theme = getTheme();
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(theme);
                document.documentElement.style.colorScheme = theme;
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${sora.variable} ${firaCode.variable} antialiased`}>
        <JsonLd
          person={{
            name: "Emmanuel Tofunmi",
            givenName: "Emmanuel",
            familyName: "Tofunmi",
            jobTitle: "Frontend Engineer",
            email: "immanueltofunmi@gmail.com",
            telephone: "+2349019487450",
            url: BASE_URL,
            sameAs: ["https://github.com/Hemazyn", "https://www.linkedin.com/in/devemma", "https://x.com/imanuel_tofunmi"],
            address: {
              addressLocality: "Lagos",
              addressCountry: "NG",
            },
          }}
        />
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
