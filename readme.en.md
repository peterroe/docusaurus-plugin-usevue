![asdfdsf](https://img.shields.io/badge/docusaurus->=2.0.0--beta.6-success)
![asdfdsf](https://img.shields.io/badge/Vue-2.6.14-brightgreen)

🧐 [Docusaurus](https://www.docusaurus.cn/docs/) is a **static-site generator**. It builds a single-page application with a fast client-side navigation, leveraging the full power of **React** to make your site interactive. It provides out-of-the-box **documentation features**, but can be used to create **any kind of site** (personal website, product, blog, marketing landing pages, etc).

In terms of components, docusaurus only supports native rendering **react components**

**This plugin will help you render Vue components you write in docusaurus**

[中文](https://github.com/peterroe/docusaurus-plugin-usevue/blob/master/readme.md)｜ English

# ⚡install

Two **NPM packages** need to be installed:

```shell
yarn add docusaurus-plugin-usevue use-vue-component
```

Another plugin address:

[https://github.com/peterroe/use-vue-component](https://github.com/peterroe/use-vue-component)

# Import

In the **docusaurus.config.js** file, add the following configuration:

```js
module.exports = {
  // ...
    plugins: [
        //...
        'docusaurus-plugin-usevue'
    ],
};
```

# Usage

For example, there are the following scenarios:

**directory structure:**

```shell
+-- docs
|   +-- test.vue
|   +-- intro.mdx
```

**test.vue** content：

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

**intro.mdx** content:

```js
---
sidebar_position: 1
---

## Getting Started

import {uvc} from 'use-vue-component'  //Import conversion package
import test from './text.vue'  //Import Vue components

export const HelloWorld = uvc(test)  //transform

<HelloWorld/>
```

# Render results

![image](https://img-blog.csdnimg.cn/a08bd8b839f44074a3f8b60da8af6e59.png)

# Update the log

* :tada: V1.0.0 official version - support vue2