# ⚡Intall

```shell
yarn add docusaurus-plugin-usevue use-vue-component
```

# Import
docusaurus.config.js:
```js
module.exports = {
  // ...
    plugins: [
        [
            'docusaurus-plugin-usevue',
            {
                name: 'usevue'
            },
        ],
    ],
};
```

# Usage

**directory structure:**

```shell
+-- docs
|   +-- test.vue
|   +-- intro.mdx
```

**test.vue:**

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

**intro.mdx:**

```js
---
sidebar_position: 1
---

## Getting Started

import {uvc} from 'use-vue-component'
import test from './text.vue'

export const HelloWorld = uvc(test)

<HelloWorld/>
```

# render

![df](https://img-blog.csdnimg.cn/a08bd8b839f44074a3f8b60da8af6e59.png)