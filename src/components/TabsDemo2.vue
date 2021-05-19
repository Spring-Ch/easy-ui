<demo>
支持disabled
</demo>

<template>
    <Tabs v-model:activeKey="activeTitle">
        <Tab title="导航1" >内容1</Tab>
        <Tab title="导航2" >内容2</Tab>
        <Tab title="导航3" disabled=true>内容3</Tab>
    </Tabs>
</template>

<script lang="ts">
  
  import Tab from '../libs/Tab.vue'
  import Tabs from '../libs/Tabs.vue'
  import { ref } from 'vue'
  export default {
    components : { Tab , Tabs},
    setup() {
       const activeTitle = ref('导航1')
       return { activeTitle }
    },
}
</script>