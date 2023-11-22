import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);
console.log("dirname", __dirname);
export default defineUserConfig({
  base: "/silverhorn/",
  alias: {
    // "@images/": path.resolve(__dirname, ".vuepress/public/assets/images/"), // TODO:暂时无用
  },
  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "我的博客",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  plugins: [
    searchProPlugin({
      // 配置选项
      indexContent: true, // 配置索引正文的内容
      autoSuggestions: true, // 自动提示搜索建议
    }),
  ],
});
