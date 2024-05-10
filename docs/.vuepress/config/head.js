export default [
    ['link', { rel: 'icon', href: 'https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202306041727768.ico' }],
    ['script', { src: '//at.alicdn.com/t/c/font_3645957_ojikbtjol3l.js' }],//字体图标库

    // 在 Chrome 85 版本中，为了保护用户的隐私，默认的 Referrer Policy 则变成了 strict-origin-when-cross-origin。
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    [
        'meta',
        {
            name: 'keywords',
            content:
                '梦寐的博客乐园'
        }
    ]
]
