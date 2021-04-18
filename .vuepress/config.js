module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '夜阑星空基础模组整合包帮助文档',
      description: '夜阑星空基础模组整合包帮助文档'
    }
    
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
  ],
  plugins: [
    '@vuepress/pwa', 
    {
    serviceWorker: true,
    updatePopup: true
    },
    '@vuepress/search',{
      search: true, //默认false
      searchMaxSuggestions: 10 // 默认是5
  }
],
  base:'/',
  themeConfig : {
    repo: 'luluxiaoyu/ylxkpack-help-new',
    repoLabel: 'Github',
    editLinks: true,
    smoothScroll: true,
    logo: '/logo.png',
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最后更新时间：',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav : [
          { text: '夜阑星空-Minecraft', link: 'https://www.nstar.xyz' },
          { text: 'MCBBS原贴', link: 'https://www.mcbbs.net/thread-1025346-1-1.html' },
          { text: '加入QQ群', link: 'https://jq.qq.com/?_wv=1027&k=6aCFUPYh' },
          {
            text: '下载整合包',
            ariaLabel: '下载整合包',
            items: [
              {
                text: '自建网盘',
                items: [
                  {
                    text: '国际路线',
                    link: 'https://cdx.dnxshare.cn/zj1/'
                  },
                  {
                    text: 'Cloudflare中转路线',
                    link: 'https://cdx.dnxshare.cn/zj3/'
                  },
                  {
                    text: '国内路线',
                    link: 'https://cdx.dnxshare.cn/zj2/'
                  }
                ]
              },
              {
                text: '百度网盘',
                items: [
                  {
                    text: '百度网盘-提取码：mjfq',
                    link: 'https://cdx.dnxshare.cn/bdpan/'
                  }
                ]
              }
            ]
          },
      ],
        sidebarDepth : 2,
        sidebar: [
          {
            title: '简介',   // 必要的
            path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/'
            ]
          },
          {
            title: '下载和使用',   // 必要的
            path: '/use/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/use/'
            ]
          } ,
          {
            title: '模组使用-Fabric',   // 必要的
            path: '/mod/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/mod/',
              '/mod/voxelmap',
              '/mod/brightness',
              '/mod/dig',
              '/mod/hud',
              '/mod/zoom'
            ]
          },
          {
            title: '模组使用-Forge',   // 必要的
            path: '/mod/README2',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/mod/README2',
              '/mod/voxelmap'
            ]
          }
        ]
      }
  }
}
}


 