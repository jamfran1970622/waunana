import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

async function getReservations() {
  try {
    const { data, error } = await supabaseAdmin()
      .from('reservations')
      .select('*')
      .order('date', { ascending: true })
      .order('time', { ascending: true })
    if (error) throw error
    return data ?? []
  } catch { return [] }
}

export default async function AdminPage() {
  const reservations = await getReservations()

  return (
    <div className="min-h-screen bg-negro p-6">
      <div className="max-w-5xl mx-auto">
        <div className="border-b-2 border-fuego pb-4 mb-6">
          <h1 className="font-bebas text-4xl text-blanco">WAUNANA <span className="text-fuego">ADMIN</span></h1>
          <p className="text-blanco/40 text-sm mt-1">{reservations.length} reservación{reservations.length !== 1 ? 'es' : ''}</p>
        </div>

        {reservations.length === 0 ? (
          <p className="text-blanco/30 font-bebas text-2xl">SIN RESERVACIONES AÚN</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blanco/10">
                  {['Nombre','Teléfono','Email','Fecha','Hora','Personas','Notas','Estado'].map(h => (
                    <th key={h} className="text-left py-2 px-3 text-blanco/40 text-xs uppercase tracking-widest font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {reservations.map((r: any) => (
                  <tr key={r.id} className="border-b border-blanco/5 hover:bg-blanco/5 transition-colors">
                    <td className="py-3 px-3 text-blanco font-medium">{r.name}</td>
                    <td className="py-3 px-3 text-blanco/70">{r.phone}</td>
                    <td className="py-3 px-3 text-blanco/50">{r.email || '—'}</td>
                    <td className="py-3 px-3 text-blanco/70">{r.date}</td>
                    <td className="py-3 px-3 text-blanco/70">{r.time}</td>
                    <td className="py-3 px-3 text-blanco/70">{r.party_size}</td>
                    <td className="py-3 px-3 text-blanco/40 max-w-[200px] truncate">{r.notes || '—'}</td>
                    <td className="py-3 px-3">
                      <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 ${
                        r.status === 'confirmed'  ? 'bg-verde/20 text-verde' :
                        r.status === 'cancelled' ? 'bg-red-900/20 text-red-400' :
                        'bg-oro/20 text-oro'
                      }`}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
