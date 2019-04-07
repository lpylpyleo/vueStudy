<template>
    <section>
        <h1>{{count}}</h1>
        <button @click="add">+</button>
        <button @click="$store.commit('minus',10)">-</button>
        <button @click="multiple(2)">*</button>
        <button @click="addAction">async+</button>
        <hr>
        <h1>{{count2}}</h1>
    </section>
</template>

<script>
    import store from '../store/store'
    import {mapState, mapMutations, mapActions} from 'vuex'

    export default {
        name: "C1",
        store,
        methods: {
            add: function () {
                store.commit('increment');
            },
            ...mapMutations(['multiple']),
            ...mapActions(['addAction'])
        },
        computed: {
            ...mapState(["count2"]),
            count(){
                return this.$store.state.count
            }
        },

    }
</script>

<style scoped>

</style>