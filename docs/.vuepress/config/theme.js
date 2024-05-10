import navbar from "./navbar";
import sidebar from "./sidebar";
// import neoTheme from '../theme-neo/lib/node/index'
import neoTheme from "vuepress-theme-neo";

export default neoTheme({
  // 默认主题配置项
  navbar,
  sidebar,
  logo: "https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202306041724989.jpg", //网站头像
  contributors: false,
  docsDir: "docs",
  docsBranch: "master",
  docsRepo: "https://gitee.com/shi-longwei/blog.git",//gitee地址
  editLinkPattern: ":repo/edit/:branch/:path",
  sidebarDepth: 0,
  // 主题配置项
  bolgCreateAt: "2023-6-04",//网站运行时间
  category: true,//是否打开分类功能。
  tag: true,//是否打开标签功能。
  column: true,//是否打开专题功能。
  archive: true,//是否打开归档功能。
  //左1
  blog: {
    name: "梦寐",
    intro: "https://github.com/shizhiweid", //跳转链接
    roundAvatar: true, //头像是否为圆形
    avatar: "https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202306041724989.jpg", //left头像地址
    description: "欢迎来到梦寐博客。",
  },
  // 文章列表中作者信息
  author: {
    name: "梦寐",
    url: "https://blog.csdn.net/qq_68609773?spm=1000.2115.3001.5343",
  },
  // 文章页面中风格和背景图
  contentStyle: "style1",
  contentBackground: "#fff",
  contentImages: [],

  // header information
  homeHeaderInfo: {
    name: "梦寐",
    avatar: "https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202306041724989.jpg", //头像地址
    description: "欢迎来到梦寐的博客",
  },
  homeHeaderImages: [
    {
      path: "https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202309182038682.webp",
      mask: "rgba(65, 60, 55, .2)",
    },
    {
      path: "https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202309182039636.webp",
      mask: "rgba(65, 60, 55, .2)",
    },
    {
      path: "https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202309182039134.webp",
      mask: "rgba(65, 60, 55, .2)",
    },
    {
      path: "https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202309182039958.webp",
      mask: "rgba(65, 60, 55, .2)",
    },
    {
      path: "https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202309182040934.webp",
      mask: "rgba(65, 60, 55, .2)",
    },

    {
      path: "https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202309182040047.webp",
      mask: "rgba(65, 60, 55, .2)",
    },
    {
      path: "https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202309182041114.webp",
      mask: "rgba(65, 60, 55, .2)",
    },

  ],
  // header on home page
});
