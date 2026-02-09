---
title: 快速开始
order: 2
---
# 快速开始

此处是文档总目录

## 内容

查询开服指南。

<script setup>
import ApiCards from '../.vitepress/theme/components/ApiCards.vue'

const myCards = [
  { 
    title: 'Bedrock开服指南', 
    desc: '了解如何开一个基岩版服务器', 
    link: 'bedrock/',
    type: 'group'
  },
  { 
    title: 'Java版开服指南', 
    desc: '了解如何开一个Java版服务器', 
    link: 'java/',
    type: 'group'
  },
  { 
    title: 'AusJava维护指南', 
    desc: '了解如何维护AusJava服务器-AusJava管理组文档', 
    link: 'aus/',
    type: 'group'
  }
]
</script>

<ApiCards :items="myCards" />