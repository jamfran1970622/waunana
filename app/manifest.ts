import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Waunana Restaurante',
    short_name: 'Waunana',
    description: 'Cocina colombiana de autor · San Antonio, Cali',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#e8401a',
    orientation: 'portrait',
    categories: ['food', 'lifestyle'],
    icons: [
      { src: '/icons/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    shortcuts: [
      { name: 'Reservar Mesa', url: '/#reservas', description: 'Hacer una reservación' },
      { name: 'Ver Menú',      url: '/#menu',     description: 'Ver la carta' },
    ],
  }
}
