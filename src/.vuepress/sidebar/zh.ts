import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "vue相关",
      icon: "book",
      prefix: "vue/",
      children: "structure",
    },
  ],
});
