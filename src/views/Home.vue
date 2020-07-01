<template>
  <div class="container-fluid">
    <div class="p-4 row justify-content-left">
      <div class="divide  col-lg-5 col-md-5 col-sm-5">
        <h1>Trade of view your portfolio</h1>
        <p>You may save and load you data.<br>Click on 'End day' to begin a new day!</p>
        <div>
          <strong>Your funds: ${{$store.state.funds}}</strong>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

.divide{
  text-align: left;
  /* border : 1px solid rgba(240,128,128,1); */
  border-radius:3vh;
  /* background-color:#2e85f7f1; */
}

</style>
