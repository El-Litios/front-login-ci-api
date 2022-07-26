<template>
  <tr>
    <td>{{item.name}}</td>
    <td>{{item.quantity}}</td>
    <td>
        <v-btn>
            +
        </v-btn>
        <v-btn>
            -
        </v-btn>
    </td>
    <td>{{item.precio * item.stock}}</td>
  </tr>
</template>

<script>
export default {
props: ['item']
}
</script>

<style>

</style>