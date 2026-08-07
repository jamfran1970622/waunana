'use client'
import { T } from './LangContext'

const CARDS = [
  { num:'I',   titleEs:'COCINA DE AUTOR',      titleEn:"AUTHOR'S CUISINE",    bodyEs:'Recetas ancestrales colombianas reinterpretadas con técnica contemporánea. Cada plato tiene historia.', bodyEn:'Colombian ancestral recipes reinterpreted with contemporary technique. Every dish has a story.' },
  { num:'II',  titleEs:'INGREDIENTES FRESCOS',  titleEn:'FRESH INGREDIENTS',   bodyEs:'Productores locales y artesanales. Trazabilidad en cada ingrediente. El menú vive con la temporada.',      bodyEn:'Local and artisan producers. Traceability in every ingredient. The menu lives with the season.' },
  { num:'III', titleEs:'BARRIO SAN ANTONIO',    titleEn:'BARRIO SAN ANTONIO',  bodyEs:'Arquitectura colonial. Vistas de Cali. El restaurante más auténtico del barrio más auténtico.',       bodyEn:'Colonial architecture. Views of Cali. The most authentic restaurant in the most authentic neighborhood.' },
  { num:'IV',  titleEs:'EVENTOS PRIVADOS',      titleEn:'PRIVATE EVENTS',      bodyEs:'Celebraciones y cenas privadas con menú exclusivo. Contactar directamente.',                               bodyEn:'Celebrations and private dinners with exclusive menu. Contact us directly.' },
]

export default function Experience() {
  return (
    <section id="exp" className="py-20 px-6 md:py-24 md:px-12 bg-negro">
      <span className="block text-[.6rem] tracking-[.22em] uppercase text-fuego mb-3">
        <T es="La Experiencia" en="The Experience" />
      </span>
      <h2 className="font-bebas leading-[.9] tracking-[.02em] text-blanco mb-10" style={{fontSize:'clamp(2.5rem,8vw,5rem)'}}>
        <T
          es={<>MÁS QUE COMER.<br/><em className="font-playfair text-oro" style={{fontSize:'.7em',fontStyle:'italic'}}>recordar.</em></>}
          en={<>MORE THAN EATING.<br/><em className="font-playfair text-oro" style={{fontSize:'.7em',fontStyle:'italic'}}>remembering.</em></>}
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-fuego/15">
        {CARDS.map((c,i) => (
          <div key={i} className="group bg-negro p-7 flex gap-5 items-start border-l-[3px] border-transparent hover:bg-fuego/[.05] hover:border-l-fuego transition-all">
            <div className="font-bebas text-5xl text-fuego/25 leading-[.9] flex-shrink-0 w-12">{c.num}</div>
            <div>
              <div className="font-bebas text-base tracking-[.06em] text-blanco mb-1.5"><T es={c.titleEs} en={c.titleEn} /></div>
              <div className="text-[.78rem] leading-[1.65] text-blanco/40 font-light"><T es={c.bodyEs} en={c.bodyEn} /></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
