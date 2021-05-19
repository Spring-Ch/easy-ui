<demo>
常规用法
</demo>

<template>
    <Button @click="toggle">打开moadl框</Button>
    <Modal v-model:visible="x" :maskClosed="false" :ok="handleOk">
       <template v-slot:header>标题</template>
       <template v-slot:content>文本</template>
    </Modal>
</template>

<script lang="ts">
import Modal from '../libs/Modal.vue'
import Button from '../libs/Button.vue'
import {ref} from 'vue'

export default {
    components : { Modal, Button },
    setup() {
        const x = ref(false)
        const toggle = ()=> {
            x.value = !x.value
        }
        const handleOk = ()=> {
            return true
        }
        return { x, toggle, handleOk }
    },
}
</script>