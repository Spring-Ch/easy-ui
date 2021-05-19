<template>
    <div>
        <h1>Button 组件示例 </h1>
        <Demo :component="Button1" title="主题颜色"/>
        <Demo :component="Button2" title="不同尺寸"/>
        <Demo :component="Button3" title="加载动画"/>
    </div>
</template>

<script lang="ts">

import Button1 from './ButtonDemo1.vue'
import Button2 from './ButtonDemo2.vue'
import Button3 from './ButtonDemo3.vue'
import Demo from './Demo.vue'

export default {
    components : { Button1, Button2, Button3,Demo },
    setup() {
        return { Button1, Button2, Button3, Demo}
    }
}
</script>