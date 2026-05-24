import { useState } from 'react'
import { ThreadContent } from './ThreadContent'

function ThreadCard({ thread, active, onClick, isMobile }) {
  const [hovered, setHovered] = useState(false)
  const lit = active && !isMobile
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textAlign: 'left',
        padding: isMobile ? '12px 16px' : '10px 12px',
        margin: isMobile ? '0 0 1px' : '0 8px 4px',
        borderRadius: isMobile ? 0 : 6,
        cursor: 'pointer',
        backgroundColor: lit ? '#404249' : hovered ? '#35373c' : 'transparent',
        border: isMobile ? 'none' : `1px solid ${lit ? '#5865f2' : 'transparent'}`,
        borderBottom: isMobile ? '1px solid #1f2023' : undefined,
        transition: 'background 0.15s', color: 'inherit', display: 'block',
        width: isMobile ? '100%' : 'calc(100% - 16px)',
        boxSizing: 'border-box',
      }}
    >
      {thread.pinned && <div style={{ marginBottom: 4, fontSize: 13 }}>⭐</div>}
      <div style={{ fontWeight: 'bold', color: '#f2f3f5', fontSize: isMobile ? 14 : 13.5, marginBottom: 3 }}>{thread.title}</div>
      <div style={{ color: '#949ba4', fontSize: 12, marginBottom: 5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        <span style={{ color: '#b5bac1', fontWeight: 500 }}>{thread.authorName}</span>: {thread.preview}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6d6f78', fontSize: 11 }}>
        <span>💬 {thread.comments}</span>
        <span>{thread.relativeDate}</span>
        {isMobile && <span style={{ marginLeft: 'auto', color: '#5865f2', fontSize: 12 }}>查看 ›</span>}
      </div>
    </button>
  )
}

