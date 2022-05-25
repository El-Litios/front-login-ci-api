<template>
  <div>
    <Navbar />
    <ModalAddClient />
    <table-client :clients="client.client"/>
  </div>
</template>

<script>
import TableClient from "../components/ClientTable.vue";
import Navbar from "../components/Navbar.vue";
import ModalAddClient from "../components/ModalAddClient.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Client",
  components: {
    TableClient,
    Navbar,
    ModalAddClient
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
