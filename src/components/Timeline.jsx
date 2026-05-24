import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ShoppingBag, Building2, Crown, Shield, FileText,
  Handshake, Award, Compass, Users, Clock, TrendingUp
} from 'lucide-react'
import { personalData } from '../data'
import { useMobile } from '../ViewContext'

const iconMap = {
  ShoppingBag, Building2, Crown, Shield, FileText,
  Handshake, Award, Compass, Users, Clock, TrendingUp
}

function TimelineItem({ item, i, inView, isMobile, isLast }) {
  const Icon = iconMap[item.icon] || Compass
  const isFeatured = !!item.featured

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex gap-3"
      >
        <div className="flex flex-col items-center shrink-0">
          <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 ${
            isFeatured
              ? 'bg-[#D8B08C] border-[#D8B08C] text-white'
              : 'bg-[#F7F5F2] border-[#1C2B3A]/15 text-[#6B7280]'
          }`}>
            <Icon className="w-4 h-4" />
          </div>
          {!isLast && <div className="w-px flex-1 bg-[#1C2B3A]/10 mt-1 min-h-[1.5rem]" />}
        </div>

        <div className="flex-1 pb-5">
          <span className={`text-[0.65rem] font-mono block mb-1 ${isFeatured ? 'text-[#D8B08C] font-semibold' : 'text-[#6B7280]'}`}>
            {item.year}
          </span>
          <div className={`rounded-xl p-4 ${
            isFeatured
              ? 'bg-white border-2 border-[#D8B08C]/30 shadow-sm'
              : 'bg-white border border-[#1C2B3A]/8'
          }`}>
            <h3 className={`font-semibold mb-0.5 leading-snug text-[#1C2B3A] ${isFeatured ? 'text-base' : 'text-sm'}`}>
              {item.role}
            </h3>
            {item.company && (
              <p className="text-[0.6rem] text-[#D8B08C]/80 mb-1.5">{item.company}</p>
            )}
            <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>

            {isFeatured && item.bullets && (
              <ul className="mt-3 pt-3 border-t border-[#1C2B3A]/8 space-y-1.5">
                {item.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2 text-sm text-[#1C2B3A]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D8B08C] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {isFeatured && item.metrics && (
              <div className="space-y-2 mt-3 pt-3 border-t border-[#1C2B3A]/8">
                {item.metrics.map((m, mi) => {
                  const MIcon = iconMap[m.icon]
                  return (
                    <div key={mi} className="flex items-center gap-2">
                      <MIcon className="w-3.5 h-3.5 text-[#D8B08C] shrink-0" />
                      <span className="text-xs font-medium text-[#1C2B3A]">{m.label}</span>
                      <span className="text-[0.65rem] text-[#6B7280]">{m.sub}</span>
                    </div>
                  )
                })}
              </div>
            )}

            {item.tags && (
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#1C2B3A]/8">
                {item.tags.map((tag) => (
                  <span key={tag} className={`text-[0.6rem] px-2 py-0.5 rounded-full font-medium ${
                    isFeatured ? 'bg-[#1C2B3A]/8 text-[#1C2B3A]' : 'bg-[#D8B08C]/12 text-[#D8B08C]'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start"
    >
      <div className="w-24 shrink-0 text-right pr-5 pt-2.5">
        <span className={`font-mono ${isFeatured ? 'text-[#D8B08C] font-semibold text-sm' : 'text-xs text-[#6B7280]'}`}>
          {item.year}
        </span>
      </div>

      <div className={`shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 ${
        isFeatured
          ? 'bg-[#D8B08C] border-[#D8B08C] text-white'
          : 'bg-[#F7F5F2] border-[#1C2B3A]/15 text-[#6B7280]'
      }`}>
        <Icon className={isFeatured ? 'w-5 h-5' : 'w-4 h-4'} />
      </div>

      <div className="flex-1 ml-5 pb-5">
        <div className={`rounded-2xl p-5 ${
          isFeatured
            ? 'bg-white border-2 border-[#D8B08C]/40 shadow-sm'
            : 'bg-white border border-[#1C2B3A]/8'
        }`}>
          <h3 className={`font-bold mb-0.5 leading-snug text-[#1C2B3A] ${isFeatured ? 'text-xl' : 'text-sm font-semibold'}`}>
            {item.role}
          </h3>
          {item.company && (
            <p className="text-[0.65rem] text-[#D8B08C]/80 mb-2">{item.company}</p>
          )}
          <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>

          {isFeatured && item.bullets && (
            <ul className="mt-4 pt-4 border-t border-[#1C2B3A]/8 space-y-2">
              {item.bullets.map((b, bi) => (
                <li key={bi} className="flex items-start gap-2 text-sm text-[#1C2B3A]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D8B08C] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {isFeatured && item.metrics && (
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-[#1C2B3A]/8">
              {item.metrics.map((m, mi) => {
                const MIcon = iconMap[m.icon]
                return (
                  <div key={mi} className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#D8B08C]/12 flex items-center justify-center shrink-0 mt-0.5">
                      <MIcon className="w-3.5 h-3.5 text-[#D8B08C]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1C2B3A] leading-tight">{m.label}</div>
                      <div className="text-[0.65rem] text-[#6B7280] mt-0.5">{m.sub}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#1C2B3A]/8">
              {item.tags.map((tag) => (
                <span key={tag} className={`text-[0.65rem] px-2.5 py-1 rounded-full font-medium ${
                  isFeatured ? 'bg-[#1C2B3A]/8 text-[#1C2B3A]' : 'bg-[#D8B08C]/12 text-[#D8B08C]'
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isMobile = useMobile()

  return (
    <section id="timeline" className={`bg-[#F7F5F2] border-t border-[#1C2B3A]/8 ${isMobile ? 'py-12 px-5' : 'py-28 px-6'}`}>
      <div className={isMobile ? '' : 'max-w-6xl mx-auto'}>
        <div className="flex items-start gap-4 mb-8">
          <div className="flex items-center gap-3 shrink-0 pt-2">
            <span className="block w-6 h-px bg-[#D8B08C]" />
            <span className="text-[#6B7280] text-[0.7rem] tracking-[0.2em] uppercase">工作經歷</span>
          </div>
          <h2 className={`font-bold text-[#1C2B3A] leading-tight break-keep ${isMobile ? 'text-xl' : 'text-[clamp(1.6rem,4vw,2.6rem)]'}`}>
            從第一線到系統化，十年淬鍊
          </h2>
        </div>

        {personalData.education?.length > 0 && (
          <div className="mb-8 pb-8 border-b border-[#1C2B3A]/8">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-4 h-px bg-[#D8B08C]" />
              <span className="text-[#6B7280] text-[0.7rem] tracking-[0.2em] uppercase">學歷</span>
            </div>
            {personalData.education.map((edu, i) => (
              <div key={i} className={isMobile ? '' : 'flex items-start'}>
                {isMobile ? (
                  <div>
                    <span className="text-[0.65rem] font-mono text-[#D8B08C] block mb-0.5">{edu.period}</span>
                    <h3 className="text-sm font-semibold text-[#1C2B3A] mb-0.5">{edu.school}</h3>
                    <p className="text-[#6B7280] text-sm">{edu.department}</p>
                  </div>
                ) : (
                  <>
                    <div className="w-24 shrink-0 text-right pr-5">
                      <span className="text-xs font-mono text-[#D8B08C] font-semibold">{edu.period}</span>
                    </div>
                    <div className="w-10 shrink-0" />
                    <div className="flex-1 ml-5">
                      <h3 className="text-sm font-semibold text-[#1C2B3A] mb-0.5">{edu.school}</h3>
                      <p className="text-[#6B7280] text-sm">{edu.department}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        <div ref={ref} className="relative">
          {!isMobile && (
            <div className="absolute w-px bg-[#1C2B3A]/10" style={{ left: '7.25rem', top: '1.25rem', bottom: '4rem' }} />
          )}
          <div>
            {personalData.timeline.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                i={i}
                inView={inView}
                isMobile={isMobile}
                isLast={i === personalData.timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
