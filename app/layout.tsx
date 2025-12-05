import type { Metadata } from 'next'
import { VT323, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const vt323 = VT323({ weight: '400', subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ 
  weight: ['400', '500', '600'], 
  subsets: ['latin'],
  variable: '--font-code'
})

export const metadata: Metadata = {
  title: 'DOTFILE.SYS - Configuration Archive',
  description: 'Retro-futurist dotfile directory and snippet browser',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
