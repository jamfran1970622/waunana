'use client'
import { T } from './LangContext'

export default function Footer() {
  return (
    <footer className="bg-negro border-t-4 border-fuego px-6 py-10 md:px-12">
      <div className="flex h-1 mb-8">
        <div className="flex-[3] bg-fuego" /><div className="flex-[2] bg-oro" /><div className="flex-[1] bg-verde" />
      </div>
      <div className="font-bebas text-[2rem] tracking-[.08em] text-blanco">WAU<span className="text-fuego">NANA</span></div>
      <p className="font-playfair text-[.8rem] text-blanco/30 mt-1" style={{fontStyle:'italic'}}>
        <T es='"Cocina colombiana de autor. San Antonio, Cali."' en='"Colombian author\'s cuisine. San Antonio, Cali."' />
      </p>
      <div className="flex gap-5 flex-wrap mt-4">
        {[
          { href:'https://www.instagram.com/waunana_restaurante/', label:'Instagram' },
          { href:'https://www.facebook.com/waunanarestaurante/',   label:'Facebook'  },
          { href:'https://www.tripadvisor.com/Restaurant_Review-g297475-d12907743', label:'TripAdvisor' },
          { href:'https://wa.me/5723450794',                       label:'WhatsApp'  },
        ].map(s => (
          <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
            className="text-[.62rem] tracking-[.12em] uppercase text-blanco/30 no-underline font-bold hover:text-fuego transition-colors">
            {s.label}
          </a>
        ))}
      </div>
      <hr className="border-none border-t border-fuego/20 my-6" />
      <div className="flex flex-col md:flex-row gap-1.5 justify-between items-start md:items-center">
        <div className="text-[.6rem] text-blanco/20 tracking-[.04em]">© 2026 Waunana Restaurante · Cl. 4 #9-23, San Antonio, Cali</div>
        <div className="text-[.58rem] tracking-[.08em] uppercase">
          <T es="Diseñado por" en="Designed by" />{' '}
          <a href="#" className="text-oro/50 no-underline hover:text-oro transition-colors">ColombiaClear Digital Media, LLC</a>
        </div>
      </div>
    </footer>
  )
}
