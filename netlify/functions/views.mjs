import { getStore } from '@netlify/blobs'

export default async () => {
  try {
    const store = getStore('page-views')
    const today = new Date().toISOString().split('T')[0]

    const [totalStr, dailyStr] = await Promise.all([
      store.get('total'),
      store.get(`daily:${today}`),
    ])

    const total = parseInt(totalStr ?? '0') + 1
    const daily = parseInt(dailyStr ?? '0') + 1

    await Promise.all([
      store.set('total', String(total)),
      store.set(`daily:${today}`, String(daily)),
    ])

    return Response.json({ total, daily })
  } catch {
    return Response.json({ total: null, daily: null })
  }
}

export const config = {
  path: '/api/views',
}
