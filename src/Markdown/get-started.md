# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Tab, Switch, Modal} from "easy-ui-c"
```

就可以使用我提供的组件了。
通过以下代码引入组件的样式

```
import "easy-ui-c/dist/lib/easyUi.css"
```

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script>
  import { Button } from "easy-ui-c"
  import "easy-ui-c/dist/lib/easyUi.css"

  export default {
    components: {Button}
  }
</script>
```
