import head from "./config/head";
import plugins from "./config/plugins";
import theme from "./config/theme";
import { defineUserConfig } from "vuepress";
// import fortawesome from "@fortawesome/fontawesome-free"
export default defineUserConfig({
  base: "/blog/",
  // base:'/docs/',
  lang: 'zh-CN',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "梦寐",
      description: "梦寐的博客乐园",
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: '梦寐',
    //   description: 'Vue 驱动的静态网站生成器'
    // }
  },
  head,
  plugins,
  theme,
});
