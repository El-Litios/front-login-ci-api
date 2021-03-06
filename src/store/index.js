import Vue from "vue";
import Vuex from "vuex";
import auth from './auth'
import client from './client'
import product from './product'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    client,
    product
  },
});
