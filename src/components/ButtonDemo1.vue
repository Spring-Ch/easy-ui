<demo>
主题颜色
</demo>

<template>
    <Button>默认按钮</Button>
    <Button theme="primary">主题按钮</Button>
    <Button theme="warning">提醒按钮</Button>
    <Button theme="danger">警告按钮</Button>
    <Button theme="disabled" :disabled="true">禁用按钮</Button>
</template>

<script lang="ts">
import Button from '../libs/Button.vue'

export default {
    components : { Button },
    setup() {
       
    }
}
</script>