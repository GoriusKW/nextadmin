
import './ui/globals.css'
import { Inconsolata } from 'next/font/google'

const consolas = Inconsolata({ subsets: ['latin']})

export const metadata = {
  title: 'Dash Tut',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={consolas.className}>{children}</body>
    </html>
  )
}
