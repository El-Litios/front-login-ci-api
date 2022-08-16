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
                  <td>{{ item.price * item.quantity }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th class="text-right" colspan="3"><h3>Total</h3></th>
                  <th class="text-center">
                    <h3>${{ getTotalPrice }}</h3>
                  </th>
                </tr>
              </tfoot>
            </template>
          </v-simple-table>
          <v-row justify="end">
            <v-col md="4">
              <v-select
                :items="client"
                item-text="name"
                item-value="id"
                label="Cliente"
              ></v-select>
            </v-col>
            <v-col md="4">
              <v-select
                :items="paymentmethods"
                item-text="description"
                item-value="id"
                label="Metodo de Pago"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapState("shoppingCart", ["cart", "client", "paymentmethods"]),
    ...mapGetters("shoppingCart", ["getAllItemsCart", "getTotalPrice"]),
  },

  methods: {
    ...mapActions("shoppingCart", ["getClientInfo", "getPaymentMethods"]),
    ...mapMutations("shoppingCart", ["addItemCount", "removeItemCount"]),
  },

  created() {
    this.getClientInfo();
    this.getPaymentMethods();
  },
};
</script>