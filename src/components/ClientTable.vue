<template>
  <div>
    <h1>Gestion de Clientes</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Nombre</th>
            <th class="text-center">Email</th>
            <th class="text-center">Renta</th>
            <th class="text-center">Creado en:</th>
            <th class="text-center">Edición</th>
            <th class="text-center">Borrado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in clients" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.retainer_fee }}</td>
                <td>{{ item.created_at }}</td>
                <td>
                  <v-btn>Editar</v-btn>
                </td>
                <td>
                  <v-btn>Eliminar</v-btn>
                </td>
            </tr> 
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'ClientTable',
  props: {
    clients: {
      Type: Array
    }
  }
};
</script>

<style>
</style>