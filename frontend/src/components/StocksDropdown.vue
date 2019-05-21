<template>
  <div class="stocks-dropdown">
    <select v-model="selected"> 
      <option selected disabled>Please select a stock to display</option>
      <option v-for="(stock, index) in allStocksAbridged" :key="index" :value="stock.symbol"> {{stock.symbol}}</option>
    </select>
  </div>
</template>

<script lang="ts">
import {mapGetters, mapState} from 'vuex'
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  computed: mapGetters(['allStocksAbridged'])
})

export default class StocksDropdown extends Vue {
  @Watch('selected')
  onSelectChanged(val:string, oldVal:string) {
    this.$store.dispatch('getSelectedStockData', val);
  }

  selected = 'Please select a stock to display';

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
