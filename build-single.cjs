const fs = require('fs')
const path = require('path')
const dist = './dist'

const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const cssFile = fs.readdirSync(path.join(dist, 'assets')).find(f => f.endsWith('.css'))
const jsFile = fs.readdirSync(path.join(dist, 'assets')).find(f => f.endsWith('.js'))
const css = fs.readFileSync(path.join(dist, 'assets', cssFile), 'utf8')
const js = fs.readFileSync(path.join(dist, 'assets', jsFile), 'utf8')

// Inline images as base64
// avatar.png → avatar.webp（支援透明度且更小）
const imageMap = {
  'avatar.png': { file: 'avatar.png', mime: 'image/png' },
  'image_4fdc07.jpg': { file: 'image_4fdc07.jpg', mime: 'image/jpeg' },
  'image_4fdc2b.jpg': { file: 'image_4fdc2b.jpg', mime: 'image/jpeg' },
  'toilet.webp': { file: 'toilet.webp', mime: 'image/webp' },
}
let jsContent = js
for (const [srcName, { file, mime }] of Object.entries(imageMap)) {
  const imgPath = path.join(dist, file)
  if (fs.existsSync(imgPath)) {
    const b64 = fs.readFileSync(imgPath).toString('base64')
    const dataUrl = 'data:' + mime + ';base64,' + b64
    jsContent = jsContent.split('/' + srcName).join(dataUrl)
  }
}

// 跳脫 </script> 防止 HTML 解析器提早關閉標籤
// 用字串拼接方式分割，確保在 JS 執行時仍還原正確結果
jsContent = jsContent.split('<\\/script>').join('<\\u002fscript>')
jsContent = jsContent.split('</script>').join('<\\u002fscript>')
jsContent = jsContent.split('<!--').join('<\\u0021--')

// 用字串拼接取代 replace，完全避開 $ 替換字元問題
const parts = html.split('<link rel="stylesheet" crossorigin href="' +
  css.length.toString() + '">')  // fallback: 用下面的分割法

// ── 使用 indexOf + slice 做全部替換，不用 String.replace ──

function replaceFirst(str, search, replacement) {
  const idx = str.indexOf(search)
  if (idx === -1) return str
  return str.slice(0, idx) + replacement + str.slice(idx + search.length)
}

function replaceLast(str, search, replacement) {
  const idx = str.lastIndexOf(search)
  if (idx === -1) return str
  return str.slice(0, idx) + replacement + str.slice(idx + search.length)
}

// 找出 CSS link 的確切字串
const cssLinkMatch = html.match(/<link rel="stylesheet" crossorigin href="[^"]+">/)?.[0]
const scriptTagMatch = html.match(/<script type="module" crossorigin src="[^"]+"><\/script>/)?.[0]

let result = html

// 1. 內嵌 CSS
if (cssLinkMatch) {
  result = replaceFirst(result, cssLinkMatch, '<style>' + css + '</style>')
}

// 2. 移除 head 裡的 script 標籤
if (scriptTagMatch) {
  result = replaceFirst(result, scriptTagMatch, '')
}

// 3. 移除 Google Fonts（render-blocking，本地開啟時會卡住）
result = result.replace(/<link[^>]*fonts\.googleapis\.com[^>]*>/g, '')
result = result.replace(/<link[^>]*fonts\.gstatic\.com[^>]*>/g, '')
// 補上系統字型 fallback（取代 Google Fonts 的 Inter / Noto Sans TC）
result = result.replace(
  '</head>',
  '<style>body,*{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","PingFang TC","Microsoft JhengHei",sans-serif!important}</style></head>'
)

// 4. 把 JS 塞到 </body> 前
result = replaceLast(result, '</body>', '<script>' + jsContent + '</script></body>')

fs.writeFileSync('./vivian-chen-portfolio.html', result, 'utf8')
const size = (fs.statSync('./vivian-chen-portfolio.html').size / 1024 / 1024).toFixed(2)
console.log('Done! Size:', size, 'MB')
