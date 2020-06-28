<template>
  <div class="container stocksInfo">
    <div class="row justify-content-between">
      <div :key='index' v-for="(share,index) in market" class="border m-2 col-lg-5 col-md-5 col-sm-5">
        <app-stock :quantity="share.quantity" :company="share.company" :price="share.price"></app-stock>
      </div>
    </div>
  </div>
</template>

<script>
import Stock from './Share.vue';

export default {
  name: 'StocksInfo',
  components :{
    appStock : Stock
  },
  data(){
    return {
      market : this.$store.state.shares
      }
  },
  methods :{
    buyShares(event){
      console.log(event);
    }
  }
}
</script>
