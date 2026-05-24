import { useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { ViewContext } from './ViewContext'
import ErrorBoundary from './components/ErrorBoundary'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Traits from './components/Traits'
import Cases from './components/Cases'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import BeyondWork from './components/BeyondWork'
import Footer from './components/Footer'

export default function App() {
  const [previewMobile, setPreviewMobile] = useState(false)
  const [isRealMobile, setIsRealMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  )

  useEffect(() => {
    const check = () => setIsRealMobile(window.innerWidth < 768)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const isMobile = isRealMobile || previewMobile
  const showPhoneFrame = previewMobile && !isRealMobile

  const sections = (
    <>
      <Nav
        mobileView={previewMobile}
        onToggle={() => setPreviewMobile(v => !v)}
        isRealMobile={isRealMobile}
      />
      <main>
        <Hero />
        <Traits />
        <Cases />
        <Timeline />
        <Skills />
        <BeyondWork />
      </main>
      <Footer />
    </>
  )

  return (
    <ErrorBoundary>
    <MotionConfig reducedMotion="user">
    <ViewContext.Provider value={isMobile}>
      {showPhoneFrame ? (
        <div className="min-h-screen bg-[#1C2B3A]/12 flex justify-center items-start pt-8 pb-16 font-sans">
          <div style={{
            width: 390,
            maxHeight: '90vh',
            overflowY: 'auto',
            overflowX: 'hidden',
            borderRadius: 40,
            boxShadow: '0 30px 80px rgba(28,43,58,0.3), 0 0 0 2px rgba(28,43,58,0.1)',
            background: '#F7F5F2',
          }}>
            {sections}
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-[#F7F5F2] font-sans">
          {sections}
        </div>
      )}
    </ViewContext.Provider>
    </MotionConfig>
    </ErrorBoundary>
  )
}
