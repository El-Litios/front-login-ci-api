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
              <ModalEditClient :client="item" />
            </td>
            <td>
              <v-btn @click="deleteClient(item.id)" color="red lighten-2" x-small >
                Eliminar
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ModalEditClient from "./ModalEditClient.vue";
export default {
  components: {
    ModalEditClient,
  },
  name: "ClientTable",
  props: {
    clients: {
      Type: Array,
    },
  },

  methods: {
    ...mapActions('client', ['deleteClient'])
  },
};
</script>

<style>
</style>