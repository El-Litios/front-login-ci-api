<template>
  <div class="hello">
    <input placeholder="email" type="text" v-model="user.email">
    <input placeholder="password" type="text" v-model="user.password">
    <button @click="doLogin()" >Enviar</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'FormLogin',
  data () {
    return {
      user: {}
    }
  },

  methods: {
    ...mapActions('auth',['login']),

    doLogin(){
      this.login(this.user)
    }
  }
}
</script>
