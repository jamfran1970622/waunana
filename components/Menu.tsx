'use client'
import { useState } from 'react'
import { useLang, T } from './LangContext'

type Item = { nameEs:string; nameEn:string; descEs:string; descEn:string; price:string }

const DATA: Record<string, Item[]> = {
  ent: [
    { nameEs:'CEVICHE DE CAMARÓN DEL PACÍFICO', nameEn:'PACIFIC SHRIMP CEVICHE',    descEs:'Leche de tigre de lulo · cilantro · maíz tostado',            descEn:"Lulo tiger's milk · cilantro · toasted corn",          price:'$35.000' },
    { nameEs:'PATACONES CON HOGAO',                     nameEn:'FRIED PLANTAIN & HOGAO',      descEs:'Plátano verde del Valle · hogao tradicional · queso costeño', descEn:'Valle green plantain · traditional hogao · coastal cheese', price:'$22.000' },
    { nameEs:'EMPANADAS DE PIPIÁN',                nameEn:'PIPIÁN EMPANADAS',        descEs:'Masa de maíz · pipián de maní · papa criolla',        descEn:'Corn dough · peanut pipián · criolla potato',        price:'$24.000' },
    { nameEs:'ABORRAJADOS DE CHONTADURO',               nameEn:'CHONTADURO ABORRAJADOS',      descEs:'Plátano maduro relleno · salsa de chontaduro',              descEn:'Stuffed ripe plantain · chontaduro sauce',               price:'$26.000' },
  ],
  fuer: [
    { nameEs:'ENCOCADO DE CAMARÓN', nameEn:'COCONUT SHRIMP STEW', descEs:'Leche de coco del Pacífico · arroz de coco · patacón', descEn:'Pacific coconut milk · coconut rice · fried plantain', price:'$58.000' },
    { nameEs:'CHULETA VALLUNA',          nameEn:'CHULETA VALLUNA',      descEs:'Cerdo apanado vallecaucano · papas criollas · ensalada',   descEn:'Valle-style breaded pork · criolla potatoes · salad',  price:'$48.000' },
    { nameEs:'SANCOCHO DE GALLINA',      nameEn:'HEN SANCOCHO',         descEs:'Receta tradicional vallecaucana · maíz · yuca · plátano', descEn:'Traditional Valle recipe · corn · yuca · plantain', price:'$42.000' },
    { nameEs:'ARROZ MARINERO',           nameEn:'SEAFOOD RICE',         descEs:'Camarón · calamar · mejillón · arroz negro de tinta',    descEn:'Shrimp · squid · mussel · black ink rice',           price:'$62.000' },
  ],
  post: [
    { nameEs:'GELATO DE BOROJÓ Y NAIDÍ', nameEn:'BOROJÓ & NAIDÍ GELATO', descEs:'Artesanal · frutas del Pacífico colombiano', descEn:'Artisanal · Colombian Pacific fruits',                             price:'$18.000' },
    { nameEs:'CHOCOLATE GANACHE',                   nameEn:'CHOCOLATE GANACHE',           descEs:'Cacao del Cauca · helado de vainilla · sal de naidí', descEn:'Cauca cacao · vanilla ice cream · naidí salt', price:'$24.000' },
    { nameEs:'NATILLA VALLUNA',                     nameEn:'VALLUNA NATILLA',             descEs:'Receta de abuela · canela · panela · leche',         descEn:"Grandmother's recipe · cinnamon · panela · milk",   price:'$16.000' },
  ],
  beb: [
    { nameEs:'LULADA',             nameEn:'LULADA',            descEs:'Bebida tradicional de Cali · lulo · agua · limón', descEn:"Cali's drink · lulo · water · lime",  price:'$12.000' },
    { nameEs:'LIMONADA DE COCO',   nameEn:'COCONUT LEMONADE',  descEs:'Limón mandarina · leche de coco · miel',           descEn:'Mandarin lime · coconut milk · honey', price:'$14.000' },
    { nameEs:'VINOS & CÓCTELES', nameEn:'WINES & COCKTAILS', descEs:'Selección colombiana e importada',                    descEn:'Colombian and imported selection',          price:'Desde $18.000' },
  ],
}

const TABS = [
  { id:'ent',  es:'Entradas', en:'Starters' },
  { id:'fuer', es:'Fuertes',  en:'Mains'    },
  { id:'post', es:'Postres',  en:'Desserts' },
  { id:'beb',  es:'Bebidas',  en:'Drinks'   },
]

export default function Menu() {
  const [tab, setTab] = useState('ent')
  const { lang } = useLang()

  return (
    <section id="menu" className="py-20 px-6 md:py-24 md:px-12 bg-[#0c0c0c]">
      <span className="block text-[.6rem] tracking-[.22em] uppercase text-fuego mb-3">
        <T es="Carta de Temporada" en="Seasonal Menu" />
      </span>
      <h2 className="font-bebas leading-[.85] tracking-[.02em] text-blanco mb-8" style={{fontSize:'clamp(3rem,10vw,6rem)'}}>
        <T es={<>CADA PLATO<br/>UNA <span className="text-fuego">OBRA.</span></>} en={<>EVERY DISH<br/>A <span className="text-fuego">WORK.</span></>} />
      </h2>

      <div className="flex overflow-x-auto scrollbar-hide border-b-2 border-fuego/20 mb-8 -mx-6 px-6 md:mx-0 md:px-0">
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`whitespace-nowrap px-4 py-2.5 text-[.62rem] tracking-[.14em] uppercase font-bold font-dm border-none cursor-pointer transition-colors ${
              tab === t.id ? 'text-fuego' : 'text-blanco/30 hover:text-fuego'
            }`}
            style={{ borderBottom: `3px solid ${tab === t.id ? '#e8401a' : 'transparent'}`, marginBottom: '-2px' }}>
            {lang === 'es' ? t.es : t.en}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {DATA[tab].map((item, i) => (
          <div key={i} className="flex justify-between items-start gap-4 py-4 border-b border-blanco/5 last:border-none">
            <div>
              <div className="font-bebas text-[.92rem] tracking-[.06em] text-blanco mb-1">{lang==='es' ? item.nameEs : item.nameEn}</div>
              <div className="text-[.72rem] text-blanco/30 leading-relaxed font-light">{lang==='es' ? item.descEs : item.descEn}</div>
            </div>
            <div className="font-bebas text-[1.1rem] text-fuego whitespace-nowrap flex-shrink-0 tracking-[.04em]">{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
