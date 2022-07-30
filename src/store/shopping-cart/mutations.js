import Vue from 'vue'

export const setCart = (state, payload) => {
  console.log(payload);
  Vue.set(state.cart, payload.id, {...payload})
  console.log(state.cart);
}

export const addItemCount = (state, payload) => {
 state.cart[payload].stock <= state.cart[payload].quantity
 ? alert('no puede')
 : state.cart[payload].quantity = state.cart[payload].quantity + 1
}

export const removeItemCount = (state, payload) => {
  state.cart[payload].quantity = state.cart[payload].quantity - 1
  if (state.cart[payload].quantity == 0) {
    Vue.delete( state.cart, payload )
  }
} 