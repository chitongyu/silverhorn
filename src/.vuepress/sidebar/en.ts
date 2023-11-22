import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "content fo vue",
      icon: "book",
      prefix: "vue/",
      children: "structure",
    },
  ],
});
