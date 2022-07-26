<template>
  <div>
    <h1>Carro de compras</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Nombre</th>
            <th class="text-center">Cantidad</th>
            <th class="text-center">Accion</th>
            <th class="text-center">Subtotal</th>
          </tr>
        </thead>
        <!-- Productos del carro -->
        <tbody id="items">
            <ItemsCarro v-for="item in cart" :key="item.id" :item="item"/>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import ItemsCarro from '@/components/ItemsCarro'
import { mapState } from 'vuex';

export default {
  components: {
    ItemsCarro
  },
  computed: {
    ...mapState('shoppingCart', ['cart'])
  }
};
</script>

<style>
</style>