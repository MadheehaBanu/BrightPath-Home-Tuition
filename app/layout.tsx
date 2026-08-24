import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Nunito_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
})

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'BrightPath Home Tuition - Personalized Learning for Every Student',
  description: 'Quality learning support from experienced tutors, delivered in a comfortable and focused environment to build strong academic foundations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body id="app-root" className={`${jakarta.variable} ${nunito.variable} font-secondary bg-neutral-background text-text-primary min-h-screen flex flex-col w-full relative overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  )
}
