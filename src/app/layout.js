import { Inter, Sora, Fira_Code } from "next/font/google"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import "./globals.css"

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
  title: "Emmanuel Tofunmi | Frontend React & Next.js Expert",
  description: "Results-driven Frontend Developer with 4+ years of experience building scalable web and mobile applications using React.js, Next.js, and modern JavaScript frameworks.",
  keywords: ["Frontend Developer", "React.js", "Next.js", "JavaScript", "Web Developer", "Lagos", "Nigeria"],
  authors: [{ name: "Emmanuel Tofunmi" }],
  openGraph: {
    title: "Emmanuel Tofunmi | Frontend React & Next.js Expert",
    description: "Results-driven Frontend Developer with 4+ years of experience building scalable web and mobile applications.",
    url: "https://devemma.netlify.app",
    siteName: "Emmanuel Tofunmi Portfolio",
    locale: "en_US",
    type: "website",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
