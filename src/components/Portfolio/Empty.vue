<template>
    <div class="container empty">
        <div class="row justify-content-center">
            <div class="alert alert-info p-2 col-lg-6 col-md-6 col-sm-6">
                <h3>Never Stop Investing !</h3>
                <button @click="getStocks" class="border btn btn-light">Let's Invest</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Empty',
    methods : {
        getStocks(){
            this.$router.push({name : 'Stocks'})
        }
    }
}
</script>