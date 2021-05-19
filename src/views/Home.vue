<template>
    <div>
        <Topnav />
        <div class="banner">
            <h1 class="name">极简UI</h1>
            <h2 class="introduce">一个简简单单的UI框架</h2>
            <p class="actions">
                <a href="#">GitHub</a>
               <router-link to="/doc">开始</router-link>
            </p>
        </div>
        <ul class="features">
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-vue"></use>
                </svg>
                <h3 class="title">基于Vue3</h3>
                <p class="text">使用了Vue3 Composition API</p>
            </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3 class="title">代码易读</h3>
                <p class="text">每个组件的源代码都极其简洁</p>
            </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gengxin"></use>
                </svg>
                <h3 class="title">不断更新</h3>
                <p class="text">随着个人能力的提高，不断更新组件</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
    components:{Topnav}
}
</script>
<style lang="scss" scoped>
.banner{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #44295b;
    padding: 100px 0 100px;
    background: linear-gradient(145deg,#e8cbc0,#636fa4);
    clip-path: ellipse(80% 60% at 50% 40%);
    .name {
        padding: 5px 0;
        font-size: 2em;
    }
    .introduce {
        padding: 5px 0;
        font-size: 1.5em;
    }
    .actions{
        padding: 16px 0;
        a{
            display: inline-block;
            color: #fff;
            background-color: #636fa4;
            $h:28px;
            line-height: $h;
            border-radius: $h;
            margin: 0 8px;
            padding: 2px 16px;
            &:hover {
                cursor: pointer;
                box-shadow: 1px 1px 1px #ccc;
            }
        }
    }
}
.features {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 400px;
    margin: 64px auto;
    @media (min-width: 800px) {
        width: 800px;
    }
    @media (min-width: 1200px) {
        width: 1200px;
    }
    li {
        width: 400px;
        margin: 16px 0;
        color: #6f486b;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas: "icon title " "icon text ";
        grid-template-columns: 80px  auto;
        grid-template-rows: 1fr  auto;
    }
    svg {
        width: 64px;
        height: 64px;
    }
    .icon {
        grid-area: icon;
    }
    .title {
        grid-area: title;
    }
    .text {
        grid-area: text;
    }
}
</style>