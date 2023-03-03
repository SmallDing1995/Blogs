import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Ding的博文",
  description: "记录有趣的生活",
  theme: recoTheme({
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: true,
    style: "@vuepress-reco/style-default",
    logo: "/head.png",
    author: "Ding",
    authorAvatar: "/head.png",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    navbar: [
      // { text: "主页", link: "/" },
      // { text: "生活记录", link: "/categories/shenghuojilu/" },
      // { text: "标签", link: "/tags/tag1/1/" },
      // {
      //   text: "Docs",
      //   children: [
      //     { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
      //   ],
      // },
    ],
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'GC3UYG29vZWWKbjMVe0L82Y4-gzGzoHsz',
        appKey: 'DXrncqa6XybOFtsE6cfEtQmx',
        hideComments: false, // 全局隐藏评论，默认 false,
        placeholder: '填写邮箱可以收到回复提醒哦！',
        visitor: true,
        notify: true
      }
    },
    //valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'GC3UYG29vZWWKbjMVe0L82Y4-gzGzoHsz',
    //   appKey: 'DXrncqa6XybOFtsE6cfEtQmx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   hideComments: false // 隐藏评论
    // },
  }),
  // debug: true,
});
