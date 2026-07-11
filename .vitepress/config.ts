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
      {
        text: '项目介绍',
        link: '/V1/project/',
        activeMatch: '^/V1/project/',
      },
      {
        text: 'PC端',
        link: '/V1/pc/index.md',
        activeMatch: '^/V1/pc/',
      },
      { text: '后端', link: 'V1/api/index.md', activeMatch: '^/V1/api/' },
      {
        text: '中后台',
        link: '/V1/admin/index.md',
        activeMatch: '^/V1/admin/',
      },
      {
        text: 'Flutter',
        link: '/V1/flutter/index.md',
        activeMatch: '^/V1/flutter/',
      },
      {
        text: '小程序',
        link: '/V1/uniappx/index.md',
        activeMatch: '^/V1/uniappx/',
      },
      {
        text: '鸿蒙',
        link: '/V1/harmony/index.md',
        activeMatch: '^/V1/harmony/',
      },
      {
        text: '部署上线',
        link: '/V1/deploy/index.md',
        activeMatch: '^/V1/deploy/',
      },
    ],
    // 左侧，侧边栏
    sidebar: {
      // 当用户位于 `V1/project/` 目录时，会显示此侧边栏
      'V1/project/': [
        {
          text: '项目简介',
          items: [
            {
              text: '项目简介',
              link: '/V1/project/',
            },
            { text: '快速开始', link: '/V1/project/getting-started' },
          ],
        },
      ],
      'V1/pc/': [
        {
          text: 'PC端',
          items: [
            { text: '项目简介', link: '/V1/pc/' },
            { text: '前端项目初始化', link: '/V1/pc/2026070901' },
            { text: '集成vee-validate', link: '/V1/pc/2026070902' },
            { text: '对接验证码接口', link: '/V1/pc/2026071001' },
          ],
        },
      ],
      'V1/api/': [
        {
          text: '后端',
          items: [
            { text: '项目简介', link: '/V1/api/' },
            { text: '第一个restful应用', link: '/V1/api/2026070903' },
            { text: '验证码接口', link: '/V1/api/2026070904' },
          ],
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
      {
        icon: 'github',
        link: 'https://github.com/youzi177/Geek_Community_Doc',
      },
    ],
    // 搜索
    search: {
      provider: 'local',
    },
    outline: {
      label: '页面导航', // 将文字修改为“页面导航”
      level: [2, 6], // 可选：让右侧目录同时支持 h2-h6 级别的标题（默认只显示 h2 和 h3）
    },
    // aside: false,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Youzi177',
    },
  },
  ignoreDeadLinks: true, // 允许死链接通过构建
});
