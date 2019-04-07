<template>
    <section>
        <div v-if="errored">An error occurred.</div>
        <div v-else>
            <div v-if="loading">Loading...</div>
            <div v-else class="card">
                <h1 v-text="something.chartName"></h1>
                <div v-for="currency in something.bpi" :key="currency.code">
                    <span>{{currency.description}}: </span>
                    <span v-html="currency.symbol"></span>
                    <span v-html="currency.rate"></span>
                </div>
<!--                <p>{{something.disclaimer}}</p>-->
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "C2",
        data() {
            return {
                something: '',
                loading:true,
                errored:false
            }
        },
        created() {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => {
                    this.something = response.data;
                })
                .catch(()=>this.errored=true)
                .finally(()=>this.loading=false);
        }
    }
</script>

<style scoped>
    section {
        background: #4875b9;
        font-family: 'Roboto Slab', sans-serif;
    }

    h1 {
        text-align: center;
        margin: 0;
        font-weight: bold;
        color: aliceblue;
    }

    .card {
        padding: 20px;
        background: #222222;
        border-radius: 10px;
        margin: 20px;
    }
</style>