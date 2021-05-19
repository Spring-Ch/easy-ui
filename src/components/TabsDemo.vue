<template>
    <div>
        <h1>Tabs组件示例</h1>
        <Demo :component="Tabs1" title="常规用法"/>
        <Demo :component="Tabs2" title="支持disabled"/>
    </div>
</template>

<script lang="ts">

import Tabs1 from './TabsDemo1.vue'
import Tabs2 from './TabsDemo2.vue'  
import Demo from './Demo.vue'
import { ref } from 'vue'

export default {
    components : { Tabs1, Tabs2, Demo},
    setup() {
       const activeTitle = ref('导航1')
       return { activeTitle, Tabs1, Tabs2, Demo }
    },
}
</script>
