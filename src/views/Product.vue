<template>
  <div>
    <Navbar />
    <ModalAddProduct />
    <ProductTable :products="product"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductTable from "../components/ProductTable.vue";
import Navbar from "../components/Navbar.vue";
import ModalAddProduct from "../components/ModalAddProduct.vue";
export default {
  components: {
    Navbar,
    ProductTable,
    ModalAddProduct
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