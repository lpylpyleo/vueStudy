<template>
    <section>
        <div v-if="errored">An error occurred.</div>
        <div v-else class="content">
            <div v-if="loading">Loading...</div>
            <div v-else class="card">
                <h1 v-text="something.chartName"></h1>
                <div v-for="currency in something.bpi" :key="currency.code">
                    <span class="desc">{{currency.description}}: </span>
                    <span v-html="currency.symbol"></span>
                    <span>{{currency.rate_float | currencyDecimal}}</span>
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
        },
        filters: {
            currencyDecimal(val) {
                return val.toFixed(2);
            }
        }
    }
</script>

<style scoped>
    section {
        background: #4875b9;
        font-family: 'Roboto Slab', sans-serif;
        /*display: table;*/
        padding-top: 10%;
    }

    .content {
        /*display: table-cell;*/
        /*vertical-align: middle;*/
        /*position: absolute;*/
        /*top: 10%;*/
        margin: auto;
    }

    h1 {
        text-align: center;
        margin: 0;
        font-weight: bold;
        color: #c9d0d6;
    }

    .card {
        padding: 20px;
        background: #222222;
        border-radius: 10px;
        margin: 20px;
        color: #b7bab9;
    }
    
    .desc {
        color: #8c6f26;
    }
</style>