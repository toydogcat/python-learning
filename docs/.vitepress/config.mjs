import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/python-learning/',
  lang: 'zh-TW',
  title: "Python 基礎教學",
  description: "基於 Python Essentials 1 的繁體中文 Python 教學網站",
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '教學內容', link: '/guide/' }
    ],
    sidebar: [
      {
        text: '模組 1：程式設計簡介',
        items: [
          { text: '關於本課程', link: '/guide/' },
          { text: '1.1 程式設計簡介', link: '/guide/section-1-1' },
          { text: '1.2 Python 簡介', link: '/guide/section-1-2' }
        ]
      },
      {
        text: '模組 2：Python 資料型別與變數',
        items: [
          { text: '2.1 Hello, World!', link: '/guide/section-2-1' },
          { text: '2.2 Python 字面值', link: '/guide/section-2-2' },
          { text: '2.3 運算子', link: '/guide/section-2-3' },
          { text: '2.4 變數', link: '/guide/section-2-4' },
          { text: '2.5 註解', link: '/guide/section-2-5' },
          { text: '2.6 與使用者互動', link: '/guide/section-2-6' }
        ]
      },
      {
        text: '模組 3：流程控制與列表',
        items: [
          { text: '3.1 條件判斷', link: '/guide/section-3-1' },
          { text: '3.2 迴圈', link: '/guide/section-3-2' },
          { text: '3.3 邏輯與位元運算', link: '/guide/section-3-3' },
          { text: '3.4 列表 (Lists)', link: '/guide/section-3-4' },
          { text: '3.5 泡沫排序法', link: '/guide/section-3-5' },
          { text: '3.6 列表進階操作', link: '/guide/section-3-6' },
          { text: '3.7 列表的高階應用', link: '/guide/section-3-7' }
        ]
      },
      {
        text: '模組 4：函式與資料結構',
        items: [
          { text: '4.1 函式簡介', link: '/guide/section-4-1' },
          { text: '4.2 函式參數', link: '/guide/section-4-2' },
          { text: '4.3 函式返回值', link: '/guide/section-4-3' },
          { text: '4.4 作用域 (Scopes)', link: '/guide/section-4-4' },
          { text: '4.5 遞迴 (Recursion)', link: '/guide/section-4-5' },
          { text: '4.6 元組與字典', link: '/guide/section-4-6' },
          { text: '4.7 例外處理', link: '/guide/section-4-7' },
          { text: '認證與下一步', link: '/guide/certification' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/toydogcat/python-learning' }
    ]
  }
})
