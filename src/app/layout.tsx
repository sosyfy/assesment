import type { Metadata } from 'next'
import { Anton, DM_Mono } from 'next/font/google'
import './globals.css'

const anton = Anton({
  variable: '--font-anton',
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
})
const dm_mono = DM_Mono({
  variable: '--font-dm-mono',
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DEMO SITE',
  description: 'Made with pride',
}

export default function RootLayout({
  auth,
  children,
}: {
  auth: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${dm_mono.variable}`}
    >
      <body>
        <div>{auth}</div>
        <div>{children}</div>
      </body>
    </html>
  )
}
