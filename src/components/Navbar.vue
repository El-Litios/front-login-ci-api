<template>
  <div id="nav">
    <div v-if="initialState.user && initialState.user !== 'null'">
      <router-link
        v-if="initialState.user.user.roleid == 1"
        :to="{ name: 'Dashboard' }"
        >Inicio</router-link
      >
      |
      <router-link
        v-if="initialState.user.user.roleid == 1"
        :to="{ name: 'Client' }"
        >Gestion de Clientes</router-link
      >
      |
      <router-link
        v-if="initialState.user.user.roleid == 1"
        :to="{ name: 'Product' }"
        >Gestion de Productos</router-link
      >
      |
    </div>
    <router-link
        :to="{ name: 'ShoppingCart' }"
      >Carro de Compras</router-link
    >

    <ModalShoppingCart/>
      |
    <v-btn
      v-if="initialState.user !== 'null' && initialState.user"
      @click="logout()"
    >
      Logout
    </v-btn>
  </div>
</template>

<script>
import ModalShoppingCart from '@/components/ModalShoppingCart.vue'
import  { mapActions, mapState } from 'vuex'
export default {
    name: 'Navbar',
    components: {ModalShoppingCart},
  methods: {
    ...mapActions('auth', ["logout"]),
  },

  computed: {
    ...mapState('auth', ["initialState"]),
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>