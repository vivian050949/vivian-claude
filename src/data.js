export const contact = {
  email: "vivian050949@gmail.com",
  linkedin: "https://www.linkedin.com/in/vivianchen61003",
}

export const personalData = {
  hero: {
    name: "Vivian Chen",
    title: "旅宿業資深主管 / 數位轉型推動者 / 尋求 PM 職位",
    bio: "10 年以上跨領域實戰經驗，從旅館第一線主任逐步累積流程優化與數位工具導入經驗。擅長整合現場需求、跨部門協作與營運流程，並持續透過 AI 與自主學習強化問題解決能力。"
  },
  education: [
    {
      school: "臺北城市科技大學",
      department: "五專部　行銷與流通管理學系",
      period: "2012 – 2017"
    }
  ],
  kpis: [
    { value: "10+", unit: "年", label: "跨領域經驗" },
    { value: "22", unit: "歲", label: "破例晉升管理職" },
    { value: "0", unit: "成本", label: "導入數位轉型" }
  ],
  traits: [
    { title: "系統化思維與流程複製", desc: "擅長將混亂的現場痛點梳理為標準化 SOP，推動數位工具落地，建立可規模化、可複製的營運流程。" },
    { title: "高壓環境下的決策直覺", desc: "具備第一線危機處理能力，在資源有限與時間緊迫的管理現況下，做出精準且具商業全局觀的決策。" },
    { title: "有溫度的柔性管理營運", desc: "以同理心出發，兼顧跨部門協作的和諧度與高標準的顧客體驗優化，讓營運既有秩序、又有品牌溫度。" }
  ],
  cases: [
    {
      title: "零預算流程重構｜Discord 數位知識管理系統",
      isBulletProblem: true,
      problem: [
        "資訊查找時間成本高",
        "新人培訓高度依賴資深員工",
        "紙本浪費、不利永續",
        "跨班交接易產生遺漏風險",
        "知識無法有效沉澱與複製"
      ],
      isBulletAction: true,
      action: [
        "以 Discord 建立集團數位化 SOP 與交接系統（頻道分類工作）",
        "將紙本流程分類且模組化為 Markdown 圖文知識庫",
        "建立超連結儀表板（釘選功能設置目錄），提升資訊查找效率",
        "成功推廣至 5 間分館，成為標準化流程"
      ],
      isBulletResult: true,
      result: [
        "年減少紙張使用 900+ 張",
        "問題查找效率提升 50%",
        "新人培訓效率提升 30%",
        "降低跨班交接遺漏風險",
        "完成集團規模化導入"
      ],
      kpi: "0 成本導入 / 100% 雲端知識無紙化",
      skills: ["SOP 建立", "流程優化", "數位工具導入", "知識管理"]
    },
    {
      title: "春節熱水故障｜0 客訴應變",
      isBulletProblem: true,
      problem: [
        "春節晚間熱水系統突發故障",
        "無外部維修資源可調度",
        "多間客房受影響，客訴風險高"
      ],
      isBulletAction: true,
      action: [
        "啟動分支決策與跨館備援機制",
        "調度團隊、水塔檢查與現場支援",
        "規劃輪流使用與清潔分流",
        "主動溝通替代方案穩定情緒"
      ],
      isBulletResult: true,
      result: [
        "全程 0 客訴結案",
        "危機流程轉化為 SOP",
        "建立可複製應變模式"
      ],
      kpi: "0 客訴 / 危機應變 SOP 建立",
      skills: ["危機應變", "跨部門協調", "現場決策", "成本意識"]
    },
    {
      title: "客訴翻轉｜守住 $6 萬+ 全額訂單",
      isBulletProblem: true,
      problem: [
        "長住 15 天家庭房，第二天即提出全額退費要求",
        "起因：廁所燈無分區開關，夜間如廁影響家人睡眠",
        "訂單屬不可取消型，潛在營收損失逾 6 萬元"
      ],
      isBulletAction: true,
      action: [
        "精準定位痛點：睡眠品質與空間隱私需求",
        "提出「大房升拆兩間獨立套房」無償換房方案",
        "臨時購置燈條解決照明問題，將損失降至零成本"
      ],
      isBulletResult: true,
      result: [
        "完整保留 15 天全額訂單（守住 $6 萬+ 營收）",
        "客訴危機翻轉為驚喜顧客體驗",
        "成功引導加入官方 Line，建立長期回頭客關係"
      ],
      kpi: "守住 100% 營收 (免損$6萬+) / 轉化長期客戶",
      skills: ["客訴處理", "營運管理", "談判協商", "顧客關係經營"]
    }
  ],
  timeline: [
    { year: "2015–2017", role: "門市工讀與現場服務經驗", company: "衣皓實業有限公司（ECSTASY）", desc: "從零售服務培養顧客敏銳度、責任感與獨立應變能力。", icon: "ShoppingBag" },
    { year: "2017", role: "旅宿業前臺人員", company: "玫瑰精品旅館股份有限公司", desc: "投入精品旅館第一線營運，接觸高壓現場管理與顧客體驗。", icon: "Building2" },
    { year: "2019", role: "22 歲成為最年輕主管", company: "玫瑰精品旅館股份有限公司", desc: "因現場執行與管理能力快速晉升，負責 9–12 人跨世代團隊管理與全日營運。", icon: "Crown", featured: true, metrics: [
      { icon: "Users", label: "管理 9–12 人", sub: "跨世代團隊" },
      { icon: "Clock", label: "負責全日營運", sub: "與現場決策" },
      { icon: "TrendingUp", label: "快速晉升", sub: "展現領導與執行力" }
    ]},
    { year: "2019 起", role: "跨領域視角建立", company: "台名保險經紀人股份有限公司", desc: "主動進修保險相關知識與證照，培養需求分析、條款理解與精準溝通能力，並延伸應用於旅館行政與訂房審核，提升作業準確性與細節管控能力。", icon: "Shield" },
    { year: "2022", role: "主導轉型數位化與 SOP 思維", company: "玫瑰精品旅館股份有限公司", desc: "導入 Discord 數位 SOP、流程標準化與知識管理架構，推動跨館作業一致化。", icon: "FileText", tags: ["0 成本導入", "5 間分館應用", "流程效率大幅提升"] },
    { year: "2025", role: "榮獲卓越員工與團隊 MVP", company: "玫瑰精品旅館股份有限公司", desc: "於旅宿業首屆頒獎典禮中，獲得卓越員工與團隊獎肯定。", icon: "Award", featured: true, bullets: [
      "首屆卓越員工獎（全公司僅兩名）",
      "首屆團隊 MVP 獎（該團隊主管）"
    ]},
    { year: "2026 — NOW", role: "轉向 PM 職涯發展", desc: "持續精進專案管理、數位工具與營運優化思維，將第一線經驗轉化為系統化價值。近期可配合到職。", icon: "Compass", featured: true, tags: ["專案管理", "數位工具", "營運優化", "近期可配合到職"] }
  ],
  skills: [
    { name: "營運管理", level: 95 },
    { name: "客訴處理", level: 92 },
    { name: "流程優化", level: 90 },
    { name: "跨部門溝通", level: 90 },
    { name: "SOP 建立", level: 88 },
    { name: "團隊管理", level: 88 },
    { name: "危機應變", level: 85 },
    { name: "數據分析", level: 75 }
  ],
  tools: [
    { name: "Google Workspace", level: 90 },
    { name: "Discord", level: 80 },
    { name: "Word", level: 80 },
    { name: "PowerPoint", level: 80 },
    { name: "ChatGPT / Gemini", level: 78 },
    { name: "Canva", level: 75 },
    { name: "Excel", level: 70 },
    { name: "Notion", level: 50 },
  ],
  languages: [
    { name: "中文（母語）", level: 100 },
    { name: "英文（基礎溝通）", level: 60, cert: "TOEIC 多益 560 分" },
    { name: "臺語（中等）", level: 50 },
    { name: "廣東話（生活溝通）", level: 40 },
  ],
  certifications: [
    {
      category: "旅館與服務管理類",
      items: [
        "CHM 旅館管理專業人員 銀階認證",
        "職訓局－門市服務技術士 乙級",
        "職訓局－門市服務技術士 丙級"
      ]
    },
    {
      category: "資訊與辦公室應用",
      items: [
        "職訓局－電腦軟體應用 丙級",
        "TQC-OA Excel 實用級",
        "TQC-OA PowerPoint 進階級"
      ]
    },
    {
      category: "保險與金融類",
      items: [
        "人身保險業務員資格證",
        "產物保險業務員資格證",
        "外幣收付之非投資型人身保險資格證照",
        "金融市場常識與職業道德"
      ]
    }
  ]
}

