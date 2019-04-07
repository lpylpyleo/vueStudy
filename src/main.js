import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import C2 from './components/C2'
import C1 from './components/C1'
import C3 from './components/C3'

Vue.config.productionTip = false;
Vue.use(VueRouter);


const routes=[
  {path:'/foo',component:C2,meta:{index:1}},
  {path:'/bar',component:C3,meta:{index:2}},
  {path:'/',component:C1,meta:{index:0}}
];

const router = new VueRouter({routes:routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
