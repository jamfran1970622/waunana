'use client'
import { createContext, useContext, useState, type ReactNode } from 'react'

type Lang = 'es' | 'en'
interface LangCtx { lang: Lang; setLang: (l: Lang) => void }

const Ctx = createContext<LangCtx>({ lang: 'es', setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>
}

export function useLang() { return useContext(Ctx) }

export function T({ es, en }: { es: ReactNode; en: ReactNode }) {
  const { lang } = useLang()
  return <>{lang === 'es' ? es : en}</>
}
