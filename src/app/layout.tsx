import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from './components'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CyberSakura',
  description: 'Cyber Sakura Antivirus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex flex-col min-h-screen bg-bg3 bg-fixed bg-no-repeat bg-cover'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
