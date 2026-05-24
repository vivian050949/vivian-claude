import { useRef } from 'react'
import { PostAuthorRow, PostActionBar } from './PostComponents'

export function ThreadContent({ thread, onNavigate, allThreadTitles = [] }) {
  const containerRef = useRef(null)

  const scrollToLang = (idx) => {
    const el = document.getElementById(`mlr-${thread.id}-${idx}`)
    if (el && containerRef.current) {
      const cr = containerRef.current.getBoundingClientRect()
      const er = el.getBoundingClientRect()
      containerRef.current.scrollBy({ top: er.top - cr.top - 12, behavior: 'smooth' })
    }
  }

  const divider = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
      <div style={{ flex: 1, height: 1, backgroundColor: '#c0392b' }} />
      <span style={{ color: '#c0392b', fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap' }}>{thread.dateLabel}</span>
      <div style={{ flex: 1, height: 1, backgroundColor: '#c0392b' }} />
      <span style={{ backgroundColor: '#c0392b', color: 'white', fontSize: 10, padding: '1px 6px', borderRadius: 8, fontWeight: 600 }}>新的</span>
    </div>
  )

  return (
    <div ref={containerRef} style={{ padding: '20px 24px', overflowY: 'auto', flex: 1 }}>
      {divider}

      {thread.type === 'multilang' ? (
        <>
          <div style={{ paddingBottom: 16, marginBottom: 16, borderBottom: '1px solid #232428' }}>
            <PostAuthorRow authorName={thread.authorName} time={thread.time} />
            {thread.groups ? (
              <div style={{ margin: '4px 0 10px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {thread.groups.map(group => (
                  <div key={group.heading}>
                    <div style={{ color: '#dbdee1', fontSize: 13.5, marginBottom: 3 }}>{group.heading}</div>
                    <ol style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {group.indices.map(idx => (
                        <li key={idx}>
                          <a href="#" onClick={(e) => { e.preventDefault(); scrollToLang(idx) }}
                            style={{ color: '#00a8fc', fontSize: 14, textDecoration: 'none' }}
                            onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                            onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                            {thread.replies[idx].title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            ) : (
              <ol style={{ paddingLeft: 20, margin: '4px 0 10px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {thread.languages.map((lang, idx) => (
                  <li key={lang}>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToLang(idx) }}
                      style={{ color: '#00a8fc', fontSize: 14, textDecoration: 'none' }}
                      onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                      onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                      {thread.title}-{lang}
                    </a>
                  </li>
                ))}
              </ol>
            )}
            <div style={{ fontSize: 13.5, color: '#dbdee1', marginBottom: 4 }}>
              👉 返回{' '}
              <a href="#" onClick={e => { e.preventDefault(); onNavigate && onNavigate('目錄') }}
                style={{ color: '#00a8fc', textDecoration: 'none' }}>目錄</a>
              <span style={{ color: '#6d6f78', fontSize: 11, marginLeft: 6 }}>（已編輯）</span>
            </div>
            <PostActionBar />
          </div>

          {thread.replies.map((reply, idx) => (
            <div key={idx} id={`mlr-${thread.id}-${idx}`}
              style={{ paddingBottom: 16, marginBottom: 16, borderBottom: '1px solid #232428' }}>
              <PostAuthorRow authorName={thread.authorName} time={thread.time} />
              <div style={{ fontWeight: 'bold', color: '#f2f3f5', fontSize: 17, marginBottom: 10 }}>{reply.title}</div>
              <pre style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap', color: '#dbdee1', fontSize: 13.5, lineHeight: 1.65, margin: 0 }}>
                {reply.content}
              </pre>
              <PostActionBar />
            </div>
          ))}
        </>
      ) : thread.type === 'toc' ? (
        <>
          <PostAuthorRow authorName={thread.authorName} time={thread.time} />
          {thread.sections.map((section) => (
            <div key={section.heading} style={{ marginBottom: 18 }}>
              <div style={{ fontWeight: 'bold', color: '#f2f3f5', fontSize: 16, marginBottom: 8 }}>{section.heading}</div>
              <ol style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {section.items.map((item, j) => {
                  const hasData = allThreadTitles.includes(item)
                  return (
                    <li key={j}>
                      {hasData ? (
                        <a href="#" onClick={e => { e.preventDefault(); onNavigate && onNavigate(item) }}
                          style={{ color: '#00a8fc', fontSize: 14, textDecoration: 'none' }}
                          onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                          onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                          {item}
                        </a>
                      ) : (
                        <span title="未納入展示範圍"
                          style={{ color: '#4e5058', fontSize: 14, fontStyle: 'italic', cursor: 'default', userSelect: 'none' }}>
                          {item}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ol>
            </div>
          ))}
          <PostActionBar />
        </>
      ) : (
        <>
          <PostAuthorRow authorName={thread.authorName} time={thread.time} />
          <pre style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap', color: '#dbdee1', fontSize: 13.5, lineHeight: 1.65, margin: 0 }}>
            {thread.text}
          </pre>
          <PostActionBar />
        </>
      )}
    </div>
  )
}
