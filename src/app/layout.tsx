import './globals.css'
import { Josefin_Sans } from 'next/font/google'
import { Navbar, Footer } from './components'


const JosefinSans = Josefin_Sans({ subsets: ['latin'] })

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
      <body className={JosefinSans.className}>
        <main className='flex flex-col min-h-screen bg-bg3 bg-fixed bg-no-repeat bg-cover'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
