<template>
    <div>
        <h1>Modal 组件示例 </h1>
        <Demo :component="Modal1" title="常规用法"/>
    </div>  
</template>

<script lang="ts">

import Demo from './Demo.vue'
import Modal1 from './ModalDemo1.vue'
export default {
    components : { Demo, Modal1},
    setup() {
        return { Modal1 }
    },
}
</script>