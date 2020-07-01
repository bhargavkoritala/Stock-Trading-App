<template>
    <div class="stock">
        <div class="m-3 border alert alert-info title">
          <strong>{{company}}</strong>
          &nbsp;
          <small>(Price: {{price}} | Quantity: {{quantity}})</small>
        </div>
        <form class="m-3 justify-content-between form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input v-model='toSell' type="number" class="form-control" id="quantity" placeholder="Quantity">
          </div>
          <button type="submit" @click.prevent="sellShares" class="btn btn-primary mb-2">Sell</button>
        </form>
    </div>
</template>

<script>
export default {
    name : 'Stock',
    props : {
        company : String,
        price : String,
        quantity : String
    },
    data(){
        return{
            toSell : ''
        }
    },
    methods : {
        sellShares(){
            if(this.quantity==''){
                alert('Select the number of shares !');
            }
            else{
                this.$store.dispatch('sellSharesAction', {
                  company : this.company,
                  price : this.price,
                  quantity : this.toSell
                });
            this.toSell = ''
            }
        }
    }
}
</script>

<style>
.border{
  border-color: blue !important;
  border-radius:1vh;
  /* background-color:white; */
}

.title{
  /* background-color:white; */
  color: blue;
}

input{
  border-color: blue !important;
}
</style>