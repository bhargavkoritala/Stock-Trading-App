<template>
    <div class="stock alert alert-info rounded">
        <div class="m-3 border title">
          <strong>{{company}}</strong>
          &nbsp;
          <small>(Price: {{price}})</small>
        </div>
        <form class="m-3 justify-content-between form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input v-model='quantity' type="number" class="form-control" id="quantity" placeholder="Quantity" required/>
          </div>
          <button type="submit" @click.prevent="buyShares" class="border btn btn-light mb-2">Buy</button>
        </form>
    </div>
</template>

<script>
export default {
    name : 'Stock',
    props : {
        company : String,
        price : String
    },
    data(){
        return{
            quantity : ''
        }
    },
    methods : {
        buyShares(){
            if(this.quantity==''){
                alert('Select the number of shares !');
            }
            else{
                this.$store.dispatch('newShareAction', {
                company : this.company,
                price : this.price,
                quantity : this.quantity
            })
            alert('Congratulations! You have bought ' + this.quantity + ' share(s) of ' + this.company + '!! \n You have $'+ this.$store.state.funds + ' avaialble.');
            this.quantity = ''
            }
        }
    }
}
</script>

<style>
.border{
  border-color: blue !important;
  border-radius:1vh;
  background-color:white;
}

.title{
  /* background-color:white; */
  color:blue;
}

input{
  border-color: blue !important;
}
</style>