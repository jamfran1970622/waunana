import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const playfair = Playfair_Display({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Waunana — Restaurante · San Antonio, Cali',
  description: "Cocina colombiana de autor en el corazón de San Antonio, Cali. #24 de 994 restaurantes. Travelers' Choice · Lonely Planet.",
  keywords: ['restaurante', 'Cali', 'San Antonio', 'Colombia', 'cocina colombiana', 'Waunana'],
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'Waunana' },
  icons: { icon: '/icons/icon.svg', apple: '/icons/icon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#e8401a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-negro text-blanco font-dm">
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  )
}
