# 快速开始

本指南将帮助你快速上手 AusJava 服务器。

## 前置要求

在开始之前，请确保你已经安装：

- Node.js 18 或更高版本
- npm 或 yarn 包管理器

## 安装

```bash
# 克隆项目
git clone https://github.com/yourusername/ausdoc.git

# 进入项目目录
cd ausdoc

# 安装依赖
npm install
```

## 开发

启动本地开发服务器：

```bash
npm run docs:dev
```

VitePress 将在 `http://localhost:5173` 启动一个热重载的开发服务器。

## 构建

构建生产版本：

```bash
npm run docs:build
```

构建后的文件将输出到 `docs/.vitepress/dist` 目录。

## 预览

预览生产构建：

```bash
npm run docs:preview
```

## 下一步

- 了解如何[配置](/guide/configuration)你的文档站点
- 查看[API 参考](/guide/api)文档
