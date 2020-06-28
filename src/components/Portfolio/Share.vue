<template>
    <div class="stock">
        <div class="m-3 border title">
          <strong>{{company}}</strong>
          &nbsp;
          <small>(Price: {{price}} | Quantity: {{quantity}})</small>
        </div>
        <form class="m-3 justify-content-between form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input v-model='toSell' type="number" class="form-control" id="quantity" placeholder="Quantity">
          </div>
          <button @click.prevent="buyShares" class="btn btn-light mb-2">Sell</button>
        </form>
    </div>
</template>

<script>
export default {
    name : 'Stock',
    props : {
        company : String,
        price : String,
        quantity : Number
    },
    data(){
        return{
            toSell : ''
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
            this.quantity = ''
            }
            console.log({
                company : this.company,
                price : this.price,
                quantity : this.quantity
            })
        }
    }
}
</script>

<style>
.border{
  border-color: lightcoral !important;
  border-radius:1vh;
  background-color:white;
}

.title{
  background-color:white;
  color: lightcoral;
}

button{
  color: white !important;
  background-color: lightcoral !important;
}

input{
  border-color: lightcoral !important;
}
</style>