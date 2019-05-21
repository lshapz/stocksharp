<template>
  <div id="app">
    <StocksDropdown />
    <DataDisplay />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StocksDropdown from './components/StocksDropdown.vue';
import DataDisplay from './components/DataDisplay.vue';

@Component({
  components: {
    StocksDropdown,
    DataDisplay
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
