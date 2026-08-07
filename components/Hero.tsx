'use client'
import Image from 'next/image'
import { T } from './LangContext'

const STATS = [
  { num: '#24',  es: 'de 994\nCali',       en: 'of 994\nCali'      },
  { num: '4.7★', es: 'Google\n246 Rev.', en: 'Google\n246 Rev.' },
  { num: 'TCA',  es: "Travelers'\nChoice",  en: "Travelers'\nChoice" },
  { num: '100K+', es: 'COP\npor persona',   en: 'COP\nper person'    },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-svh flex flex-col justify-end pt-[60px] overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=90"
          alt="Waunana" fill className="object-cover" priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/70 to-negro/20" />
      </div>

      {/* Color bars */}
      <div className="absolute top-0 inset-x-0 h-[5px] z-[2] flex">
        {['bg-fuego','bg-oro','bg-verde','bg-fuego','bg-oro'].map((c,i) => <div key={i} className={`flex-1 ${c}`} />)}
      </div>

      <div className="absolute right-[-3.5rem] top-1/2 -translate-y-1/2 rotate-90 font-bebas text-[8rem] tracking-[.15em] text-fuego/[.08] pointer-events-none z-[1] whitespace-nowrap" aria-hidden>CALI</div>

      {/* Content */}
      <div className="relative z-[3] px-6 md:px-12 pt-8">
        <div className="inline-flex items-center gap-2 bg-fuego px-3 py-1.5 mb-5">
          <span className="font-bebas text-xl text-blanco leading-none">#24</span>
          <span className="text-[.58rem] tracking-[.1em] uppercase text-blanco/85 leading-snug">
            <T es={<>de 994<br/>en Cali</>} en={<>of 994<br/>in Cali</>} />
          </span>
        </div>

        <h1 className="font-bebas leading-[.82] tracking-[.02em] mb-3" style={{fontSize:'clamp(4.5rem,20vw,13rem)'}}>
          <T
            es={<>
              <span className="block text-blanco">COCINA</span>
              <span className="block text-fuego">QUE</span>
              <em className="font-playfair not-italic block text-blanco" style={{fontSize:'clamp(2rem,8vw,5.5rem)',fontStyle:'italic'}}>recuerda.</em>
            </>}
            en={<>
              <span className="block text-blanco">CUISINE</span>
              <span className="block text-fuego">THAT</span>
              <em className="font-playfair not-italic block text-blanco" style={{fontSize:'clamp(2rem,8vw,5.5rem)',fontStyle:'italic'}}>remembers.</em>
            </>}
          />
        </h1>

        <span className="block text-[.65rem] tracking-[.2em] uppercase text-oro mb-6">Barrio San Antonio · Cali, Colombia</span>

        <div className="flex flex-wrap gap-3">
          <a href="#reservas" className="bg-fuego text-blanco px-8 py-3.5 text-[.75rem] font-bold tracking-[.12em] uppercase no-underline border-2 border-fuego hover:bg-[#ff5a38] transition-colors">
            <T es="Reservar Mesa" en="Book a Table" />
          </a>
          <a href="#menu" className="border-2 border-oro text-oro px-8 py-3.5 text-[.75rem] font-bold tracking-[.12em] uppercase no-underline hover:bg-oro hover:text-negro transition-colors">
            <T es="Ver Menú" en="View Menu" />
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-[3] mt-8 bg-negro/90 border-t-2 border-fuego flex">
        {STATS.map((s,i) => (
          <div key={i} className="flex-1 flex flex-col items-center text-center py-4 px-2 border-r border-oro/15 last:border-r-0">
            <span className="font-bebas text-[1.8rem] text-fuego leading-none tracking-[.04em]">{s.num}</span>
            <span className="text-[.55rem] tracking-[.1em] uppercase text-blanco/30 leading-snug whitespace-pre-line">
              <T es={s.es} en={s.en} />
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
