<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="green lighten-2" x-small v-bind="attrs" v-on="on">
          Agregar Productos
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 white lighten-2">
          Formulario
        </v-card-title>

        <v-form
          @submit.prevent="save()"
          lazy-validation
          ref="form"
          v-model="valid"
        >
          <v-card-text>
            <!-- Name -->
            <v-text-field
              label="Nombre del producto"
              :rules="nameRules"
              hide-details="auto"
              v-model="product.name"
            ></v-text-field>

            <!-- Description -->
            <v-text-field
              label="Descripción"
              :rules="desciptionRules"
              hide-details="auto"
              v-model="product.description"
            ></v-text-field>

            <!-- Quantity -->
            <v-text-field
              label="Cantidad"
              :rules="quantityRules"
              hide-details="auto"
              v-model="product.quantity"
              type="number"
            ></v-text-field>

            <!-- Price -->
            <v-text-field
              label="Precio"
              :rules="priceRules"
              hide-details="auto"
              v-model="product.price"
              type="number"
            ></v-text-field>

            <!-- Category -->
            <v-select
              :items="category"
              v-model="product.category"
              item-value="categoryid"
              item-text="description"
              label="Categoría"
              :rules="categoryRules"
            ></v-select>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              type="submit"
              color="primary"
              text
              @click="validate"
              :disabled="!valid"
            >
              Agregar Producto
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      valid: true,
      product: {},
      //RULES
      nameRules: [(value) => !!value || "Debe ingresar el nombre."],
      desciptionRules: [(value) => !!value || "Debe ingresar la descripcion."],
      quantityRules: [
        (value) => (!!value && value > 0) || "Debe ser una cantidad aceptada.",
      ],
      priceRules: [
        (value) => (!!value && value > 0) || "Debe ser una cantidad aceptada.",
      ],
      categoryRules: [(value) => !!value || "Debe seleccionar la categoría"]
    };
  },

  computed: {
    ...mapState("product", ["category"]),
  },

  methods: {
    ...mapActions("product", ["getProductCategory", "saveProducts"]),

    save() {
      this.saveProducts(this.product);
    },
    validate() {
      this.$refs.form.validate();
    },
  },

  created() {
    this.getProductCategory();
  },
};
</script>

<style>
</style>