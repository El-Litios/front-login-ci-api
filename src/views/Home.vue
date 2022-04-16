<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormLogin />
  </div>
</template>

<script>
// @ is an alias to /src
import FormLogin from '@/components/FormLogin.vue'

export default {
  name: 'Home',
  components: {
    FormLogin
  }
}
</script>