export const beyondWorkData = [
  {
    category: "活動籌辦與主持",
    image: "/image_4fdc07.jpg",
    objectPosition: "center 10%",
    items: [
      {
        title: "數次｜任職公司尾牙・主要籌辦與主持",
        desc: "統籌規劃年度尾牙，主導整體流程設計與跨部門人員分工，有效優化活動執行效率並營造團隊核心凝聚力。"
      },
      {
        title: "2021｜旅宿業開幕典禮・司儀與工作人員",
        desc: "擔任典禮大會司儀，協助核心活動流程推動與重要來賓接待，展現高標準的專業口條、臨場應變與高壓控場能力。"
      },
      {
        title: "2021｜新北市 3490 地區扶輪社授證典禮・司儀與美編",
        desc: "負責行前活動背板與手冊設計；現場司儀。主要服務年長且資深來賓，深植跨世代溝通技巧與外部高階協調力。"
      },
      {
        title: "2020｜金融之星暨臺灣財務策劃師頒獎典禮・頒獎大使",
        desc: "協助高規格頒獎流程推進與貴賓服務，於大型公開現場強化細節管控，維持卓越的專業服務品質。"
      }
    ]
  },
  {
    category: "在校時期經歷",
    image: "/image_4fdc2b.jpg",
    items: [
      {
        title: "2017｜大專優秀青年・獲獎人",
        desc: "榮獲全國甄選表彰（每校僅推薦 1 名優秀代表），肯定其在公共參與、社會服務與校園領導上的傑出表現。"
      },
      {
        title: "2016｜臺北市青年節籌備委員會・活動長",
        desc: "負責大型頒獎典禮現場演出編排，參與人數 200+ 以上之大型跨校活動。"
      },
      {
        title: "2015與2016｜臺北城市科技大學・學生會會長 / 畢聯會會長",
        desc: "打破歷屆傳統，成為首位由五專生當選之學生會長。任內親自策劃並執行 20+ 場大小型校園活動（含迎新、節慶活動、跨校大型公益活動等）。"
      }
    ]
  }
]