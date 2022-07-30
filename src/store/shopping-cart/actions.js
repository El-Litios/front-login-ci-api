export const addToCart = ({ commit, state }, product) => {
  state.cart.hasOwnProperty(product.id)
    ? 
      state.cart[product.id].stock > product.quantity
        ? (product.quantity = state.cart[product.id].quantity + 1)
        : alert('no puede')
      
    : (product.quantity = 1);

  
  commit("setCart", product);
};
