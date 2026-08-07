import { LangProvider } from '@/components/LangContext'
import Nav          from '@/components/Nav'
import Hero         from '@/components/Hero'
import Marquee      from '@/components/Marquee'
import Identity     from '@/components/Identity'
import Menu         from '@/components/Menu'
import Experience   from '@/components/Experience'
import Reviews      from '@/components/Reviews'
import Amenities    from '@/components/Amenities'
import Reservations from '@/components/Reservations'
import Info         from '@/components/Info'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Identity />
        <Menu />
        <Experience />
        <Reviews />
        <Amenities />
        <Reservations />
        <Info />
      </main>
      <Footer />
    </LangProvider>
  )
}
