---
icon: pen-to-square
date: 2023-11-22
category:
  - vue
tag:
  - 解析
---

# 测试项目功能

## 代码组

code-tabs的名称一样就行

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope1
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope1
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope1
```

:::

## 代码演示

::: normal-demo 演示

```html
<h1>VuePress Theme Hope</h1>
<p><span id="very">非常</span>强大!</p>
```

```js
document.querySelector("#very").addEventListener("click", () => {
  alert("非常强大");
});
```

```css
span {
  color: red;
}
```

:::

::: vue-demo Vue 演示 1

```vue
<template>
  <div class="box">
    <code>vuepress-theme-hope</code> is
    <span @click="handler">{{ message }}</span
    >!
  </div>
</template>
<script>
const { ref } = Vue;

export default {
  setup() {
    const message = ref("powerful");

    const handler = () => {
      message.value = "very " + message.value;
    };

    return {
      message,
      handler,
    };
  },
};
</script>
<style>
.box span {
  color: red;
}
</style>
```

:::

## 图片

![图片展示](/assets/images/cover1.jpg =200x )

![图片展示](/assets/images/cover2.jpg =200x )

![图片展示](/assets/images/cover3.jpg =200x )

<img :src="$withBase('/assets/images/cover1.jpg')" alt="foo" width="200">
<img :src="$withBase('/assets/images/cover2.jpg')" alt="foo" width="200">
<img :src="$withBase('/assets/images/cover3.jpg')" alt="foo" width="200">

## Badge

- <Badge text="tip" type="tip" vertical="middle" />
- <Badge text="warning" type="warning" vertical="middle" />
- <Badge text="danger" type="danger" vertical="middle" />
- <Badge text="info" type="info" vertical="middle" />
- <Badge text="note" type="note" vertical="middle" />

## 图标

- 主页图标: <FontIcon icon="home" />

## PDF

<PDF url="//theme-hope-assets.vuejs.press/files/sample.pdf" />

## 任务列表

- [ ] 任务一
- [x] 任务二

## Heading 2

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope1
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope1
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope1
```

:::

::: normal-demo 演示

```html
<h1>VuePress Theme Hope</h1>
<p><span id="very">非常</span>强大!</p>
```

```js
document.querySelector("#very").addEventListener("click", () => {
  alert("非常强大");
});
```

```css
span {
  color: red;
}
```

:::

## 预设

::: playground#ts TS 案例 1

@file index.ts

```ts
const msg = "你好世界";

const speak = (msg: string) => console.log(msg);

speak(msg);
```

:::

::: playground#ts TS 案例 2

@file index.ts

```ts
const msg = "你好世界";

const speak = (msg: string) => console.log(msg);

speak(msg);
```

@setting

```json
{
  "target": "es5"
}
```

:::
