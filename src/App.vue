<template>
  <div id="app" class="bg-primary relative w-full h-full">
    <div class="container sm:my-24">
      <OrderSummaryCard></OrderSummaryCard>
    </div>
  </div>
</template>

<script>
import OrderSummaryCard from './components/OrderSummaryCard.vue'

export default {
  name: 'App',
  components: {
    OrderSummaryCard,
}
}
</script>

<style>
#app {
  font-family: 'Red Hat Display', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
