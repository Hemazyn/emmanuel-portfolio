import { Inter, Sora, Fira_Code } from "next/font/google"
import "./globals.css"
import ClientLayout from "@/components/layout/ClientLayout"

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

export const metadata = {
  title: "Emmanuel Tofunmi | Frontend Engineer",
  description: "Frontend engineer building product-grade interfaces for CRM systems, admin dashboards, fintech platforms, high-end websites, and embedded widgets. Based in Lagos, Nigeria.",
  keywords: ["Frontend Engineer", "React Developer", "Next.js Developer", "Vue.js Developer", "TypeScript", "JavaScript", "UI Engineer", "Web Developer", "CRM Development", "Admin Dashboard", "Fintech Frontend", "Lagos", "Nigeria", "Remote Frontend Developer"],
  authors: [{ name: "Emmanuel Tofunmi" }],
  creator: "Emmanuel Tofunmi",
  metadataBase: new URL("https://iamtofunmi.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Emmanuel Tofunmi | Frontend Engineer",
    description: "Frontend engineer building product-grade interfaces for CRM systems, admin dashboards, fintech platforms, and high-end websites.",
    url: "https://iamtofunmi.vercel.app",
    siteName: "Emmanuel Tofunmi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Tofunmi — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Tofunmi | Frontend Engineer",
    description: "Frontend engineer building product-grade interfaces for CRM systems, admin dashboards, fintech platforms, and high-end websites.",
    creator: "@hemazyn",
    images: ["/og-image.png"],
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
}

export default function RootLayout({ children }) {
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
