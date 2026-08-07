'use client'
import { useState, type FormEvent } from 'react'
import { T } from './LangContext'

const TIMES = [
  '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM',
  '5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM',
]

type Status = 'idle' | 'loading' | 'success' | 'error'
const BLANK = { name:'', email:'', phone:'', date:'', time:'', party_size:'2', notes:'' }

export default function Reservations() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState(BLANK)
  const set = (k: keyof typeof BLANK) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function submit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, party_size: Number(form.party_size) }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm(BLANK)
    } catch { setStatus('error') }
  }

  const inp = "w-full bg-blanco/5 border border-blanco/10 text-blanco text-sm px-4 py-3 focus:outline-none focus:border-fuego transition-colors placeholder:text-blanco/20 font-dm"

  return (
    <section id="reservas" className="relative py-20 px-6 md:py-24 md:px-12 bg-negro border-t-4 border-fuego overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse at 50% 0%, rgba(232,64,26,0.12), transparent 70%)'}} />
      <div className="relative z-10 max-w-2xl">
        <h2 className="font-bebas leading-[.85] tracking-[.02em] mb-8" style={{fontSize:'clamp(3rem,12vw,7rem)'}}>
          <T
            es={<><span className="block text-fuego">¿LISTOS</span><span className="block text-oro">PARA VIVIR</span>LA EXPERIENCIA?</>}
            en={<><span className="block text-fuego">READY TO</span><span className="block text-oro">LIVE THE</span>EXPERIENCE?</>}
          />
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {[
            { href:'https://wa.me/5723450794',                        label:'💬 WhatsApp' },
            { href:'tel:+5723450794',                                  label:'📞 +57 2 345 0794' },
            { href:'https://instagram.com/waunana_restaurante',        label:'📸 Instagram' },
          ].map(btn => (
            <a key={btn.href} href={btn.href} target="_blank" rel="noreferrer"
              className="flex-1 flex items-center justify-center bg-fuego text-blanco px-6 py-3.5 text-[.75rem] font-bold tracking-[.12em] uppercase no-underline border-2 border-fuego hover:bg-transparent hover:text-fuego transition-colors text-center">
              {btn.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-blanco/10" />
          <span className="font-bebas text-[.7rem] tracking-[.2em] uppercase text-blanco/30"><T es="O RESERVA EN LÍNEA" en="OR BOOK ONLINE" /></span>
          <div className="flex-1 h-px bg-blanco/10" />
        </div>

        {status === 'success' ? (
          <div className="bg-verde/20 border border-verde/40 p-6 text-center">
            <div className="font-bebas text-2xl text-blanco mb-1"><T es="¡RESERVACIÓN RECIBIDA!" en="RESERVATION RECEIVED!" /></div>
            <p className="text-blanco/60 text-sm"><T es="Te contactaremos pronto para confirmar." en="We will contact you soon to confirm." /></p>
            <button onClick={() => setStatus('idle')} className="mt-4 text-fuego text-[.7rem] uppercase tracking-widest font-bold border-none bg-transparent cursor-pointer">
              <T es="Hacer otra reservación" en="Make another reservation" />
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className={inp} placeholder="Nombre *" value={form.name} onChange={set('name')} required />
              <input className={inp} placeholder="Teléfono *" value={form.phone} onChange={set('phone')} required />
            </div>
            <input className={inp} type="email" placeholder="Email" value={form.email} onChange={set('email')} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input className={inp} type="date" value={form.date} onChange={set('date')} required />
              <select className={inp} value={form.time} onChange={set('time')} required>
                <option value="" disabled><T es="Hora *" en="Time *" /></option>
                {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <select className={inp} value={form.party_size} onChange={set('party_size')} required>
                {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n===1?'persona':'personas'}</option>)}
              </select>
            </div>
            <textarea className={inp} rows={3} placeholder="Notas o solicitudes especiales" value={form.notes} onChange={set('notes')} />
            {status === 'error' && <p className="text-fuego text-sm"><T es="Error al enviar. Inténtalo de nuevo." en="Error sending. Please try again." /></p>}
            <button type="submit" disabled={status==='loading'}
              className="bg-fuego text-blanco border-2 border-fuego px-8 py-4 font-bebas text-xl tracking-[.12em] uppercase cursor-pointer hover:bg-transparent hover:text-fuego transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {status==='loading' ? '...' : <T es="CONFIRMAR RESERVACIÓN" en="CONFIRM RESERVATION" />}
            </button>
          </form>
        )}

        <p className="mt-4 text-[.68rem] text-blanco/30 tracking-[.08em]">
          <T es="Mar–Sáb 12–3pm & 5:30–10pm · Dom 12–4pm · Lun cerrado" en="Tue–Sat 12–3pm & 5:30–10pm · Sun 12–4pm · Mon closed" />
        </p>
      </div>
    </section>
  )
}
