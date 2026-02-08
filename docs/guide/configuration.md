# 配置

了解如何配置你的 VitePress 站点。

## 配置文件

VitePress 的配置文件位于 `docs/.vitepress/config.js`。

## 基本配置

### 站点元数据

```js
export default {
  title: 'AusDoc',
  description: 'AusJava 服务器文档站点',
  base: '/'
}
```

### 主题配置

```js
export default {
  themeConfig: {
    nav: [...],
    sidebar: [...],
    socialLinks: [...]
  }
}
```

## 导航栏

配置顶部导航栏：

```js
nav: [
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide/' },
  { text: '关于', link: '/about' }
]
```

## 侧边栏

配置侧边栏菜单：

```js
sidebar: [
  {
    text: '开始',
    items: [
      { text: '介绍', link: '/guide/' },
      { text: '快速开始', link: '/guide/getting-started' }
    ]
  }
]
```

## 更多配置

查看 [VitePress 官方文档](https://vitepress.dev/reference/site-config) 了解更多配置选项。
