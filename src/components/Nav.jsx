import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Monitor, Smartphone, Download, Mail } from 'lucide-react'

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
import { useMobile } from '../ViewContext'
import { contact } from '../data'

const links = [
  { href: '#traits', label: '特質能力' },
  { href: '#cases', label: '實戰案例' },
  { href: '#timeline', label: '工作經歷' },
  { href: '#skills', label: '技能圖譜' },
  { href: '#beyond', label: '其他經歷' },
]

export default function Nav({ mobileView, onToggle, isRealMobile }) {
  const isMobile = useMobile()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`${isMobile ? 'sticky top-0' : 'fixed top-0 left-0 right-0'} z-50 transition-all duration-300 ${
        isMobile
          ? 'bg-[rgba(255,255,255,0.97)] backdrop-blur-xl border-b border-[#1C2B3A]/10 shadow-sm'
          : scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#1C2B3A]/12 shadow-md'
            : 'bg-transparent'
      }`}
    >
      <div className="px-5 h-14 flex items-center justify-between gap-2">
        <a href="#" className="text-[#1C2B3A] font-semibold tracking-wider text-sm shrink-0">
          Vivian Chen
        </a>

        {!isMobile && (
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-[#6B7280] hover:text-[#1C2B3A] text-sm transition-colors duration-200 whitespace-nowrap">
                {l.label}
              </a>
            ))}
          </div>
        )}

        <div className={`flex items-center gap-2 shrink-0 ${isMobile ? 'ml-auto' : ''}`}>
          {!isRealMobile && (
            <button
              onClick={onToggle}
              title={mobileView ? '切換電腦版' : '切換手機版'}
              className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-full border transition-colors ${
                mobileView
                  ? 'border-[#D8B08C] text-[#D8B08C] bg-[#D8B08C]/8'
                  : 'border-[#1C2B3A]/20 text-[#6B7280] hover:border-[#1C2B3A]/40 hover:text-[#1C2B3A]'
              }`}
            >
              {mobileView
                ? <><Monitor className="w-3 h-3" /><span className="hidden sm:inline">電腦版</span></>
                : <><Smartphone className="w-3 h-3" /><span className="hidden sm:inline">手機版</span></>
              }
            </button>
          )}

          {!isMobile && (
            <>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                className="hidden md:inline-flex items-center text-[#D8B08C]/70 hover:text-[#D8B08C] transition-colors"
                aria-label="LinkedIn">
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a href="https://drive.google.com/file/d/1RXcka2efd-PCqOcD1skPlrncvN-7EOWo/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 text-sm text-[#D8B08C] border border-[#D8B08C]/50 px-3.5 py-1.5 rounded-full hover:bg-[#D8B08C]/10 transition-colors whitespace-nowrap">
                <Download className="w-3.5 h-3.5" />
                履歷
              </a>
              <a href={`mailto:${contact.email}`}
                className="hidden md:inline-flex items-center gap-1.5 text-sm text-white bg-[#D8B08C] px-4 py-1.5 rounded-full hover:bg-[#D8B08C]/85 transition-colors whitespace-nowrap">
                <Mail className="w-3.5 h-3.5" />
                聯絡我
              </a>
            </>
          )}

          <button
            onClick={() => setOpen(!open)}
            className={`${isMobile ? 'flex' : 'flex md:hidden'} items-center justify-center w-9 h-9 rounded-full text-[#1C2B3A] bg-white/75 backdrop-blur-sm shadow-sm transition-colors hover:bg-white/90`}
            aria-label="選單"
            aria-expanded={open}
          >
            {open ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white border-t border-[#1C2B3A]/12 shadow-lg px-5 py-5 space-y-1"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="flex items-center text-[#1C2B3A] font-medium text-sm py-2.5 border-b border-[#1C2B3A]/6 last:border-0">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3">
            <a href={`mailto:${contact.email}`} onClick={() => setOpen(false)}
              className="inline-block text-sm text-white bg-[#1C2B3A] px-5 py-2.5 rounded-full font-medium">
              聯絡我
            </a>
            <a href="https://drive.google.com/file/d/1RXcka2efd-PCqOcD1skPlrncvN-7EOWo/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-sm text-[#1C2B3A] font-medium py-2">
              <Download className="w-4 h-4" />
              履歷下載
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 text-sm text-[#1C2B3A] font-medium py-2">
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
