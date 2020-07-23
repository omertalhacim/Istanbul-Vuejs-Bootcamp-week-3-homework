<template>
  <div class="price">
    <div>
      <h5>TRY to USD Converter (Exchange Rate is 0.15)</h5>
      <input type="number" placeholder="Ex: 20.5" v-model.number="price" />
      <br />
      <br />
      <span>{{ price | formatTRY}} = {{ getUSDValue | formatUSD}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Price",
  filters: {
    formatTRY(value) {
      return `${value.toFixed(2)} TRY`;
    },
    formatUSD(value) {
      return `${value.toFixed(2)} USD`;
    },
  },
  data() {
    return {
      price: 0,
    };
  },
  computed: {
    getUSDValue() {
      return this.price / 6.85;
    },
  },
};
</script>

<style scoped>
.price {
  border: solid 1px #ccc;
  background-color: azure;
  padding: 10px;
}
</style>
