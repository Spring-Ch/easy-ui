<template>
   <button class="easy-button" :class="btnClasses" :disabled="disabled">
       <span v-if="loading" class="easy-button-loadingIndicator"></span>
       <slot />
   </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
    props:{
            theme : {
                type : String,
                default : 'normal'
            },
            size : {
                type : String,
                default : 'middle'
            },
            disabled : {
                type : Boolean,
                default : false
            },
            loading : {
                type : Boolean,
                default : false,
            }
    },
    setup(props: { theme: any; size: any }) {
        const { theme, size} = props
        const btnClasses = computed(() => {
            return { 
                [`easy-button-${theme}`] : theme,
                [`easy-button-${size}`] : size,
            }
        })
        return { btnClasses }
    },
}
</script>

<style lang="scss">
    .easy-button {
        display: inline-block;
        line-height: 38px;
        padding: 0 18px;
        background-color: #fff;
        white-space: nowrap;
        text-align: center;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        margin-right: 8px;
        -webkit-appearance: none;
        transition: all 0.3s;
        -webkit-transition: all 0.3s;
        box-sizing: border-box;
        outline: none;
        border: none;
        cursor: pointer;
        &-normal {
            border: 1px solid #c9c9c9;
            color: #000;
            &:hover {
                border: 1px solid #1E9FFF;
                color: #1E9FFF;
            }
        }
        &-primary {
            $btnPrimaryBgc: #1E9FFF;
            background-color: $btnPrimaryBgc;
            &:hover {
                background-color: lighten($color: $btnPrimaryBgc, $amount: 10%);
            }
        }
        &-warning {
            $btnWarningBgc: #FFB800;
            background-color: $btnWarningBgc;
             &:hover {
                background-color: lighten($color: $btnWarningBgc, $amount: 10%);
            }
        }
        &-danger {
            $btnDangerBgc: #FF5722;
            background-color: $btnDangerBgc;
             &:hover {
                background-color: lighten($color: $btnDangerBgc, $amount: 10%);
            }
        }
        &-disabled {
            border: 1px solid #e6e6e6;
            background-color: #FBFBFB;
            color: #C9C9C9;
            cursor: not-allowed;
            opacity: 1;
        }
    }
    .easy-button {
        &-large {
            height: 44px;
            line-height: 44px;
            padding: 0 25px;
            font-size: 16px;
        }
        &-small {
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            font-size: 12px;
        }
        &-xsmall {
            height: 22px;
            line-height: 22px;
            padding: 0 5px;
            font-size: 12px;
        }
    }
    .easy-button-loadingIndicator {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 7px;
        border-radius: 50%; 
        border-color:  #009688 #009688 #009688 transparent;
        border-style: solid;
        border-width: 2px;
        animation: easy-spin 1s infinite linear;
    }
    @keyframes easy-spin {
        0%{transform: rotate(0deg)} 
        100%{transform: rotate(360deg)} 
    }
</style>