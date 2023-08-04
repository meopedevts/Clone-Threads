import '@/styles/globals.css'
import { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.className} bg-dark-1`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
