import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalData } from '../data'
import { useMobile } from '../ViewContext'

export default function Milestones() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isMobile = useMobile()

  return (
    <section id="milestones" className={`border-t border-[#1C2B3A]/8 ${isMobile ? 'py-12 px-5' : 'py-28 px-6'}`}>
      <div className={isMobile ? '' : 'max-w-6xl mx-auto'}>
        <div className={`flex items-start ${isMobile ? 'mb-8' : 'mb-16'} gap-4`}>
          <div className="flex items-center gap-3 shrink-0 pt-2">
            <span className="block w-6 h-px bg-[#D8B08C]" />
            <span className="text-[#6B7280] text-[0.7rem] tracking-[0.2em] uppercase">核心成就</span>
          </div>
          <h2 className={`font-bold text-[#1C2B3A] leading-tight ${isMobile ? 'text-xl' : 'text-[clamp(1.6rem,4vw,2.6rem)]'}`}>
            三個關鍵里程碑
          </h2>
        </div>

        <div ref={ref} className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
          {personalData.milestones.map((m, i) => (
            <motion.div key={m.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-2xl p-6 border border-[#1C2B3A]/6 hover:border-[#D8B08C]/50 hover:shadow-md transition-all duration-300 group overflow-hidden"
            >
              {/* 浮水印數字 */}
              <div className="absolute -bottom-4 -right-2 pointer-events-none select-none">
                <span className="text-[#1C2B3A]/[0.06] font-black leading-none"
                  style={{ fontSize: 'clamp(6rem, 12vw, 9rem)' }}>
                  {m.id}
                </span>
              </div>

              {/* 前景內容 */}
              <div className="relative z-10">
                <h3 className={`font-bold text-[#1C2B3A] mb-3 leading-snug ${isMobile ? 'text-base' : 'text-lg'}`}>{m.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
