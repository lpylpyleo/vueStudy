import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import C2 from './components/C2'
import C1 from './components/C1'
import C3 from './components/C3'
import Error from './components/404'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);


const routes = [
    {
        path: '/foo',
        component: C2,
        meta: {
            index: 1
        }
    },
    {
        path: '/bar',
        component: C3,
        meta: {
            index: 2
        }
    },
    {
        path: '/',
        component: C1,
        meta: {
            index: 0
        }
    },
    {
        path:'/404',
        component:Error,
        meta:{
            index:999
        }
    },
    {
        path:'*',
        redirect:'/404'
    }
];

const router = new VueRouter({routes: routes});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
