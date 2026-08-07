import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, date, time, party_size, notes } = await req.json()

    if (!name || !phone || !date || !time || !party_size) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const { error } = await supabase.from('reservations').insert({
      name, email, phone, date, time,
      party_size: Number(party_size),
      notes,
    })

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error al guardar la reservación' }, { status: 500 })
  }
}
