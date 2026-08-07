'use client'
import { useState } from 'react'
import { useLang, T } from './LangContext'

const LINKS = [
  { href: '#identity', es: 'El Chef',     en: 'The Chef'   },
  { href: '#menu',     es: 'Menú',   en: 'Menu'        },
  { href: '#exp',      es: 'Experiencia', en: 'Experience'  },
  { href: '#reservas', es: 'Reservar',    en: 'Book'        },
]

export default function Nav() {
  const [mob, setMob] = useState(false)
  const { lang, setLang } = useLang()
  const btnCls = (active: boolean) =>
    `px-2 py-1 text-[.6rem] font-bold tracking-[.1em] uppercase border-none cursor-pointer transition-colors ${
      active ? 'bg-fuego text-blanco' : 'bg-transparent text-blanco/40'
    }`

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-[300] flex items-center justify-between px-6 md:px-12 py-3 bg-negro border-b-[3px] border-fuego">
        <a href="#" className="flex flex-col no-underline">
          <span className="font-bebas text-[1.6rem] leading-none tracking-[.1em] text-blanco">
            WAU<span className="text-fuego">NANA</span>
          </span>
          <span className="text-[.5rem] tracking-[.2em] uppercase text-blanco/30 mt-px">San Antonio · Cali · Colombia</span>
        </a>

        <div className="flex items-center gap-3">
          <ul className="hidden md:flex gap-6 list-none m-0 p-0">
            {LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-[.65rem] tracking-[.14em] uppercase text-blanco/50 no-underline hover:text-oro transition-colors">
                  <T es={l.es} en={l.en} />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center border border-oro/30 overflow-hidden">
            <button className={btnCls(lang === 'es')} onClick={() => setLang('es')}>ES</button>
            <div className="w-px h-[10px] bg-oro/20" />
            <button className={btnCls(lang === 'en')} onClick={() => setLang('en')}>EN</button>
          </div>

          <button className="flex md:hidden flex-col gap-1 bg-transparent border-none cursor-pointer p-1" onClick={() => setMob(true)}>
            {[0,1,2].map(i => <span key={i} className="block w-[22px] h-[2px] bg-blanco" />)}
          </button>
        </div>
      </nav>

      {mob && (
        <div className="fixed inset-0 z-[299] bg-negro border-t-[3px] border-fuego flex flex-col items-center justify-center gap-8">
          <button className="absolute top-5 right-6 bg-transparent border-none text-blanco text-2xl cursor-pointer" onClick={() => setMob(false)}>✕</button>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMob(false)}
              className="font-bebas text-5xl tracking-[.1em] text-blanco no-underline hover:text-fuego transition-colors">
              <T es={l.es.toUpperCase()} en={l.en.toUpperCase()} />
            </a>
          ))}
          <div className="flex items-center border border-oro/30 overflow-hidden mt-2">
            <button className={btnCls(lang === 'es')} onClick={() => setLang('es')}>ES</button>
            <div className="w-px h-[10px] bg-oro/20" />
            <button className={btnCls(lang === 'en')} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      )}
    </>
  )
}
