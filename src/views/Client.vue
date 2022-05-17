<template>
  <div>
    <Navbar />
    <table-client :clients="client.client"/>
  </div>
</template>

<script>
import TableClient from "../components/ClientTable.vue";
import Navbar from "../components/Navbar.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Client",
  components: {
    TableClient,
    Navbar,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState('client',["client"]),
  },

  methods: {
    ...mapActions('client', ["getClients"]),
  },

  created() {
    this.getClients();
  },
};
</script>

<style>
</style>
