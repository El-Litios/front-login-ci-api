<template>
  <div id="app">
    <div id="nav" >
      <div v-if="initialState.user && initialState.user !== 'null'">
        <router-link  v-if="initialState.user.user.roleid == 1" to="/">Home</router-link> |
        <router-link  v-if="initialState.user.user.roleid == 2" to="/about">About</router-link> |
      </div>
      <button v-if="initialState.user !== 'null' && initialState.user" @click="logout()">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions(['logout']),
  },

  computed: {
    ...mapState(['initialState'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
