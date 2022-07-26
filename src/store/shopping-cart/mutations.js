export const setCart = (state, payload) => {
  console.log(payload);
  state.cart[payload.id] = payload
  console.log(state.cart);
}
