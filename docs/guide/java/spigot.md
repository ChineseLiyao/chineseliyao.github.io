---
title: Spigot核心开服指南
order: 2
---

# Spigot 核心开服指南

Spigot 是 Minecraft Java 版最流行的服务器核心之一，以其高性能和丰富的插件生态系统而闻名。它是 CraftBukkit 的优化版本，为服务器管理员提供了更好的性能和更多的配置选项。

## 什么是 Spigot？

Spigot 是一个高性能的 Minecraft 服务器软件，基于 CraftBukkit 开发。它提供了更好的性能优化、更多的配置选项，并且完全兼容 Bukkit 插件。

## 开服方法

### 环境要求
- Java 17 或更高版本（Minecraft 1.18+）
- Java 8 或更高版本（Minecraft 1.17 及以下）

检查 Java 版本：
```bash
java -version
```

### 下载 Spigot

#### 直接下载（非官方）
访问 [GetBukkit](https://getbukkit.org/download/spigot) 下载预编译版本。

### 首次启动

使用命令启动服务器。其中`nogui`代表不启用图形化界面，你可以随时更改此项。
其中`-Xms2G -Xmx2G`分别代表分配给 JVM 的最小和最大内存大小。

```bash
java -Xms2G -Xmx2G -jar spigot-1.20.4.jar nogui
```

首次启动会生成 `eula.txt` 文件。

### 同意 EULA

编辑 `eula.txt`，将 `eula=false` 改为 `eula=true`。

### 编辑配置

编辑 `server.properties` 文件：

> 常用配置示例
```properties
# 服务器端口
server-port=25565

# 最大玩家数
max-players=20

# 游戏模式 (survival, creative, adventure, spectator)
gamemode=survival

# 难度 (peaceful, easy, normal, hard)
difficulty=normal

# 在线模式（正版验证）
online-mode=true

# 服务器描述
motd=A Minecraft Server
```

### 再次启动服务器

```bash
java -Xms2G -Xmx2G -jar spigot-1.20.4.jar nogui
```

### 加入服务器

启动服务器后，即可加入服务器游玩！
默认运行在端口 25565 上。

## 性能优化

### 推荐启动参数

使用 Aikar's Flags 优化 JVM 性能：

```bash
java -Xms4G -Xmx4G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -jar spigot-1.20.4.jar nogui
```

## 插件安装

将插件 `.jar` 文件放入 `plugins/` 目录，然后重启服务器或使用 `/reload` 命令。
> 警告！ 如果非必要，永远不要使用/reload，这会导致严重的内存泄漏！

## 社区支持

Spigot 拥有活跃的社区和丰富的文档资源，你可以在 [Spigot 官方网站](https://www.spigotmc.org/) 和论坛中找到更多帮助和支持。
你可以从 [SpigotMC 资源](https://www.spigotmc.org/resources/) 内找到 Spigot 的插件。
