<template>
  <div class="portfolio">
    <app-shares></app-shares>
  </div>
</template>

<script>
import Shares from '../components/Portfolio/Shares.vue'

export default {
  name : 'Portfolio',
  components : {
    appShares : Shares
  }
}
</script>