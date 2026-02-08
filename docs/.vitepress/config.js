import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ChineseLiyao/',
  title: 'AusDoc',
  description: 'AusJava 服务器文档站点',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '介绍', link: '/guide/' },
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChineseLiyao/chineseliyao.github.io' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present AusJava'
    }
  }
})