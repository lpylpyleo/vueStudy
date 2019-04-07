import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        count2: 1
    },
    mutations: {
        increment(state) {
            state.count++;
            // setTimeout(()=> state.count++,3000)
        },
        minus(state, n) {
            state.count -= n;
        },
        multiple(state, n) {
            state.count2 *= n;
        }
    },
    actions: {
        addAction({commit}) {
            setTimeout(()=>commit('increment'),3000)
        }
    }
});