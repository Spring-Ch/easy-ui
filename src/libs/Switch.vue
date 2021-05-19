<template>
    <div>
        <button class="easy-switch" :class="{'easy-switch-selected':checked,'easy-switch-disabled':disabled}" @click="toggle" :disabled="disabled"><span></span></button>
    </div>
</template>
<script>

export default {
    props:{
        checked : Boolean,
        disabled : Boolean
    },
    setup(props,context){
        const toggle = () => {
           context.emit('update:checked', !props.checked)
        }
        return { toggle}
    }
}
</script>
<style lang="scss" >
$h:22px;
$h2:$h - 4px;
.easy-switch{
    position: relative;
    height: $h;
    width: $h*2;
    border: none;
    background-color: gray;
    border-radius: $h/2;
    span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: #fff;
    border-radius: $h2/2;
    transition: left 250ms;
    }
}
.easy-switch-selected{
    background-color: blue;
    span{
        left: calc(100% - #{$h2} - 2px);
    }
}
.easy-switch-disabled{
    cursor:not-allowed
}
</style>