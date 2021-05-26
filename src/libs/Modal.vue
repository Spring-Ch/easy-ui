<template>
  <template v-if="visible">
    <teleport to='body'>
        <div class="easy-modal-wrapper" @click="onClickCloseMask">
            <div class="easy-modal">
                <div class="easy-modal-content">
                        <div class="easy-modal-close">
                            <span class="easy-modal-close-x" @click="modalClosed">×</span>
                        </div>
                        <header class="easy-modal-header">
                            <slot name="header">标题</slot>
                        </header>
                        <main class="easy-modal-body">
                            <slot name="content">请在这里输入文本内容</slot>
                        </main>
                        <footer class="easy-modal-footer">
                            <Button @click="modalClosed">取消</Button>
                            <Button theme="primary" @click="ok">确定</Button>
                        </footer>
                </div>
            </div>
        </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue'

export default {
    props : {
        visible: {
            type: Boolean,
            default: false
        },
        maskClosed : {
            type : Boolean,
            default : true
        },
        ok : {
            type : Function,
        },
        cancel : {
            type : Function,
        },
    },
    components : { Button },
    setup(props,context) {
        // 点击关闭按钮，关闭modal框
        const modalClosed = ()=> {
            context.emit('update:visible', false)
        }
        // 点击mask，根据maskClosed来判断是否要关闭modal框
        const onClickCloseMask = ()=> {
            if (props.maskClosed) {
                modalClosed()
            }
        }
        const ok = ()=> {
            if(props.ok && props.ok() !== false) {
                modalClosed()
            }
        }
        const cancel = ()=> {
            modalClosed()
        }
        return { modalClosed, onClickCloseMask, ok, cancel}
    },
}
</script>

<style lang="scss">
    .easy-modal-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        overflow: auto;
        outline: 0;
        background-color: rgba(0,0,0,.45);
    }
    .easy-modal-content {
            position: relative;
            background-color: #fff;
            background-clip: padding-box;
            border: 0;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0,0,0,.15);
            pointer-events: auto;
    }
    .easy-modal {
        width: 520px;
        box-sizing: border-box;
        color: rgba(0,0,0,.65);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5;
        list-style: none;
        font-feature-settings: "tnum";
        position: relative;
        top: 100px;
        margin: 0 auto;
        padding: 0 0 24px;
        pointer-events: none;
        &-close {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 10;
            padding: 0;
            color: rgba(0,0,0,.45);
            font-weight: 700;
            line-height: 1;
            text-decoration: none;
            background: transparent;
            border: 0;
            outline: 0;
            cursor: pointer;
            transition: color .1s;
            &:hover {
                border: none;
            }
        }
        &-close-x {
            display: block;
            width: 56px;
            height: 56px;
            font-size: 24px;
            font-style: normal;
            line-height: 56px;
            text-align: center;
            text-transform: none;
            text-rendering: auto;
            color: #999;
            &:hover {
                color: #000;
            }
        }
        &-header {
            padding: 16px 24px;
            color: rgba(0,0,0,.65);
            background: #fff;
            border-bottom: 1px solid #e8e8e8;
            border-radius: 4px 4px 0 0;
        }
        &-body {
            padding: 24px;
            font-size: 14px;
            line-height: 1.5;
            word-wrap: break-word;
        }
        &-footer {
            padding: 10px 16px;
            text-align: right;
            background: transparent;
            border-top: 1px solid #e8e8e8;
            border-radius: 0 0 4px 4px;
        }
    }
   
</style>