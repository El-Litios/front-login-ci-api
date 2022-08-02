<template>
  <div>
    <div class="text-center">
      <v-dialog v-model="dialog" width="400" persistent>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="yellow darken-2" x-small v-bind="attrs" v-on="on">
            Actualizar
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 white lighten-2">
            Formulario
          </v-card-title>

          <p v-if="client.updated_at">
            Ultima actualización: {{ data.updated_at }}
          </p>

          <v-form
            @submit.prevent="save()"
            lazy-validation
            ref="form"
            v-model="valid"
          >
            <v-card-text>
              <!-- Name -->
              <v-text-field
                label="Nombre Completo"
                :rules="nameRules"
                hide-details="auto"
                v-model="data.name"
              ></v-text-field>

              <!-- Email -->
              <v-text-field
                label="Correo"
                :rules="emailRules"
                hide-details="auto"
                v-model="data.email"
              ></v-text-field>

              <!-- Rent -->
              <v-text-field
                label="Renta"
                :rules="rentRules"
                hide-details="auto"
                v-model="data.retainer_fee"
                type="number"
              ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="cancel()">
                Close
              </v-btn>
              <v-btn
                type="submit"
                color="primary"
                text
                @click="validate"
                :disabled="!valid"
              >
                Actualizar
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    client: {
      Type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      valid: true,
      data: {},
      //RULES
      nameRules: [(value) => !!value || "Debe ingresar el Nombre."],
      emailRules: [(value) => !!value || "Debe ingresar el Correo."],
      rentRules: [(value) => !!value || "Debe ingresar la Renta."],
    };
  },

  created(){
    this.data = this.client
  },

  methods: {
    ...mapActions("client", ["updateClient"]),

    save() {
      this.updateClient(this.client);
    },
    validate() {
      this.$refs.form.validate();
    },
    cancel() {
      this.dialog = false
      this.$router.go();
    }
  },

};
</script>

<style lang="css" scoped>
p {
  font-size: 15px;
  margin-bottom: 5px;
}
</style>