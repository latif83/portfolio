import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdul-Latif Mohammed - Portfolio',
  description: "Am a passionate developer working on both web and mobile apps, Get in touch and let's work on great ideas",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
