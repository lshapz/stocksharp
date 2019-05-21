<template>
  <div class="data-display">
        {{selectedStock}}
  </div>
</template>

<script lang="ts">
import {mapState} from 'vuex'
import { Component, Vue,  } from 'vue-property-decorator';

@Component({
  computed: mapState(['selectedStock'])
})

export default class StocksDropdown extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.data-display {
  margin-top: 5%;
}
</style>
