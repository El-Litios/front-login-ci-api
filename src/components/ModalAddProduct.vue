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
              v-model="client.name"
            ></v-text-field>

            <!-- Description -->
            <v-text-field
              label="Descripción"
              :rules="desciptionRules"
              hide-details="auto"
              v-model="client.email"
            ></v-text-field>

            <!-- Category -->
            <v-select :items="items" label="Categoría"></v-select>

            <!-- Quantity -->
            <v-text-field
              label="Cantidad"
              :rules="quantityRules"
              hide-details="auto"
              v-model="client.rent"
              type="number"
            ></v-text-field>
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
export default {
  data() {
    return {
      dialog: false,
      valid: true,
      client: {},
      //RULES
      nameRules: [(value) => !!value || "Debe ingresar el Nombre."],
      desciptionRules: [(value) => !!value || "Debe ingresar el Correo."],
      quantityRules: [(value) => !!value || "Debe ingresar la Renta."],
    };
  },

  methods: {
    ...mapActions("client", ["createClient"]),

    save() {
      this.createClient(this.client);
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style>
</style>