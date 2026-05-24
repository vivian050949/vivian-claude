import { motion } from 'framer-motion'
import { ArrowDown, Settings } from 'lucide-react'
import { personalData } from '../data'
import { useMobile } from '../ViewContext'

const titleParts = personalData.hero.title.split(' / ')

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const isMobile = useMobile()

  if (isMobile) {
    return (
      <section className="relative bg-[#F7F5F2] px-5 pt-8 pb-10 overflow-hidden">
        {/* 背景裝飾圓 */}
        <div className="absolute -top-10 -right-16 w-56 h-56 rounded-full bg-[#D8B08C]/20 z-0" />

        <div className="relative z-10">
          {/* 名字 + 頭像並排 */}
          <div className="flex items-end justify-between gap-2 mb-4">
            <motion.h1 {...fadeUp(0.1)}
              className="min-w-0 text-[2.8rem] md:text-[4rem] font-bold text-[#1C2B3A] leading-[0.9] tracking-tight">
              Vivian<br />
              <span className="font-light italic text-[#1C2B3A]/60">Chen</span>
            </motion.h1>

            {/* 頭像 + 裝飾圓 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="shrink-0 relative w-40 h-48 md:w-56 md:h-72"
            >
              <div className="absolute inset-0 rounded-full bg-[#D8B08C]/25 scale-90 translate-y-2" />
              <div className="absolute top-2 right-0 w-10 h-10 rounded-full bg-[#1C2B3A]/8" />
              <picture>
                <source srcSet="/avatar.webp" type="image/webp" />
                <img src="/avatar.png" alt="Vivian Chen"
                  loading="eager"
                  fetchpriority="high"
                  className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-md" />
              </picture>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-1.5 mb-5">
            {titleParts.map((part, i) => (
              <span key={i}
                className="text-[0.65rem] font-medium text-[#1C2B3A] border border-[#D8B08C]/60 px-2.5 py-1 rounded-full">
                {part.trim()}
              </span>
            ))}
          </motion.div>

          <motion.p {...fadeUp(0.3)}
            className="text-[#6B7280] text-sm leading-relaxed mb-7">
            {personalData.hero.bio}
          </motion.p>

          <motion.div {...fadeUp(0.4)}
            className="grid grid-cols-3 gap-3 pt-5 border-t border-[#1C2B3A]/10">
            {personalData.kpis.map((kpi, i) => (
              <div key={i}>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-bold text-[#1C2B3A]">{kpi.value}</span>
                  <span style={{ fontSize: 13 }} className="font-medium text-[#1C2B3A]">{kpi.unit}</span>
                </div>
                <div style={{ fontSize: 11 }} className="text-[#6B7280] mt-0.5 leading-tight">{kpi.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5F2]/20 via-[#F7F5F2]/60 to-[#F7F5F2]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16 w-full">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 {...fadeUp(0.1)}
              className="text-[clamp(3.5rem,9vw,6.5rem)] font-bold text-[#1C2B3A] leading-[0.92] tracking-tight mb-6">
              Vivian<br />
              <span className="font-light italic text-[#1C2B3A]/65">Chen</span>
            </motion.h1>

            <motion.div {...fadeUp(0.32)} className="flex flex-wrap gap-2 mb-8">
              {titleParts.map((part, i) => (
                <span key={i}
                  className="text-xs font-medium text-[#1C2B3A] border border-[#D8B08C]/60 px-3 py-1.5 rounded-full tracking-wide">
                  {part.trim()}
                </span>
              ))}
            </motion.div>

            <motion.p {...fadeUp(0.44)}
              className="text-[#6B7280] leading-relaxed max-w-lg text-[0.9rem] mb-12">
              {personalData.hero.bio}
            </motion.p>

            <motion.div {...fadeUp(0.56)}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1C2B3A]/10 max-w-md">
              {personalData.kpis.map((kpi, i) => (
                <div key={i}>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl font-bold text-[#1C2B3A]">{kpi.value}</span>
                    <span style={{ fontSize: 14 }} className="font-medium text-[#1C2B3A]">{kpi.unit}</span>
                  </div>
                  <div style={{ fontSize: 12 }} className="text-[#6B7280] mt-1 leading-tight">{kpi.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ height: '88vh', maxHeight: '820px' }}
          >
            <div className="absolute z-0 rounded-full bg-[#D8B08C]/28"
              style={{ width: 480, height: 480, top: '14%', left: '50%', transform: 'translateX(-44%)' }} />
            <div className="absolute z-0 rounded-full bg-[#D8B08C]/22"
              style={{ width: 130, height: 130, bottom: '18%', left: '4%' }} />
            <picture>
              <source srcSet="/avatar.webp" type="image/webp" />
              <img src="/avatar.png" alt="Vivian Chen"
                loading="eager"
                fetchpriority="high"
                className="absolute z-10 bottom-0 left-1/2 -translate-x-[48%] object-contain drop-shadow-xl"
                style={{ height: '96%', width: 'auto', maxWidth: 'none' }} />
            </picture>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B7280]/50"
        >
          <span className="text-[0.6rem] tracking-[0.22em] uppercase">Scroll</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
