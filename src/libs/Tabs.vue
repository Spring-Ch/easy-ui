<template>
   <div class="easy-tabs">
       <div class="easy-tabs-nav">
           <div v-for="(c,i) in defaults" :key="i" class="easy-tabs-nav-item" 
           :class="{selected: activeKey===c.props.title,'easy-tab-disabled':c.props.disabled}" 
           @click="selectedToggle(c.props.title)">{{c.props.title}}</div>
       </div >
      <div class="easy-tabs-content">
           <component class="easy-tabs-content-item"
           :class="{selected: activeKey===c.props.title}"
           v-for="(c,i) in defaults" :key="i" :is="c"/>
      </div>
   </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
    export default {
        components : { Tab },
        props : {
            activeKey : {
                type : String,
            },
            disabled : {
              type : Boolean,
            }
        },
        setup(props,context){
            //@ts-ignore
           const defaults = context.slots.default()
           // defaults为子组件数组
           defaults.forEach((tag)=>{
               if(tag.type !== Tab){
                   throw new Error('Tab的子组件必须是Tab')
               }
           })
           const selectedToggle= (title: string )=> {
                context.emit('update:activeKey', title)  
           }
           return {defaults, selectedToggle}
        }
    }
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.easy-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      position: relative;
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
         &::after {
            position: absolute;
            content: '';
            left: 0;
            bottom: -1px;
            background-color: $blue;
            width: 100%;
            height: 2px;
        }
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
        display: none;
        &.selected {
            display: block;
        }
    }
  }
}
.easy-tab-disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.4;
}
</style>
