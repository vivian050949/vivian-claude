import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { personalData } from '../data'
import { useMobile } from '../ViewContext'
import DiscordSim from './DiscordSim'

function CaseCard({ c, i, inView, isMobile }) {
  const [open, setOpen] = useState(false)
  const skillItems = c.skills || c.kpi.split('/').map((s) => s.trim())

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl border border-[#1C2B3A]/6 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-[#F7F5F2]/50 transition-colors"
      >
        <div className="flex-1">
          <span className="text-[0.6rem] font-mono tracking-[0.2em] text-[#D8B08C] uppercase block mb-2">
            Case {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="text-sm font-semibold text-[#1C2B3A] leading-snug mb-1.5">{c.title}</h3>
          <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2">
            {c.isBulletProblem ? c.problem.join('、') : c.problem}
          </p>
          {!open && (
            <span className="mt-2 inline-block text-[0.6rem] font-medium text-[#D8B08C] tracking-wide">
              查看完整案例 ↓
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            open
              ? 'bg-[#1C2B3A] text-white border border-[#1C2B3A]'
              : 'bg-[#D8B08C]/12 text-[#D8B08C] border border-[#D8B08C]/40'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-[#1C2B3A]/6">
              <div className={`grid gap-3 pt-4 mb-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
                {[
                  { label: '問題 Problem', content: c.problem, isBullet: c.isBulletProblem },
                  { label: '行動 Action', content: c.action, isBullet: c.isBulletAction },
                  { label: '成果 Result', content: c.result, isBullet: c.isBulletResult },
                ].map(({ label, content, isBullet }) => (
                  <div key={label} className="bg-[#F7F5F2] rounded-xl p-4">
                    <span className="text-[0.6rem] font-semibold text-[#D8B08C] tracking-[0.15em] uppercase block mb-2">
                      {label}
                    </span>
                    {isBullet ? (
                      <ul className="space-y-1">
                        {content.map((item) => (
                          <li key={item} className="flex items-start gap-1.5 text-sm text-[#6B7280] leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#D8B08C] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-[#6B7280] leading-relaxed">{content}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[0.6rem] font-semibold text-[#1C2B3A] tracking-[0.15em] uppercase">技能</span>
                <div className="w-px h-3 bg-[#1C2B3A]/15" />
                {skillItems.map((k) => (
                  <span key={k} className="text-[0.65rem] bg-[#1C2B3A] text-white px-2.5 py-0.5 rounded-full">{k}</span>
                ))}
              </div>

              {i === 0 && (
                <div className="mt-5 pt-5 border-t border-[#1C2B3A]/6">
                  <p className="text-[0.65rem] text-[#6B7280] tracking-[0.15em] uppercase font-semibold mb-3">互動展示 · 實際系統模擬</p>
                  <DiscordSim />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Cases() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isMobile = useMobile()

  return (
    <section id="cases" className={`border-t border-[#1C2B3A]/8 ${isMobile ? 'py-12 px-5' : 'py-28 px-6'}`}>
      <div className={isMobile ? '' : 'max-w-6xl mx-auto'}>
        <div className="flex items-start gap-4 mb-8">
          <div className="flex items-center gap-3 shrink-0 pt-2">
            <span className="block w-6 h-px bg-[#D8B08C]" />
            <span className="text-[#6B7280] text-[0.7rem] tracking-[0.2em] uppercase">實戰案例</span>
          </div>
          <h2 className={`font-bold text-[#1C2B3A] leading-tight ${isMobile ? 'text-xl' : 'text-[clamp(1.6rem,4vw,2.6rem)]'}`}>
            用實戰案例證明能力
          </h2>
        </div>

        <div ref={ref} className="space-y-3">
          {personalData.cases.map((c, i) => (
            <CaseCard key={i} c={c} i={i} inView={inView} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  )
}
