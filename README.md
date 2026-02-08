# AusDoc

AusJava 服务器的官方文档站点，使用 VitePress 构建。

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发

启动本地开发服务器：

```bash
npm run docs:dev
```

访问 `http://localhost:5173` 查看文档站点。

### 构建

构建生产版本：

```bash
npm run docs:build
```

构建后的文件将输出到 `docs/.vitepress/dist` 目录。

### 预览

预览生产构建：

```bash
npm run docs:preview
```

## 项目结构

```
.
├── docs/
│   ├── .vitepress/
│   │   └── config.js          # VitePress 配置文件
│   ├── guide/                 # 指南文档
│   │   ├── index.md           # 介绍
│   │   ├── getting-started.md # 快速开始
│   │   ├── configuration.md   # 配置说明
│   │   └── api.md             # API 参考
│   ├── about.md               # 关于页面
│   └── index.md               # 首页
├── package.json
└── README.md
```

## 编写文档

### 添加新页面

1. 在 `docs/` 目录下创建新的 `.md` 文件
2. 在 `docs/.vitepress/config.js` 中添加导航或侧边栏链接

### Markdown 扩展

VitePress 支持多种 Markdown 扩展：

- 代码块语法高亮
- 自定义容器（提示、警告等）
- 表格
- Emoji
- 目录
- 更多...

查看 [VitePress 文档](https://vitepress.dev/guide/markdown) 了解详情。

## 部署

### GitHub Pages

在 `deploy.yml` 中已配置 GitHub Actions 自动部署。推送到主分支后会自动构建并部署到 GitHub Pages。

### 其他平台

- **Vercel**: 导入项目，构建命令 `npm run docs:build`，输出目录 `docs/.vitepress/dist`
- **Netlify**: 同上配置
- **自托管**: 构建后将 `docs/.vitepress/dist` 目录部署到你的服务器

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
