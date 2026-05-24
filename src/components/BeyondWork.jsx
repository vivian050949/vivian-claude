import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { beyondWorkData } from '../data'
import { useMobile } from '../ViewContext'

function CategoryCard({ cat, i, inView, isMobile }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl border border-[#1C2B3A]/6 overflow-hidden"
    >
      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-[280px_1fr]'}`}>
        <div className={`relative bg-[#1C2B3A]/5 overflow-hidden ${isMobile ? 'h-48' : 'h-auto'}`}>
          {!imgError ? (
            <img src={cat.image} alt={cat.category}
              onError={() => setImgError(true)}
              loading="lazy"
              width="560" height="400"
              className="w-full h-full object-cover"
              style={{ objectPosition: cat.objectPosition || 'center center' }} />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[#D8B08C]/40 text-4xl font-bold select-none">
                {cat.category.slice(0, 1)}
              </span>
            </div>
          )}
          <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-t from-[#1C2B3A]/80' : 'bg-gradient-to-r from-[#1C2B3A]/60'} to-transparent`} />
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-white font-semibold text-sm leading-snug text-center">{cat.category}</h3>
          </div>
        </div>

        <div className={`divide-y divide-[#1C2B3A]/6 ${isMobile ? 'px-4 py-3' : 'p-6'}`}>
          {cat.items.map((item, j) => (
            <motion.div key={j}
              initial={{ opacity: 0, x: 10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 + j * 0.07 + 0.2, duration: 0.5 }}
              className="py-3 first:pt-0 last:pb-0"
            >
              <div className="flex items-start gap-2 mb-1">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#D8B08C] shrink-0" />
                <h4 className="text-sm font-semibold text-[#1C2B3A] leading-snug">{item.title}</h4>
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed pl-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function BeyondWork() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isMobile = useMobile()

  return (
    <section id="beyond" className={`bg-[#F7F5F2] border-t border-[#1C2B3A]/8 ${isMobile ? 'py-12 px-5' : 'py-28 px-6'}`}>
      <div className={isMobile ? '' : 'max-w-6xl mx-auto'}>
        <div className="flex items-start gap-4 mb-8">
          <div className="flex items-center gap-3 shrink-0 pt-2">
            <span className="block w-6 h-px bg-[#D8B08C]" />
            <span className="text-[#6B7280] text-[0.7rem] tracking-[0.2em] uppercase">其他經歷</span>
          </div>
          <h2 className={`font-bold text-[#1C2B3A] leading-tight ${isMobile ? 'text-xl' : 'text-[clamp(1.6rem,4vw,2.6rem)]'}`}>
            領導・表達・公共參與
          </h2>
        </div>

        <div ref={ref} className="space-y-4">
          {beyondWorkData.map((cat, i) => (
            <CategoryCard key={i} cat={cat} i={i} inView={inView} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  )
}
