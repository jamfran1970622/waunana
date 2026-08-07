const ITEMS = [
  'WAUNANA','SAN ANTONIO','CALI COLOMBIA','#24 DE 994',
  'COCINA DE AUTOR','CHEF RICARDO TORRES','TRAVELERS CHOICE','LONELY PLANET',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="bg-fuego overflow-hidden py-2.5">
      <div className="flex animate-marquee w-max">
        {doubled.map((text, i) => (
          <div key={i} className="flex items-center gap-6 px-8 whitespace-nowrap">
            <span className="font-bebas text-base tracking-[.15em] text-blanco">{text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blanco/40 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
