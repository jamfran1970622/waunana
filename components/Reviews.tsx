'use client'
import { T } from './LangContext'

const REVIEWS = [
  { stars:'★★★★★', textEs:'"Es convertir lo tradicional en algo espectacular."',                                                        textEn:'"It\'s turning the traditional into something spectacular."',     author:'Aleja',           source:'Google Reviews',                    bilingual:true  },
  { stars:'★★★★★', text:'"They make almost everything in house. Eating here is amazing. I recommend trying this place."',               author:'Verified Guest',  source:"TripAdvisor · Travelers' Choice",  bilingual:false },
  { stars:'★★★★★', textEs:'"Comida tradicional con toque moderno. Ingredientes locales. Servicio excepcional."',                        textEn:'"Traditional food with modern twist. Local ingredients. Exceptional service."', author:'International Guest', source:'Google · Food 5 · Service 5 · Atmosphere 5', bilingual:true },
]

export default function Reviews() {
  return (
    <section id="resenas" className="py-20 px-6 md:py-24 md:px-12 bg-fuego">
      <span className="block text-[.6rem] tracking-[.22em] uppercase text-negro/50 mb-3"><T es="Lo Que Dicen" en="What They Say" /></span>
      <h2 className="font-bebas leading-[.9] tracking-[.02em] text-negro mb-8" style={{fontSize:'clamp(2.5rem,8vw,5rem)'}}>
        <T
          es={<>VOCES REALES.<br/><em className="font-playfair" style={{fontStyle:'italic',fontSize:'.7em'}}>sin filtro.</em></>}
          en={<>REAL VOICES.<br/><em className="font-playfair" style={{fontStyle:'italic',fontSize:'.7em'}}>unfiltered.</em></>}
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-negro/15 mb-6">
        {REVIEWS.map((r,i) => (
          <div key={i} className="bg-fuego p-6">
            <div className="text-negro text-[.8rem] tracking-[.1em] mb-2.5">{r.stars}</div>
            <p className="font-playfair text-[.9rem] text-negro/80 leading-[1.7] mb-3" style={{fontStyle:'italic'}}>
              {r.bilingual ? <T es={r.textEs!} en={r.textEn!} /> : r.text}
            </p>
            <div className="font-bebas text-[.85rem] tracking-[.12em] text-negro">{r.author}</div>
            <div className="text-[.58rem] text-negro/45 mt-px tracking-[.08em] uppercase">{r.source}</div>
          </div>
        ))}
      </div>
      <div className="inline-flex items-center gap-4 bg-negro px-6 py-4">
        <div className="font-bebas text-[3.5rem] text-fuego leading-none">4.7</div>
        <div className="flex flex-col gap-0.5">
          <div className="text-fuego text-[.85rem]">★★★★★</div>
          <div className="text-[.62rem] tracking-[.08em] uppercase text-blanco/40 leading-snug">
            <T es={<>246 reseñas · #24 de 994 en Cali<br/>Travelers’ Choice · Lonely Planet</>} en={<>246 reviews · #24 of 994 in Cali<br/>Travelers’ Choice · Lonely Planet</>} />
          </div>
        </div>
      </div>
    </section>
  )
}
