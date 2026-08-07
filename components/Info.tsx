'use client'
import { T } from './LangContext'

export default function Info() {
  return (
    <section id="info" className="py-20 px-6 md:py-24 md:px-12 bg-verde">
      <span className="block text-[.6rem] tracking-[.22em] uppercase text-oro mb-3"><T es="Encúentranos" en="Find Us" /></span>
      <h2 className="font-bebas leading-[.9] tracking-[.02em] text-blanco mb-8" style={{fontSize:'clamp(2.5rem,8vw,5rem)'}}>
        SAN <em className="font-playfair text-oro" style={{fontStyle:'italic',fontSize:'.7em'}}>Antonio.</em>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 items-start">
            <span className="text-[.85rem] flex-shrink-0 mt-0.5">📍</span>
            <div className="text-[.82rem] leading-[1.65] text-blanco/60 font-light">
              <strong className="text-blanco block mb-0.5 text-[.65rem] tracking-[.14em] uppercase font-semibold"><T es="Dirección" en="Address" /></strong>
              Calle 4 #9-23, Barrio San Antonio<br/>Cali, Valle del Cauca, Colombia
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[.85rem] flex-shrink-0 mt-0.5">📞</span>
            <div className="text-[.82rem] leading-[1.65] text-blanco/60 font-light">
              <strong className="text-blanco block mb-0.5 text-[.65rem] tracking-[.14em] uppercase font-semibold"><T es="Contacto" en="Contact" /></strong>
              +57 2 345 0794<br/>@waunana_restaurante
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[.85rem] flex-shrink-0 mt-0.5">🕐</span>
            <div>
              <strong className="text-blanco block mb-2 text-[.65rem] tracking-[.14em] uppercase font-semibold"><T es="Horarios" en="Hours" /></strong>
              <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                <span className="text-[.7rem] text-blanco/35"><T es="Mar – Sáb" en="Tue – Sat" /></span>
                <span className="text-[.7rem] text-blanco/75">12–3pm & 5:30–10pm</span>
                <span className="text-[.7rem] text-blanco/35"><T es="Domingo" en="Sunday" /></span>
                <span className="text-[.7rem] text-blanco/75">12–4pm</span>
                <span className="text-[.7rem] text-blanco/35"><T es="Lunes" en="Monday" /></span>
                <span className="text-[.7rem] text-blanco/75"><T es="Cerrado" en="Closed" /></span>
              </div>
            </div>
          </div>
        </div>
        <a href="https://maps.google.com/?q=Calle+4+%239-23,+Barrio+San+Antonio,+Cali" target="_blank" rel="noreferrer"
          className="flex flex-col items-center justify-center gap-4 w-full aspect-[4/3] md:aspect-[16/9] bg-verde border-[3px] border-ocre no-underline hover:border-oro transition-colors">
          <span className="text-5xl">📍</span>
          <span className="font-bebas text-[1.1rem] tracking-[.1em] text-ocre">VER EN GOOGLE MAPS</span>
          <span className="text-[.7rem] text-blanco/40 tracking-[.1em] uppercase">Cl. 4 #9-23 · San Antonio · Cali</span>
        </a>
      </div>
    </section>
  )
}
