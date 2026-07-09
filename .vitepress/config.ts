import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '极客社区开发文档',
  description:
    '这是一个多端的社区项目,覆盖PC端、Android、IOS、鸿蒙、小程序等端侧,以及Admin后台和后端服务',
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '项目介绍', link: '/V1/project/index.md' },
      { text: 'PC端', link: '/V1/pc/index.md' },
      { text: '后端', link: 'V1/api/index.md' },
      { text: '中后台', link: '/V1/admin/index.md' },
      { text: 'Flutter', link: '/V1/flutter/index.md' },
      { text: '小程序', link: '/V1/uniappx/index.md' },
      { text: '鸿蒙', link: '/V1/harmony/index.md' },
      { text: '部署上线', link: '/V1/deploy/index.md' },
    ],
    // 左侧，侧边栏
    sidebar: {
      // 当用户位于 `V1/project/` 目录时，会显示此侧边栏
      'V1/project/': [
        {
          text: '项目简介',
          items: [
            { text: '项目简介', link: '/V1/project/' },
            { text: '快速开始', link: '/V1/project/getting-started' },
          ],
        },
      ],
      'V1/pc/': [
        {
          text: 'PC端',
          items: [{ text: '项目简介', link: '/V1/pc/' }],
        },
      ],
      'V1/api/': [
        {
          text: '后端',
          items: [{ text: '项目简介', link: '/V1/api/' }],
        },
      ],
      'V1/admin/': [
        {
          text: '中后台',
          items: [{ text: '项目简介', link: '/V1/admin/' }],
        },
      ],
      'V1/flutter/': [
        {
          text: 'Flutter',
          items: [{ text: '项目简介', link: '/V1/flutter/' }],
        },
      ],
      'V1/uniappx/': [
        {
          text: '小程序',
          items: [{ text: '项目简介', link: '/V1/uniappx/' }],
        },
      ],
      'V1/harmony/': [
        {
          text: '鸿蒙',
          items: [{ text: '项目简介', link: '/V1/harmony/' }],
        },
      ],
      'V1/deploy/': [
        {
          text: '部署上线',
          items: [{ text: '项目简介', link: '/V1/deploy/' }],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Youzi177',
    },
  },
});
