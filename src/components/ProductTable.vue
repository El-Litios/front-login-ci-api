<template>
  <div>
    <h1>Lista de productos</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Nombre</th>
            <th class="text-center">Descripcion</th>
            <th class="text-center">Stock</th>
            <th class="text-center">Creado en:</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.stock }}</td>
            <td>{{ item.created_at }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
    props: {
        products: {
            Type: Array,
            required: true
        }
    },

    created(){
      console.log();
    }
}
</script>

<style>

</style>