import { Navbar } from '../components'

export default function Home() {
    return (
        <main className='flex flex-col min-h-screen bg-bg3 bg-fixed bg-no-repeat bg-cover'>
            <Navbar />
            <div className='flex justify-center text-white'>
                Contact
            </div>
        </main>
    )
}