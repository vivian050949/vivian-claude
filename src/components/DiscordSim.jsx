import { useState, useEffect, useRef } from 'react'
import { cardSections, pinnedDirectory, sidebarGroups, langForumThreads, reviewForumThreads, textChannels } from './discordData'
import { PIN_HINT_STYLES, PinIcon, ForumIcon, ChannelGroup, ChannelItem, MessageCard, SectionHeader, DirectoryGroup, DirectoryLink } from './discord/shared'
import { ForumView } from './discord/ForumView'
import { TextChannelView } from './discord/TextChannelView'
import { useMobile } from '../ViewContext'

export default function DiscordSim() {
  const [pinOpen, setPinOpen] = useState(false)
  const [activeChannel, setActiveChannel] = useState('card')
  // Mobile: 'channels' = 頻道列表, 'content' = 頻道內容
  const [mobileView, setMobileView] = useState('channels')
  const pinBtnRef = useRef(null)
  const pinPanelRef = useRef(null)
  const chatScrollerRef = useRef(null)
  const isMobile = useMobile()

  useEffect(() => {
    if (!pinOpen) return
    const handler = (e) => {
      if (
        pinBtnRef.current && !pinBtnRef.current.contains(e.target) &&
        pinPanelRef.current && !pinPanelRef.current.contains(e.target)
      ) {
        setPinOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [pinOpen])

  const scrollToMessage = (id) => {
    setPinOpen(false)
    setActiveChannel('card')
    setMobileView('content')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el && chatScrollerRef.current) {
        const container = chatScrollerRef.current
        container.scrollTo({ top: el.offsetTop - container.offsetTop - 12, behavior: 'smooth' })
      }
    }, 80)
  }

  const handleMobileChannelSelect = (key) => {
    setActiveChannel(key)
    setPinOpen(false)
    setMobileView('content')
  }

  const allChannels = sidebarGroups.flatMap(g => g.items)
  const activeItem = allChannels.find(i => i.key === activeChannel)
  const activeLabel = activeItem?.label || '信用卡中英訂單回覆'
  const isForumChannel = activeChannel === 'lang' || activeChannel === 'review'
  const CHANNELS_WITH_PINS = ['card', 'maintenance']
  const hasPins = CHANNELS_WITH_PINS.includes(activeChannel)
  const showHint = hasPins

  // ── Pin Panel 內容（依頻道動態切換） ──
  const pinPanelTitle = activeChannel === 'card' ? '已釘選的訊息（快速導覽目錄）' : '已釘選的訊息'

  const PinPanelBody = () => {
    if (activeChannel === 'maintenance') {
      return (
        <div style={{ backgroundColor: '#313338', borderRadius: 6, padding: 12, border: '1px solid #232428' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: '#36373d', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🖥️</div>
            <div>
              <span style={{ color: '#00a8fc', fontWeight: 700, fontSize: 13 }}>前台值班櫃檯</span>
              <span style={{ color: '#6d6f78', fontSize: 11, marginLeft: 6 }}>2026/4/28 晚上7:53</span>
            </div>
          </div>
          <div style={{ fontWeight: 700, color: '#f2f3f5', fontSize: 13, marginBottom: 4 }}>維修報修公版</div>
          <pre style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap', color: '#dbdee1', fontSize: 12.5, margin: 0, lineHeight: 1.65 }}>
            {'報修申請\n\n報修日期：\n項目名稱：\n故障狀況：\n\n報修回覆：'}
          </pre>
          <span style={{ color: '#6d6f78', fontSize: 10.5 }}>（已編輯）</span>
        </div>
      )
    }
    return (
      <div style={{ backgroundColor: '#313338', borderRadius: 6, padding: 12, border: '1px solid #232428' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{ width: 22, height: 22, backgroundColor: '#5865f2', borderRadius: '50%', fontSize: 9, fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SYS</div>
          <span style={{ fontWeight: 'bold', color: '#f2f3f5', fontSize: 12 }}>營運目錄管理系統</span>
        </div>
        {pinnedDirectory.map((group) => (
          <DirectoryGroup key={group.title} title={group.title}>
            {group.links.map((link) => (
              <DirectoryLink key={link.id} bold={link.bold} onClick={() => scrollToMessage(link.id)}>
                {link.label}
              </DirectoryLink>
            ))}
          </DirectoryGroup>
        ))}
      </div>
    )
  }

  // ── Desktop: Pin Panel ──
  const DesktopPinPanel = (
    <div ref={pinPanelRef} style={{
      position: 'absolute', top: 48, right: 16, width: 'min(340px, calc(100% - 32px))', maxHeight: 460,
      backgroundColor: '#2b2d31', borderRadius: 8,
      boxShadow: '0 8px 24px rgba(0,0,0,0.4)', border: '1px solid #3f4147',
      display: 'flex', flexDirection: 'column', zIndex: 10,
      opacity: pinOpen ? 1 : 0,
      transform: pinOpen ? 'translateY(0)' : 'translateY(-10px)',
      pointerEvents: pinOpen ? 'auto' : 'none',
      transition: 'opacity 0.2s ease, transform 0.2s ease'
    }}>
      <div style={{ padding: '12px 14px', fontSize: 13, fontWeight: 'bold', color: '#f2f3f5', borderBottom: '1px solid #1f2023', display: 'flex', alignItems: 'center', gap: 6 }}>
        <PinIcon size={14} />
        {pinPanelTitle}
      </div>
      <div style={{ padding: 10, overflowY: 'auto' }}>
        <PinPanelBody />
      </div>
    </div>
  )

  return (
    <div style={{
      width: '100%', backgroundColor: '#ffffff', borderRadius: 12,
      boxShadow: '0 10px 30px rgba(92,79,78,0.06)', border: '1px solid #e8e2d5',
      overflow: 'hidden', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <style>{PIN_HINT_STYLES}</style>

      {/* Info Header */}
      <div style={{
        backgroundColor: '#efeae0', padding: isMobile ? '10px 14px' : '12px 20px', borderBottom: '1px solid #e8e2d5',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 13, color: '#7a6e6d', flexWrap: 'wrap', gap: 8
      }}>
        <span style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
          💻 <strong>前台客務營運中心</strong>
          <span style={{ fontWeight: 600, fontSize: isMobile ? 10 : 11.5, color: '#fff', backgroundColor: '#c0855a', padding: '2px 8px', borderRadius: 20, whiteSpace: isMobile ? 'normal' : 'nowrap', display: isMobile ? 'block' : 'inline', marginTop: isMobile ? 4 : 0 }}>
            部分節錄展示：維修報修・202605每日交接・信用卡中英訂單回覆・各語系訂單回覆
          </span>
        </span>
        {!isMobile && (
          <span style={{ backgroundColor: '#8c7e7c', color: '#fff', padding: '3px 10px', borderRadius: 20, fontSize: 11, whiteSpace: 'nowrap' }}>
            ✨ 點擊右側 📌 可展開目錄
          </span>
        )}
      </div>

      {isMobile ? (
        /* ══════════ Mobile Layout ══════════ */
        <div style={{ backgroundColor: '#313338', color: '#dbdee1', height: 'min(520px, 68vh)', display: 'flex', flexDirection: 'column' }}>

          {mobileView === 'channels' ? (
            /* ── View A：頻道列表（仿 Discord 手機側邊欄） ── */
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
              {/* Server Header */}
              <div style={{ height: 52, backgroundColor: '#2b2d31', borderBottom: '1px solid #1f2023', display: 'flex', alignItems: 'center', padding: '0 16px', fontWeight: 700, color: '#f2f3f5', fontSize: 15, flexShrink: 0 }}>
                🏨 前台客務營運中心
              </div>
              {/* Channel List */}
              <div style={{ flex: 1, overflowY: 'auto', backgroundColor: '#2b2d31', padding: '8px 8px' }}>
                {sidebarGroups.map((group) => (
                  <ChannelGroup key={group.title} title={group.title}>
                    {group.items.map((item) => (
                      <ChannelItem key={item.key} active={activeChannel === item.key}
                        onClick={() => handleMobileChannelSelect(item.key)} forum={item.forum}>
                        {item.label}
                      </ChannelItem>
                    ))}
                  </ChannelGroup>
                ))}
              </div>
            </div>
          ) : (
            /* ── View B：頻道內容（全版） ── */
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', position: 'relative' }}>

              {/* Top Bar：← 返回 + 頻道名 + 📌 */}
              <div style={{ height: 48, backgroundColor: '#313338', borderBottom: '1px solid #1f2023', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <button
                    onClick={() => { setMobileView('channels'); setPinOpen(false) }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#b5bac1', padding: '4px 2px', display: 'flex', alignItems: 'center', flexShrink: 0 }}
                    aria-label="返回頻道列表"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <span style={{ color: '#80848e', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    {isForumChannel ? <ForumIcon size={16} /> : <span style={{ fontSize: 17 }}>#</span>}
                  </span>
                  <span style={{ fontWeight: 700, color: '#f2f3f5', fontSize: 14, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {activeLabel}
                  </span>
                </div>
                {hasPins && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                    {showHint && (
                      <span style={{ fontSize: 13, color: '#fee75c', lineHeight: 1, animation: 'ds-arrow 1s ease-in-out infinite' }}>←</span>
                    )}
                    <div style={{ position: 'relative', display: 'flex' }}>
                      {showHint && (
                        <span style={{ position: 'absolute', inset: 0, borderRadius: 4, border: '2px solid #fee75c', animation: 'ds-ping 1.4s ease-out infinite', pointerEvents: 'none' }} />
                      )}
                      <button
                        ref={pinBtnRef}
                        onClick={(e) => { e.stopPropagation(); setPinOpen(v => !v) }}
                        aria-label="查看已釘選的訊息"
                        aria-expanded={pinOpen}
                        style={{
                          background: 'none', border: 'none', cursor: 'pointer', padding: 6, borderRadius: 4,
                          color: pinOpen ? '#fee75c' : (showHint ? '#fee75c' : '#b5bac1'),
                          backgroundColor: pinOpen ? '#35373c' : 'transparent',
                          transition: 'all 0.2s', display: 'flex'
                        }}
                      >
                        <PinIcon size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 📌 Mobile Pin Panel — 全寬從 top:48 蓋下來 */}
              <div ref={pinPanelRef} style={{
                position: 'absolute', top: 48, left: 0, right: 0, bottom: 0,
                backgroundColor: '#2b2d31', zIndex: 20,
                display: 'flex', flexDirection: 'column',
                opacity: pinOpen ? 1 : 0,
                transform: pinOpen ? 'translateY(0)' : 'translateY(-8px)',
                pointerEvents: pinOpen ? 'auto' : 'none',
                transition: 'opacity 0.2s ease, transform 0.2s ease'
              }}>
                <div style={{ padding: '13px 16px', fontSize: 13, fontWeight: 700, color: '#f2f3f5', borderBottom: '1px solid #1f2023', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <PinIcon size={14} />
                    {pinPanelTitle}
                  </span>
                  <button onClick={() => setPinOpen(false)} style={{ background: 'none', border: 'none', color: '#949ba4', cursor: 'pointer', fontSize: 20, lineHeight: 1, padding: '0 2px' }}>✕</button>
                </div>
                <div style={{ flex: 1, overflowY: 'auto', padding: 14 }}>
                  <PinPanelBody />
                </div>
              </div>

              {/* Content */}
              {isForumChannel ? (
                <ForumView key={activeChannel} isMobile={true}
                  threads={activeChannel === 'lang' ? langForumThreads : reviewForumThreads}
                  showNotice={activeChannel === 'review'} />
              ) : textChannels[activeChannel] ? (
                <TextChannelView channelKey={activeChannel} />
              ) : (
                <div ref={chatScrollerRef} style={{ flex: 1, padding: 14, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {activeChannel === 'card' ? (
                    cardSections.map((section) => (
                      <div key={section.id}>
                        <SectionHeader title={section.title} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {section.messages.map((msg) => (
                            <MessageCard key={msg.id} id={msg.id} title={msg.title} content={msg.content} />
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, color: '#6d6f78', fontSize: 14, gap: 8 }}>
                      <span style={{ fontSize: 28 }}>📁</span>
                      <span>此頻道內容未納入展示範圍</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* ══════════ Desktop Layout ══════════ */
        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', height: 550, minWidth: isForumChannel ? 620 : 520, backgroundColor: '#313338', color: '#dbdee1', position: 'relative' }}>

            {/* Sidebar */}
            <div style={{ backgroundColor: '#2b2d31', display: 'flex', flexDirection: 'column', borderRight: '1px solid #1f2023' }}>
              <div style={{ height: 48, borderBottom: '1px solid #1f2023', display: 'flex', alignItems: 'center', padding: '0 16px', fontWeight: 'bold', color: '#f2f3f5', fontSize: 14 }}>
                🏨 前台客務營運中心
              </div>
              <div style={{ padding: '10px 8px', overflowY: 'auto', flex: 1 }}>
                {sidebarGroups.map((group) => (
                  <ChannelGroup key={group.title} title={group.title}>
                    {group.items.map((item) => (
                      <ChannelItem key={item.key} active={activeChannel === item.key}
                        onClick={() => { setActiveChannel(item.key); setPinOpen(false) }} forum={item.forum}>
                        {item.label}
                      </ChannelItem>
                    ))}
                  </ChannelGroup>
                ))}
              </div>
            </div>

            {/* Main Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#313338', position: 'relative', overflow: 'hidden' }}>
              <div style={{ height: 48, borderBottom: '1px solid #1f2023', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', zIndex: 5, flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: '#f2f3f5', fontSize: 14 }}>
                  <span style={{ marginRight: 8, color: '#80848e', display: 'flex', alignItems: 'center' }}>
                    {isForumChannel ? <ForumIcon size={18} /> : <span style={{ fontSize: 18 }}>#</span>}
                  </span>
                  {activeLabel}
                </div>
                {hasPins && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, position: 'relative' }}>
                    {showHint && (
                      <span style={{ fontSize: 13, color: '#fee75c', lineHeight: 1, animation: 'ds-arrow 1s ease-in-out infinite' }}>←</span>
                    )}
                    <div style={{ position: 'relative', display: 'flex' }}>
                      {showHint && (
                        <span style={{ position: 'absolute', inset: 0, borderRadius: 4, border: '2px solid #fee75c', animation: 'ds-ping 1.4s ease-out infinite', pointerEvents: 'none' }} />
                      )}
                      <button
                        ref={pinBtnRef}
                        onClick={(e) => { e.stopPropagation(); setPinOpen(v => !v) }}
                        title="查看已釘選的訊息"
                        aria-label="查看已釘選的訊息"
                        aria-expanded={pinOpen}
                        style={{
                          background: 'none', border: 'none', cursor: 'pointer', padding: 6, borderRadius: 4,
                          color: pinOpen ? '#fee75c' : (showHint ? '#fee75c' : '#b5bac1'),
                          backgroundColor: pinOpen ? '#35373c' : 'transparent',
                          transition: 'all 0.2s', display: 'flex'
                        }}
                      >
                        <PinIcon size={22} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {isForumChannel ? (
                <ForumView key={activeChannel}
                  threads={activeChannel === 'lang' ? langForumThreads : reviewForumThreads}
                  showNotice={activeChannel === 'review'} />
              ) : textChannels[activeChannel] ? (
                <TextChannelView channelKey={activeChannel} />
              ) : (
                <div ref={chatScrollerRef} style={{ flex: 1, padding: 20, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {activeChannel === 'card' ? (
                    cardSections.map((section) => (
                      <div key={section.id}>
                        <SectionHeader title={section.title} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                          {section.messages.map((msg) => (
                            <MessageCard key={msg.id} id={msg.id} title={msg.title} content={msg.content} />
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, color: '#6d6f78', fontSize: 14, gap: 8 }}>
                      <span style={{ fontSize: 28 }}>📁</span>
                      <span>此頻道內容未納入展示範圍</span>
                    </div>
                  )}
                </div>
              )}

              {DesktopPinPanel}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
