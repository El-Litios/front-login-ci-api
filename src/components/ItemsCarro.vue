<template>
  <tr>
    <td>{{item.name}}</td>
    <td>{{item.quantity}}</td>
    <td>
        <v-btn @click="addItemCount(item.id)">
            +
        </v-btn>
        <v-btn @click="removeItemCount(item.id)">
            -
        </v-btn>
    </td>
    <td>{{item.precio * item.stock}}</td>
  </tr>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
props: {
  item: {
    type: Object
  }
},

methods: {
  ...mapMutations('shoppingCart', ['addItemCount', 'removeItemCount'])
},

}
</script>

<style>

</style>