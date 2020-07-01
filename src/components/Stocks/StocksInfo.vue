<template>
  <div class="container stocksInfo">
    <div class="row justify-content-between">
      <div :key='index' v-for="(share,index) in market" class="m-2 col-lg-5 col-md-5 col-sm-5">
        <app-stock :company="share.company" :price="share.price"></app-stock>
      </div>
    </div>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  name: 'StocksInfo',
  components :{
    appStock : Stock
  },
  computed : {
    market(){
      return this.$store.state.market;
    }
  }
}
</script>
