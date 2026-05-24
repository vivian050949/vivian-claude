import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalData } from '../data'
import { useMobile } from '../ViewContext'

function Bar({ name, level, delay, inView, cert }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm text-[#1C2B3A]">{name}</span>
        <span className="text-xs text-[#6B7280] font-mono tabular-nums">{level}%</span>
      </div>

      <div className="h-1 bg-[#1C2B3A]/8 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-[#D8B08C]"
        />
      </div>

      {cert && (
        <p className="text-[0.68rem] text-[#D8B08C]">{cert}</p>
      )}
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const certRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const certInView = useInView(certRef, { once: true, margin: '-80px' })
  const isMobile = useMobile()

  return (
    <section id="skills" className={`border-t border-[#1C2B3A]/8 ${isMobile ? 'py-12 px-5' : 'py-16 px-6'}`}>
      <div className={isMobile ? '' : 'max-w-6xl mx-auto'}>
        <div className="flex items-start gap-4 mb-8">
          <div className="flex items-center gap-3 shrink-0 pt-2">
            <span className="block w-6 h-px bg-[#D8B08C]" />
            <span className="text-[#6B7280] text-[0.7rem] tracking-[0.2em] uppercase">技能圖譜</span>
          </div>
          <h2 className={`font-bold text-[#1C2B3A] leading-tight ${isMobile ? 'text-xl' : 'text-[clamp(1.6rem,4vw,2.6rem)]'}`}>
            專業能力與數位工具
          </h2>
        </div>

        {/* 上排：職能技能 / 數位工具 / 語言能力 */}
        <div ref={ref} className={`grid gap-8 mb-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-3 gap-10 lg:gap-12'}`}>
          <div>
            <h3 className="text-[0.7rem] font-semibold text-[#6B7280] tracking-[0.15em] uppercase mb-6">
              職能技能
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalData.skills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0, duration: 0.4 }}
                  className="text-xs text-[#1C2B3A] bg-[#1C2B3A]/6 border border-[#1C2B3A]/30 px-3 py-1.5 rounded-full hover:border-[#D8B08C] hover:text-[#D8B08C] transition-colors cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold text-[#6B7280] tracking-[0.15em] uppercase mb-6">
              數位工具
            </h3>
            <div className="space-y-5">
              {personalData.tools.map((tool, i) => (
                <Bar key={tool.name} name={tool.name} level={tool.level} delay={i * 0.08} inView={inView} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold text-[#6B7280] tracking-[0.15em] uppercase mb-6">
              語言能力
            </h3>
            <div className="space-y-5">
              {personalData.languages.map((lang, i) => (
                <Bar
                  key={lang.name}
                  name={lang.name}
                  level={lang.level}
                  delay={i * 0.08}
                  inView={inView}
                  cert={lang.cert}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 分隔線 */}
        <div className="border-t border-[#1C2B3A]/8 mb-8" />

        {/* 持有證照 */}
        <div className="flex items-start gap-12 mb-8">
          <div className="flex items-center gap-3 shrink-0 pt-1">
            <span className="block w-6 h-px bg-[#D8B08C]" />
            <span className="text-[#6B7280] text-[0.7rem] tracking-[0.2em] uppercase">持有證照</span>
          </div>
        </div>

        <div ref={certRef} className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-3 gap-8'}`}>
          {personalData.certifications.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={certInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-6 border border-[#1C2B3A]/6"
            >
              <h3 className="text-[0.7rem] font-semibold text-[#D8B08C] tracking-[0.15em] uppercase mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item, ii) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={certInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: gi * 0.1 + ii * 0.06 + 0.1, duration: 0.4 }}
                    className="flex items-start gap-2 text-sm text-[#1C2B3A]"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#D8B08C] shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