export function ForumView({ threads, showNotice, isMobile }) {
  const [selected, setSelected] = useState(threads[0])
  const [query, setQuery] = useState('')
  // mobile: 'list' | 'thread'
  const [mobileForumView, setMobileForumView] = useState('list')

  const matchesQuery = (thread, q) => {
    if (!q) return true
    const lower = q.toLowerCase()
    if (thread.title.toLowerCase().includes(lower)) return true
    if (thread.preview.toLowerCase().includes(lower)) return true
    if (thread.type === 'toc') {
      return thread.sections.some(s =>
        s.heading.toLowerCase().includes(lower) ||
        s.items.some(item => item.toLowerCase().includes(lower))
      )
    }
    if (thread.type === 'text') return thread.text.toLowerCase().includes(lower)
    if (thread.type === 'multilang') {
      return thread.replies.some(r =>
        r.title.toLowerCase().includes(lower) || r.content.toLowerCase().includes(lower)
      )
    }
    return false
  }

  const filtered = threads.filter(t => matchesQuery(t, query))
  const effectiveSelected = filtered.find(t => t.id === selected?.id)
    ? selected
    : (filtered[0] || null)

  const handleNavigate = (title) => {
    const target = threads.find(t => t.title === title)
    if (target) { setSelected(target); setQuery(''); setMobileForumView('thread') }
  }

  const handleMobileSelect = (thread) => {
    setSelected(thread)
    setMobileForumView('thread')
  }

  if (isMobile) {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: '#313338' }}>
        {showNotice && (
          <div style={{ backgroundColor: '#4e3a2a', borderBottom: '1px solid #6b4c30', padding: '7px 16px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <span style={{ fontSize: 14 }}>📁</span>
            <span style={{ fontSize: 12, color: '#f0c080' }}>此頻道內容未納入展示範圍，架構與各語系訂單回覆相同</span>
          </div>
        )}

        {mobileForumView === 'list' ? (
          /* 討論串列表 */
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Search bar */}
            <div style={{ padding: '10px 12px', backgroundColor: '#2b2d31', borderBottom: '1px solid #1f2023', flexShrink: 0 }}>
              <div style={{ backgroundColor: '#1e1f22', borderRadius: 6, padding: '7px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: '#6d6f78', fontSize: 14, flexShrink: 0 }}>🔍</span>
                <input
                  type="text" value={query} onChange={e => setQuery(e.target.value)}
                  placeholder="搜尋討論串..."
                  aria-label="搜尋討論串"
                  style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: '#dbdee1', fontSize: 13, minWidth: 0 }}
                />
                {query && (
                  <button onClick={() => setQuery('')} aria-label="清除"
                    style={{ background: 'none', border: 'none', color: '#6d6f78', cursor: 'pointer', fontSize: 14, lineHeight: 1 }}>✕</button>
                )}
              </div>
            </div>
            {/* Thread list */}
            <div style={{ flex: 1, overflowY: 'auto', backgroundColor: '#2b2d31' }}>
              {filtered.length > 0 ? (
                filtered.map(thread => (
                  <ThreadCard key={thread.id} thread={thread} isMobile={true}
                    active={false} onClick={() => handleMobileSelect(thread)} />
                ))
              ) : (
                <div style={{ padding: '24px 16px', color: '#6d6f78', fontSize: 13, textAlign: 'center', lineHeight: 1.8 }}>
                  找不到「{query}」<br />的相關結果
                </div>
              )}
            </div>
          </div>
        ) : (
          /* 討論串內容 */
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Back header */}
            <div style={{ height: 44, backgroundColor: '#2b2d31', borderBottom: '1px solid #1f2023', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 10, flexShrink: 0 }}>
              <button
                onClick={() => setMobileForumView('list')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#b5bac1', padding: '4px 2px', display: 'flex', alignItems: 'center' }}
                aria-label="返回列表"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <span style={{ color: '#f2f3f5', fontWeight: 700, fontSize: 13.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {effectiveSelected?.title}
              </span>
            </div>
            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {effectiveSelected
                ? <ThreadContent thread={effectiveSelected} onNavigate={handleNavigate} allThreadTitles={threads.map(t => t.title)} />
                : <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6d6f78', fontSize: 13 }}>選擇一篇貼文查看內容</div>
              }
            </div>
          </div>
        )}
      </div>
    )
  }

  // Desktop
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {showNotice && (
        <div style={{ backgroundColor: '#4e3a2a', borderBottom: '1px solid #6b4c30', padding: '7px 16px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <span style={{ fontSize: 14 }}>📁</span>
          <span style={{ fontSize: 12.5, color: '#f0c080' }}>此頻道內容未納入展示範圍，架構與各語系訂單回覆相同</span>
        </div>
      )}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Thread list */}
        <div style={{ width: 230, flexShrink: 0, backgroundColor: '#2b2d31', borderRight: '1px solid #1f2023', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '10px 10px 8px', borderBottom: '1px solid #1f2023' }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ flex: 1, backgroundColor: '#1e1f22', borderRadius: 4, padding: '5px 8px', display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ color: '#6d6f78', fontSize: 13, flexShrink: 0 }}>🔍</span>
                <input
                  type="text" value={query} onChange={e => setQuery(e.target.value)}
                  placeholder="搜尋..." aria-label="搜尋討論串"
                  style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: '#dbdee1', fontSize: 12, minWidth: 0, caretColor: '#dbdee1' }}
                />
                {query && (
                  <button onClick={() => setQuery('')} aria-label="清除搜尋"
                    style={{ background: 'none', border: 'none', color: '#6d6f78', cursor: 'pointer', padding: 0, fontSize: 12, lineHeight: 1, flexShrink: 0 }}>✕</button>
                )}
              </div>
              <div style={{ backgroundColor: '#5865f2', color: 'white', borderRadius: 4, padding: '5px 8px', fontSize: 12, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 4, cursor: 'default' }}>
                💬 新貼文
              </div>
            </div>
            <div style={{ marginTop: 7, display: 'flex', alignItems: 'center', gap: 4, color: '#b5bac1', fontSize: 11.5, cursor: 'default' }}>
              ⇅ 排序與檢視 ▾
            </div>
          </div>
          <div style={{ overflowY: 'auto', flex: 1, padding: '6px 0' }}>
            {filtered.length > 0 ? (
              filtered.map(thread => (
                <ThreadCard key={thread.id} thread={thread}
                  active={effectiveSelected?.id === thread.id}
                  onClick={() => setSelected(thread)} />
              ))
            ) : (
              <div style={{ padding: '20px 12px', color: '#6d6f78', fontSize: 12, textAlign: 'center', lineHeight: 1.6 }}>
                找不到「{query}」<br />的相關結果
              </div>
            )}
          </div>
        </div>

        {/* Thread content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#313338', overflow: 'hidden' }}>
          {effectiveSelected
            ? <ThreadContent thread={effectiveSelected} onNavigate={handleNavigate} allThreadTitles={threads.map(t => t.title)} />
            : <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6d6f78', fontSize: 13 }}>選擇一篇貼文查看內容</div>
          }
        </div>
      </div>
    </div>
  )
}
