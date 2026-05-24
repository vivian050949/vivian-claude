export function PostActionBar() {
  return (
    <div style={{ display: 'flex', gap: 8, marginTop: 12, paddingTop: 12, borderTop: '1px solid #3f4147' }}>
      {[['😊', '反應貼文'], ['🔔', '追蹤']].map(([icon, label]) => (
        <button key={label} onClick={e => e.preventDefault()}
          style={{ background: '#35373c', border: 'none', borderRadius: 6, padding: '5px 10px', color: '#dbdee1', cursor: 'pointer', fontSize: 12.5, display: 'flex', alignItems: 'center', gap: 5 }}>
          {icon} {label}
        </button>
      ))}
      <button onClick={e => e.preventDefault()}
        style={{ background: 'none', border: 'none', padding: '5px 8px', color: '#b5bac1', cursor: 'pointer', fontSize: 15 }}>
        🔗
      </button>
    </div>
  )
}

export function PostAuthorRow({ authorName, time }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
      <div style={{ width: 38, height: 38, borderRadius: '50%', backgroundColor: '#4f545c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
        🐱
      </div>
      <div style={{ paddingTop: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 5 }}>
          <span style={{ fontWeight: 'bold', color: '#f2f3f5', fontSize: 14 }}>{authorName}</span>
          <span style={{ backgroundColor: '#5865f2', color: 'white', fontSize: 10, padding: '1px 5px', borderRadius: 3, fontWeight: 700 }}>原PO</span>
          <span style={{ color: '#6d6f78', fontSize: 12 }}>{time}</span>
        </div>
      </div>
    </div>
  )
}
