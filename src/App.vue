<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/" active-class="active" exact>
      <i class="fas fa-chart-line"></i>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <router-link to="/portfolio" class="nav-item" tag='li'><a class="nav-link">Portfolio</a></router-link>
          <router-link to="/stocks" class="nav-item" tag='li'><a class="nav-link">Stocks</a></router-link>
        </ul>
        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <p id="end" @click="$store.commit('endDay')" class="nav-link">End day</p>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Save & Load
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" @click="saveMarketAction">Save Data</a>
                <a class="dropdown-item" @click="loadMarketAction">Load Data</a>
              </div>
          </li>
          <li class="nav-item">
              <p class="nav-link">Funds: ${{$store.state.funds}}</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods : mapActions([
    'saveMarketAction',
    'loadMarketAction'
  ])
    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#end{
  cursor: pointer;
}

.navbar-brand,.nav-link{
  color: whitesmoke !important;
}

</style>
