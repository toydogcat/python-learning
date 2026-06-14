import { defineConfig } from 'vitepress'

export default defineConfig({
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
        text: '課程內容',
        items: [
          { text: '關於本課程', link: '/guide/' },
          { text: '2.1 Hello, World!', link: '/guide/section-2-1' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/toydogcat/python-learning' }
    ]
  }
})
