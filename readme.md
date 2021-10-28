![asdfdsf](https://img.shields.io/badge/docusaurus->=2.0.0--beta.6-success)
![asdfdsf](https://img.shields.io/badge/Vue-2.6.14-brightgreen)

🧐 [Docusaurus](https://www.docusaurus.cn/docs/) 是一个**静态网站生成器**。它发挥了 **React** 的全部功能来构建具有快速客户端导航的 **单页应用**，从而赋予你的网站交互性。它提供了开箱即用的**文档功能**，还能用于创建**任何类型的网站**（例如个人网站、产品介绍、博客、营销页等等）

在组件方面， Docusaurus 仅仅原生支持渲染 **React组件**

**而本插件将帮助您在 Docusaurus 中渲染你编写 Vue组件**

中文 ｜ [English](https://github.com/peterroe/docusaurus-plugin-usevue/blob/master/readme.en.md)

# ⚡安装

需要安装两个npm包：

```shell
yarn add docusaurus-plugin-usevue use-vue-component
```

另一个插件地址：[https://github.com/peterroe/use-vue-component](https://github.com/peterroe/use-vue-component)

# 插件导入
在**docusaurus.config.js**文件中，添加如下配置
```js
module.exports = {
  // ...
    plugins: [
        //...
        'docusaurus-plugin-usevue'
    ],
};
```

# 用法

例如有如下场景

**目录结构:**

```shell
+-- docs
|   +-- test.vue
|   +-- intro.mdx
```

**test.vue**内容：

```vue
<template>
    <div class="red">
        hello world, this is {{name}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'peter'
        }
    }
}
</script>

<style>
    .red {
        color: red
    }
</style>
```

**intro.mdx**内容:

```js
---
sidebar_position: 1
---

## Getting Started

import {uvc} from 'use-vue-component'  //引入转换包
import test from './text.vue'  //引入vue组件

export const HelloWorld = uvc(test)  //转换

<HelloWorld/>
```

# 渲染结果

![df](https://img-blog.csdnimg.cn/a08bd8b839f44074a3f8b60da8af6e59.png)

# 更新日志

* :tada: V1.0.0 正式版 - 支持 vue2