import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/zh/vue/",
    children: [{ text: "源码解析", icon: "pen-to-square", link: "part1" }],
  },
  {
    text: "VuePress2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
