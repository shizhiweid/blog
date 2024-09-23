export default [
    {
        text: '前端',
        // icon: 'neo-renwu',
        link: '/programme/WebFrontEnd/',//默认跳转位置
        activeMatch: '^/programme/'
    },
    // {
    //     text: '知识库',
    //     // icon: 'neo-yule',
    //     link: '/recreation/',
    //     activeMatch: '^/recreation/'
    // },
    // {
    //     text: '社交',
    //     icon: 'neo-shejiao',
    //     link: 'https://github.com/shizhiweid',
    //     activeMatch: '^/socialContact/'
    // },
    {
        text: '个人中心',
        // icon: 'neo-zhusuoyinguanli',
        children: [
            {
                text: 'GitHub',
                link: 'https://github.com/shizhiweid',
            },
            {
                text: 'Gitee',
                link: 'https://gitee.com/shi-longwei',
            },
            {
                text: '博客',
                link: 'https://blog.csdn.net/qq_68609773?spm=1000.2115.3001.5343',
            },

        ]
    },
    // {
    //     text: '影视推荐',
    //     icon: 'neo-yingshi1',
    //     link: '/movies/',
    //     activeMatch: '^/movies/'
    // },
    // {
    //     text: 'about梦寐',
    //     icon: 'neo-bangzhuguanyuwomen',
    //     link: '/about/about1',
    //     activeMatch: '^/about/'
    // },
    // {
    //     text: '索引',
    //     icon: 'neo-zhusuoyinguanli',
    //     children: [
    //         {
    //             text: '标签',
    //             icon: 'neo-biaoqian',
    //             link: '/tags/',
    //             activeMatch: '/tags/'
    //         },
    //         {
    //             text: '归档',
    //             icon: 'neo-nav_zhijieguidangjilu',
    //             link: '/archives/',
    //             activeMatch: '/archives/'
    //         },
    //         {
    //             text: '分类',
    //             icon: 'neo-fenlei2',
    //             link: '/categories/',
    //             activeMatch: '/categories/'
    //         },
    //         {
    //             text: '专栏',
    //             icon: 'neo-manyunbaozhuanlan',
    //             link: '/columns/',
    //             activeMatch: '/columns/'
    //         }
    //     ]
    // }
]
