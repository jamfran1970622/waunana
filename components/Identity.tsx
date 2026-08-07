'use client'
import Image from 'next/image'
import { T } from './LangContext'

export default function Identity() {
  return (
    <section id="identity" className="relative py-20 px-6 md:py-24 md:px-12 bg-negro overflow-hidden">
      <div className="absolute right-[-2rem] bottom-[-3rem] font-bebas text-[35vw] text-fuego/[.03] pointer-events-none leading-none" aria-hidden>CALI</div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85"
              alt="Waunana cocina" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 inset-x-0 h-[4px] bg-gradient-to-r from-fuego via-oro to-verde" />
          <div className="absolute top-4 left-0 bg-fuego font-bebas text-[.75rem] tracking-[.15em] text-blanco px-3 py-1.5">San Antonio · Cali</div>
        </div>

        <div>
          <span className="block text-[.6rem] tracking-[.22em] uppercase text-fuego mb-3">
            <T es="La Cocina" en="The Kitchen" />
          </span>
          <h2 className="font-bebas leading-[.9] tracking-[.02em] text-blanco mb-4" style={{fontSize:'clamp(2.5rem,8vw,5rem)'}}>
            <T
              es={<>LO TRADICIONAL<br/>HECHO<br/><em className="font-playfair text-fuego" style={{fontSize:'.7em',fontStyle:'italic'}}>espectacular.</em></>}
              en={<>THE TRADITIONAL<br/>MADE<br/><em className="font-playfair text-fuego" style={{fontSize:'.7em',fontStyle:'italic'}}>spectacular.</em></>}
            />
          </h2>
          <p className="text-[.88rem] leading-[1.85] font-light text-blanco/50 max-w-[500px]">
            <T
              es="Waunana es una exploración de sabores, texturas y presentaciones donde la tradición colombiana se fusiona con la innovación. Cada plato es una obra de arte elaborada con ingredientes frescos de temporada y la memoria de nuestra tierra."
              en="Waunana is an exploration of flavors, textures and presentations where Colombian tradition fuses with innovation. Each dish is a work of art crafted with fresh seasonal ingredients and the memory of our land."
            />
          </p>
          <div className="mt-6">
            <div className="font-bebas text-[1.8rem] tracking-[.06em] text-blanco leading-none">Ricardo Torres Izquierdo</div>
            <div className="text-[.65rem] tracking-[.15em] uppercase text-fuego mt-1">
              <T es="Chef · Cocina Colombiana de Autor" en="Chef · Colombian Author's Cuisine" />
            </div>
          </div>
          <blockquote className="mt-5 pl-5 border-l-4 border-fuego bg-fuego/[.06] py-4 pr-4 font-playfair text-base text-blanco/80 leading-relaxed" style={{fontStyle:'italic'}}>
            <T
              es='"Hacemos casi todo en casa. Comer aquí es una experiencia que no vas a olvidar."'
              en='"We make almost everything in house. Eating here is an experience you will not forget."'
            />
          </blockquote>
        </div>
      </div>
    </section>
  )
}
