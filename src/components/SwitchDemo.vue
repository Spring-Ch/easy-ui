<template>
    <div>
      <h1>Switch 组件示例 </h1>
      <Demo :component="Switch1" title="常规用法"/>
      <Demo :component="Switch2" title="支持disabled"/>
   </div>
</template>
<script lang="ts">
import {ref} from 'vue'
import Button from '../libs/Button.vue'
import Switch1 from './SwitchDemo1.vue'
import Switch2 from './SwitchDemo2.vue'
import Demo from './Demo.vue'

export default {
   components: { Button,Switch1,Switch2,Demo },
   setup(props) {
        const checked = ref(false)
        return { checked,Switch1,Switch2 }
   }
}
</script>

