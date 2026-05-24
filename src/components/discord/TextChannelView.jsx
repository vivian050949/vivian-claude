import { textChannels } from '../discordData'

export function TextChannelView({ channelKey }) {
  const data = textChannels[channelKey]
  if (!data) return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#6d6f78', fontSize: 14, gap: 8 }}>
      <span style={{ fontSize: 28 }}>📁</span>
      <span>此頻道內容未納入展示範圍</span>
    </div>
  )

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        {/* Welcome block */}
        <div style={{ padding: '32px 20px 16px', marginTop: 'auto' }}>
          <div style={{ width: 64, height: 64, backgroundColor: '#4e5058', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, color: '#b5bac1', fontWeight: 900, marginBottom: 16 }}>
            #
          </div>
          <div style={{ fontWeight: 800, color: '#f2f3f5', fontSize: 26, marginBottom: 6 }}>
            歡迎來到 #{data.name}！
          </div>
          <div style={{ color: '#b5bac1', fontSize: 14, marginBottom: 16 }}>
            這就是 #{data.name} 頻道的起點。
          </div>
          <button onClick={e => e.preventDefault()}
            style={{ background: '#4e5058', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#dbdee1', cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', gap: 5 }}>
            ✏️ 編輯頻道
          </button>
        </div>

        {/* Messages */}
        <div style={{ padding: '0 20px 12px' }}>
          {data.messages.map((msg) => (
            <div key={msg.id}>
              {msg.dateLabel && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '12px 0' }}>
                  <div style={{ flex: 1, height: 1, backgroundColor: '#3f4147' }} />
                  <span style={{ color: '#6d6f78', fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap' }}>{msg.dateLabel}</span>
                  <div style={{ flex: 1, height: 1, backgroundColor: '#3f4147' }} />
                </div>
              )}
              <div style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start', padding: '2px 0' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#36373d', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                  {msg.avatarEmoji}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 3 }}>
                    <span style={{ fontWeight: 700, color: msg.roleColor || '#f2f3f5', fontSize: 14 }}>{msg.author}</span>
                    <span style={{ color: '#6d6f78', fontSize: 11 }}>{msg.time}</span>
                  </div>
                  <div style={{ color: '#dbdee1', fontSize: 14, lineHeight: 1.6 }}>
                    {msg.boldTitle && (
                      <div style={{ fontWeight: 700, color: '#f2f3f5', marginBottom: 2 }}>{msg.boldTitle}</div>
                    )}
                    <pre style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap', margin: 0, fontSize: 14, lineHeight: 1.6, color: '#dbdee1' }}>
                      {msg.content}
                    </pre>
                    {msg.isEdited && (
                      <span style={{ color: '#6d6f78', fontSize: 10, marginLeft: 2 }}>（已編輯）</span>
                    )}
                    {msg.image && (
                      <div style={{ marginTop: 8 }}>
                        <img src={msg.image} alt="附圖" style={{ maxWidth: 260, maxHeight: 300, borderRadius: 4, display: 'block', objectFit: 'cover' }} />
                      </div>
                    )}
                  </div>
                  {msg.reactions?.length > 0 && (
                    <div style={{ display: 'flex', gap: 4, marginTop: 6, flexWrap: 'wrap' }}>
                      {msg.reactions.map((r, ri) => (
                        <div key={ri} style={{
                          backgroundColor: '#2b2d31', border: '1px solid #404249',
                          borderRadius: 8, padding: '2px 8px', fontSize: 12.5,
                          color: '#dbdee1', display: 'flex', alignItems: 'center', gap: 5, cursor: 'default'
                        }}>
                          {r.emoji} <span style={{ fontSize: 12, color: '#b5bac1' }}>{r.count}</span>
                        </div>
                      ))}
                      <div style={{ width: 28, height: 22, backgroundColor: '#2b2d31', border: '1px solid #404249', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6d6f78', fontSize: 13, cursor: 'pointer' }}>
                        😊
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div style={{ padding: '0 16px 16px', flexShrink: 0 }}>
        <div style={{ backgroundColor: '#383a40', borderRadius: 8, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: '#6d6f78', fontSize: 22, lineHeight: 1, cursor: 'pointer' }}>+</span>
          <span style={{ color: '#6d6f78', fontSize: 14, flex: 1 }}>傳訊息到 #{data.name}</span>
          <div style={{ display: 'flex', gap: 14, color: '#6d6f78', fontSize: 18, alignItems: 'center' }}>
            <span>🎁</span>
            <span style={{ fontSize: 12, fontWeight: 700, border: '1px solid #6d6f78', borderRadius: 3, padding: '1px 4px' }}>GIF</span>
            <span>😊</span>
            <span>👤</span>
          </div>
        </div>
      </div>
    </div>
  )
}
