---
title: 通用Java服务器维护指南
order: 1
---
# 通用Java服务器维护指南

提供给AusJava服务器管理组成员查阅。
同时也作为通用服务器维护指南。

<script setup>
import ApiCards from '../../.vitepress/theme/components/ApiCards.vue'

const myCards = [
  { 
    title: '插件管理', 
    desc: '如何查找、选择和安装插件', 
    link: '/guide/aus/plugin',
    type: 'page'
  },
  { 
    title: '崩溃排查', 
    desc: '服务器崩溃后的故障诊断', 
    link: '/guide/aus/crash',
    type: 'page'
  }
]
</script>

<ApiCards :items="myCards" />