import { Mail, Download } from 'lucide-react'

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

export default function Footer() {
  const isMobile = useMobile()

  return (
    <footer className={`bg-[#1C2B3A] ${isMobile ? 'py-12 px-5' : 'py-20'}`}>
      <div className={isMobile ? '' : 'max-w-6xl mx-auto px-6'}>
        <div className={`grid gap-10 items-end ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-[#D8B08C]" />
              <span className="text-[#D8B08C]/60 text-[0.7rem] tracking-[0.2em] uppercase">
                聯絡我
              </span>
            </div>
            <div className={isMobile ? 'grid grid-cols-3 gap-2' : 'flex flex-wrap gap-3'}>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 text-sm text-white bg-[#D8B08C] hover:bg-[#D8B08C]/85 px-3 py-3 rounded-full transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                聯絡我
              </a>
              <a
                href="https://drive.google.com/file/d/1RXcka2efd-PCqOcD1skPlrncvN-7EOWo/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm text-[#D8B08C] border border-[#D8B08C]/50 hover:bg-[#D8B08C]/12 px-3 py-3 rounded-full transition-colors font-medium"
              >
                <Download className="w-4 h-4" />
                履歷下載
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm text-[#D8B08C] border border-[#D8B08C]/50 hover:bg-[#D8B08C]/12 px-3 py-3 rounded-full transition-colors font-medium"
              >
                <LinkedInIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className={isMobile ? '' : 'text-right'}>
            <div className="text-4xl font-bold text-white/8 leading-none mb-6 tracking-tight">
              Vivian<br />Chen
            </div>
            <p className="text-white/30 text-xs leading-relaxed">
              © 2026 Vivian Chen
              <br />
              專案管理 · 數位轉型 · 營運優化
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
