<template>
  <v-row>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
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
                <tr v-for="item in getAllItemsCart" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>
                    <v-btn @click="addItemCount(item.id)"> + </v-btn>
                    <v-btn @click="removeItemCount(item.id)"> - </v-btn>
                  </td>
                  <td>{{ item.precio * item.stock }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";

export default {

  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapState("shoppingCart", ["cart"]),
    ...mapGetters("shoppingCart", ["getAllItemsCart"]),
  },

  methods: {
    ...mapMutations("shoppingCart", ["addItemCount", "removeItemCount"]),
  },
};
</script>