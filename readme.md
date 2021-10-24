![asdfdsf](https://img.shields.io/badge/docusaurus->=2.0.0--beta.6-success)
![asdfdsf](https://img.shields.io/badge/Vue-2.6.14-brightgreen)

# ⚡安装

需要安装两个npm包：

```shell
yarn add docusaurus-plugin-usevue use-vue-component
```

另一个插件地址：[use-vue-component](https://github.com/peterroe/use-vue-component)

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