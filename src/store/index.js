import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'

Vue.use(Vuex)

const user = JSON.stringify(localStorage.getItem('user'))
const initialState = user ? {status: {loggedIn: false}, user} : {status: {loggedIn: true}, user: null};


export default new Vuex.Store({
  state: {
    initialState
  },
  mutations: {
    loginSuccess(state, payload){
      state.initialState.status.loggedIn = true;
      state.initialState.user = payload;
    },

    loginFail(state){
      state.initialState.status.loggedIn = false;
      state.initialState.user = null;
    },

    logout(state){
      state.initialState.status.loggedIn = false;
      state.initialState.user = null;
    }
  },
  actions: {
    async login({commit}, user){
      try {
        await api.post('/auth/login',{
          email: user.email,
          password: user.password
        }).then(res => {
          const userData = {
            accessToken: res.data.access_token,
            username: res.data.user.name,
            id: res.data.user.id
          }
          console.log(userData);
          if (res.data.access_token) {
            localStorage.setItem('user', JSON.stringify(userData))

            commit('loginSuccess', res.data);
          }
        })
      } catch (err) {
        
        commit('loginFail');

      }
    },

    logout({commit}){
      localStorage.removeItem('user');
      commit('logout');
    }
  },
  modules: {
  }
})
