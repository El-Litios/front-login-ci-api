<template>
  <div>
    <Navbar />
    <ProductTable :products="product.product"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductTable from "../components/ProductTable.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
    ProductTable,
  },
  computed: {
    ...mapState("product", ["product"]),
  },

  methods: {
    ...mapActions("product", ["getProduct"]),
  },

  created() {
    this.getProduct();
  },
};
</script>

<style>
</style>