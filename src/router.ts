import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import ModalDemo from './components/ModalDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import intro from './Markdown/intro.md'
import install from './Markdown/install.md'
import getStarted from './Markdown/get-started.md'

import { h } from 'vue';
import Markdown from './components/Markdown.vue';
const md = (string: any) => h(Markdown, { content: string, key: string })

const histroy = createWebHashHistory()
const router=createRouter({
    history:histroy,
    routes:[
        {path:'/',component:Home},
        {
            path:'/doc',
            component:Doc,
            children:[
                { path: "", redirect: '/doc/intro' },
                { path: "intro", component: md(intro) },
                { path: "get-started", component: md(getStarted) },
                { path: "install", component: md(install) },
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:ModalDemo},
                {path:'tabs',component:TabsDemo}
            ]
        }
    ]
})

export default router