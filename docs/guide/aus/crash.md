---
title: 崩溃排查
order: 3
---

# 崩溃排查指南

服务器崩溃后如何快速定位和解决问题的完整指南。

## 崩溃类型

### 常见崩溃原因

- **内存不足** - 服务器内存耗尽
- **插件冲突** - 插件之间不兼容
- **版本不兼容** - 插件与服务器版本不匹配
- **系统资源** - CPU、磁盘空间不足

## 信息收集

### 1. 查看崩溃报告

服务器崩溃后，会在 `crash-reports/` 文件夹中生成崩溃报告。

```bash
# 查看崩溃报告目录
cd crash-reports/
```

**文件命名格式**：
```
crash-xxxx-xx-xx_xx-xx-xx-server.txt
```

文件名包含崩溃时间，根据时间确定对应的崩溃报告。

**关键信息**：
- **错误类型**：如 `OutOfMemoryError`, `NullPointerException`
- **堆栈跟踪**：显示错误发生的位置
- **插件列表**：崩溃时加载的所有插件

### 2. 查看服务器日志

日志文件位于 `logs/` 文件夹：

```bash
logs/
├── latest.log
├── xx-xx-xx-x.log.gz 
└── ...
```

其中，latest.log为当前日志，被压缩的即为崩溃前日志，时间最新的那份即为服务器崩溃前最新日志。

## 崩溃分析

### 内存不足 (OutOfMemoryError)

**症状**：
- 崩溃报告显示 `java.lang.OutOfMemoryError`（或无崩溃报告）
- 日志中没有明显错误，突然停止

**解决方案**：

1. **增加内存分配**（或者考虑升级服务器配置）
   ```bash
   java -Xms4G -Xmx4G -jar server.jar
   ```

2. **优化配置**
   - 降低视距：`view-distance=8`
   - 减少实体数量
   - 使用 ClearLag 清理掉落物

3. **检查内存泄漏**
   ```bash
   # 使用 Spark 分析
   /spark heapsummary
   ```

### 插件冲突

**症状**：
- 崩溃报告中提到特定插件
- 日志显示插件加载错误

**解决方案**：

1. **逐个排查**
   ```bash
   # 禁用一半插件测试（二分法）
   # 缩小范围找出问题插件
   ```

2. **检查依赖**
   - 确保所需依赖已安装
   - 检查插件版本兼容性

3. **查看插件日志**
   ```bash
   # 某些插件有独立日志
   cat plugins/PluginName/logs/latest.log
   ```

### 配置错误

**症状**：
- 启动时立即崩溃
- 日志显示配置文件解析错误

**解决方案**：

1. **检查 YAML 格式**
   ```yaml
   # 错误示例（缩进错误）
   settings:
   option: value
   
   # 正确示例
   settings:
     option: value
   ```

2. **使用在线验证器**
   - [YAML Lint](http://www.yamllint.com/)
   - 检查语法错误

3. **恢复默认配置**
   ```bash
   # 备份当前配置
   cp config.yml config.yml.backup
   
   # 删除配置让服务器重新生成
   rm config.yml
   ```

## 故障排查流程

### 快速诊断

1. **查看崩溃报告**
   - 确定错误类型
   - 记录关键信息

2. **检查最近更改**
   - 新安装的插件
   - 配置修改
   - 服务器更新

3. **搜索错误信息**
   - Google 搜索错误信息
   - 查看插件论坛
   - 搜索 GitHub Issues

4. **尝试解决方案**
   - 恢复更改
   - 禁用问题插件

### 额外情况

如果快速诊断无效：
<del>大喊 Liyao!!!!!!!!</del>

发送错误到相关插件 Github Issue 或 到论坛发送错误信息，借助网络获取答案。
不要坐以待毙，先禁用导致错误的插件，回滚更新，确保服务器能跑。

## 工具推荐

### 日志分析

- **[MCLogs](https://mclo.gs/)** - 在线日志分享和分析
- **[Spark](https://spark.lucko.me/)** - 性能分析工具

### 配置验证

- **[YAML Lint](http://www.yamllint.com/)** - YAML 语法检查
- **[JSON Validator](https://jsonlint.com/)** - JSON 语法检查

## 获取帮助

### 提供信息

寻求帮助时，请提供详细信息，让别人了解你的需求，而不是随口一说，连个日志都没有，让别人算一卦给你。
建议提供信息：

1. **服务器信息**
   - 服务器核心
   - Java 版本
   - 操作系统

2. **崩溃报告**
   - 完整的崩溃报告

3. **插件列表**
   ```bash
   /plugins
   ```