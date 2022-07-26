export const addToCart = ({ commit, state }, product) => {
  state.cart.hasOwnProperty(product.id)
    ? (product.quantity = state.cart[product.id].quantity + 1)
    : (product.quantity = 1);
  commit("setCart", product);
};
