module.exports = {
  "title": "温水煮蛙",
  "description": "诺克萨斯，昂扬不灭！",
  "base": "/",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "文档",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/itmahy",
            "icon": "reco-github"
          },
          {
            "text": "mahy_yel@163.com",
            "link": "/",
          }
        ]
      }
    ],
	"sidebarDepth": 1,
    "sidebar": {
		'/docs/': [
			{
		          title: 'Git笔记',
		          collapsable: true,
		          children: [
		            { title: 'Git命令', path: '/docs/git/git学习' }
		          ]
	        },
			{
	          title: 'Docker笔记',
	          collapsable: true,
	          children: [
	            { title: '（一）Docker-安装', path: '/docs/docker/（一）Docker-安装' },
	            { title: '（二）Docker-帮助启动类命令', path: '/docs/docker/（二）Docker-帮助启动类命令' },
	            { title: '（三）Docker-镜像命令', path: '/docs/docker/（三）Docker-镜像命令' },
	            { title: '（四）Docker-容器命令', path: '/docs/docker/（四）Docker-容器命令' }
	          ]
	        }
		]
    },
    "type": "blog",
    // "blogConfig": {
    //   "category": {
    //     "location": 2,
    //     "text": "分类"
    //   },
    //   "tag": {
    //     "location": 3,
    //     "text": "标签"
    //   }
    // },
    "friendLink": [
      {
        "title": "一个年轻人吆",
        "desc": "为了自尊的生存和自我的证明",
        "email": "mahy_yel@163.com",
        "link": "https://blog.csdn.net/news_out?spm=1000.2115.3001.5343"
      },
      {
        "title": "码云",
        "desc": "为了那些逝去的人们",
        "email": "mahy_yel@163.com",
        "link": "https://gitee.com/mahy_yel/"
      },
      
    ],
    // "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "mahy",
    "authorAvatar": "/avatar.png",
    "record": "温水煮蛙",
    "startYear": "2023"
  },
  "markdown": {
    "lineNumbers": true
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  plugins: [
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['haru2','blackCat', 'whiteCat', 'haru1',  'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        messages: {
          welcome: '欢迎来到“温水煮蛙”的博客',
          home: '家的味道，我知道',
          theme: '希望你能喜欢我的其他朋友',
          close: '拜拜哟'
        },
        width: 240,
        height: 352
      }
    ],
  ]
}