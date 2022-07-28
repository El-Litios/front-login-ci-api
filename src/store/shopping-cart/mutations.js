export const setCart = (state, payload) => {
  console.log(payload);
  state.cart[payload.id] = payload
  console.log(state.cart);
}

export const addItemCount = (state, payload) => {
  
  state.cart[payload].quantity = state.cart[payload].quantity + 1
  console.log('items agregados', state.cart[payload].quantity);
}

export const removeItemCount = (state, payload) => {
  state.cart[payload].quantity = state.cart[payload].quantity - 1
  console.log('items eliminados del carro', state.cart[payload].quantity);
  if (state.cart[payload].quantity === 0) {
    delete state.cart[payload]
  }
} 