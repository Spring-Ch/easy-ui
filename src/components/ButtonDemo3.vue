<demo>
加载动画
</demo>

<template>
    <Button :loading="true">按钮加载中</Button>
</template>

<script lang="ts">
import { Button } from '../libs/index'

export default {
    components : { Button },
    setup() {
       
    }
}
</script>