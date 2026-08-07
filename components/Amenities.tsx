'use client'
import { T } from './LangContext'

const ITEMS = [
  { es:'Asientos al aire libre',   en:'Outdoor seating'       },
  { es:'Acceso sillas de ruedas',  en:'Wheelchair accessible' },
  { es:'Wi-Fi gratuito',           en:'Free Wi-Fi'            },
  { es:'Tarjetas de crédito', en:'Credit cards'          },
  { es:'Menú de temporada',   en:'Seasonal menu'         },
  { es:'Opciones vegetarianas',    en:'Vegetarian options'    },
  { es:'Parqueo 198m',             en:'Parking 198m'          },
  { es:'Domicilio disponible',     en:'Delivery available'    },
  { es:'Reservas recomendadas',    en:'Reservations advised'  },
  { es:'$100K+ COP persona',       en:'$100K+ COP/person'     },
  { es:'Lonely Planet',            en:'Lonely Planet'         },
  { es:'Eventos privados',         en:'Private events'        },
]

export default function Amenities() {
  return (
    <section className="py-20 px-6 md:py-24 md:px-12 bg-[#0c0c0c]">
      <span className="block text-[.6rem] tracking-[.22em] uppercase text-fuego mb-3"><T es="En Waunana" en="At Waunana" /></span>
      <h2 className="font-bebas leading-[.9] tracking-[.02em] text-blanco mb-8" style={{fontSize:'clamp(2.5rem,8vw,5rem)'}}>
        <T es={<>TODO LO QUE<br/><span className="text-fuego">NECESITAS.</span></>} en={<>EVERYTHING<br/><span className="text-fuego">YOU NEED.</span></>} />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
        {ITEMS.map((item,i) => (
          <div key={i} className="flex gap-2.5 items-start">
            <span className="text-fuego font-bold text-[.9rem] flex-shrink-0 leading-[1.3]">/</span>
            <span className="text-[.76rem] text-blanco/45 leading-snug font-light"><T es={item.es} en={item.en} /></span>
          </div>
        ))}
      </div>
    </section>
  )
}
