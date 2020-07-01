<template>
  <div class="portfolio">
    <component :is="hasStocks"></component>
  </div>
</template>

<script>
import Shares from '../components/Portfolio/Shares.vue'
import Empty from '../components/Portfolio/Empty.vue';
export default {
  name : 'Portfolio',
  computed : {
    hasStocks(){
      if(this.$store.state.shares.length==0){
        return 'appEmpty';
      }
      else{
        return 'appShares';
      }
    }
  },
  components : {
    appShares : Shares,
    appEmpty : Empty
  }
}
</script>

<style>
.portfolio{
  color : blue !important;
}
</style>