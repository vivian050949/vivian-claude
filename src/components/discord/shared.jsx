import { useState } from 'react'

export const PIN_HINT_STYLES = `
  @keyframes ds-ping {
    0% { transform: scale(1); opacity: 0.7; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  @keyframes ds-arrow {
    0%, 100% { transform: translateX(0); opacity: 1; }
    50% { transform: translateX(-5px); opacity: 0.6; }
  }
`

export const PinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="21" y1="10" x2="14" y2="3" />
    <line x1="10" y1="21" x2="3" y2="14" />
    <polyline points="14 3 14 10 21 10" />
    <polyline points="10 21 10 14 3 14" />
    <line x1="14" y1="10" x2="10" y2="14" />
  </svg>
)

export const ForumIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M2 2h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5L4 18v-4H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <path d="M9 8h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1.5v3l-4-3H9a2 2 0 0 1-2-2v-1.5" opacity="0.45" />
  </svg>
)

export function ChannelGroup({ title, children }) {
  return (
    <>
      <div style={{ fontSize: 11, fontWeight: 'bold', color: '#949ba4', textTransform: 'uppercase', margin: '14px 0 4px 6px', letterSpacing: '0.5px' }}>
        {title}
      </div>
      {children}
    </>
  )
}

export function ChannelItem({ active, onClick, forum, children }) {
  const [hovered, setHovered] = useState(false)
  const lit = active || hovered
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); onClick && onClick() }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', padding: '6px 8px', borderRadius: 4,
        color: lit ? '#f2f3f5' : '#949ba4',
        backgroundColor: lit ? '#404249' : 'transparent',
        textDecoration: 'none', fontSize: 13, marginBottom: 2, transition: 'all 0.15s'
      }}
    >
      <span style={{ marginRight: 6, color: lit ? '#b5bac1' : '#80848e', display: 'flex', alignItems: 'center', fontSize: 15, lineHeight: 1 }}>
        {forum ? <ForumIcon size={15} /> : '#'}
      </span>
      {children}
    </a>
  )
}

export function MessageCard({ id, title, content }) {
  return (
    <div id={id} style={{ backgroundColor: 'rgba(0,0,0,0.12)', borderLeft: '4px solid #5865f2', padding: 12, borderRadius: '0 8px 8px 0' }}>
      <div style={{ fontWeight: 'bold', color: '#f2f3f5', marginBottom: 6, fontSize: 13 }}>{title}</div>
      <pre style={{
        fontFamily: 'Consolas, Monaco, monospace', fontSize: 12.5, color: '#dbdee1',
        whiteSpace: 'pre-wrap', backgroundColor: '#1e1f22', padding: 10, borderRadius: 6,
        border: '1px solid #2b2d31', lineHeight: 1.6, margin: 0
      }}>
        {content}
      </pre>
    </div>
  )
}

export function SectionHeader({ title }) {
  return (
    <div style={{ fontSize: 12, fontWeight: 'bold', color: '#b5bac1', marginTop: 8, marginBottom: 8, paddingBottom: 6, borderBottom: '1px solid #3f4147' }}>
      {title}
    </div>
  )
}

export function DirectoryGroup({ title, children }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 11.5, fontWeight: 'bold', color: '#949ba4', marginBottom: 4 }}>{title}</div>
      {children}
    </div>
  )
}

export function DirectoryLink({ bold, onClick, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); onClick && onClick() }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block', color: '#00a8fc',
        textDecoration: hovered ? 'underline' : 'none',
        fontSize: 12.5, padding: '2px 0 2px 10px', position: 'relative',
        fontWeight: bold ? 'bold' : 'normal'
      }}
    >
      <span style={{ position: 'absolute', left: 0, color: '#4e5058' }}>•</span>
      {children}
    </a>
  )
}
