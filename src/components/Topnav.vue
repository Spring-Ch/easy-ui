<template>
      <div class="topnav">
            <router-link to="/" class="logo">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-easy"></use>
                </svg>
            </router-link>
            <router-link to="/doc" class="menu">文档</router-link>
            <span v-if="topNavMenuVisible" class="toggle" @click="toggleMenu">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-list"></use>
                </svg>
            </span>
        </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue'

export default {
    props : {
        topNavMenuVisible : {
            type : Boolean,
            default : false
        }
    },
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        const toggleMenu = () => {
            asideVisible!.value = !asideVisible!.value
        }
        return {toggleMenu}
    }
}
</script>
<style lang="scss" scoped>
.topnav{
    position: relative;
    z-index: 10;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo{
        max-width: 6em;
        margin-right: auto;
        .icon {
            width: 32px;
            height: 32px;
        }
    }
    .logo,
    .menu {
        color:#636fa4;
        &:hover {
            color: #B3A7B5;
        }
    }
    .toggle{
        display: none;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        svg {
            width: 24px;
            height: 24px;
        }
    }
    @media(max-width: 500px){
        .menu{
            display: none;
        }
        .logo{
            margin: 0 auto;
        }
        .toggle{
            display: inline-block;
        }
    }
}
</style>