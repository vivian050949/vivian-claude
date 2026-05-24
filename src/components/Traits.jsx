import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Zap, Heart } from 'lucide-react'
import { personalData } from '../data'
import { useMobile } from '../ViewContext'

const icons = [Layers, Zap, Heart]

export default function Traits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isMobile = useMobile()

  return (
    <section id="traits" className={`bg-[#1C2B3A] ${isMobile ? 'py-12 px-5' : 'py-28 px-6'}`}>
      <div className={isMobile ? '' : 'max-w-6xl mx-auto'}>
        <div className="flex items-start gap-4 mb-8">
          <div className="flex items-center gap-3 shrink-0 pt-2">
            <span className="block w-6 h-px bg-[#D8B08C]" />
            <span className="text-[#D8B08C]/60 text-[0.7rem] tracking-[0.2em] uppercase">核心特質</span>
          </div>
          <h2 className={`font-bold text-white leading-tight ${isMobile ? 'text-xl' : 'text-[clamp(1.6rem,4vw,2.6rem)]'}`}>
            三項關鍵能力
          </h2>
        </div>

        <div ref={ref} className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
          {personalData.traits.map((trait, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/5 rounded-2xl p-6 border border-white/8"
                style={{ borderLeftColor: '#D8B08C', borderLeftWidth: 2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#D8B08C]/15 flex items-center justify-center mb-5">
                  <Icon className="w-4 h-4 text-[#D8B08C]" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 leading-snug">{trait.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{trait.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
