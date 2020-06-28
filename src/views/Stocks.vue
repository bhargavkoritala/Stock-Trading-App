<template>
  <div class="stocks">
    <app-Market></app-Market>
  </div>
</template>

<script>
import StocksInfo from '../components/Stocks/StocksInfo.vue';

export default {
  name : 'Stocks',
  components : {
    appMarket : StocksInfo
  }
}
</script>
