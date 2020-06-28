<template>
  <div class="container stocksInfo">
    <div class="row justify-content-between">
      <div :key='index' v-for="(share,index) in market" class="border m-2 col-lg-5 col-md-5 col-sm-5">
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
  data(){
    return {
      market : [{
        company : 'Apple',
        price : '450'
      },
      {
        company : 'Samsung',
        price : '350'
      },
      {
        company : 'Tata Industries',
        price : '500'
      },
      {
        company : 'Bharti Airtel',
        price : '250'
      },
      {
        company : 'Reliance Industries',
        price : '200'
      },
      {
        company : 'Angel Brokers',
        price : '100'
      },
      ]
    }
  },
  methods :{
    buyShares(event){
      console.log(event);
    }
  }
}
</script>
