import api from "../../api/api";
import AuthHeader from "../../services/auth-header";


export const addToCart = ({ commit, state }, product) => {
  state.cart.hasOwnProperty(product.id)
    ? 
      state.cart[product.id].stock > product.quantity
        ? (product.quantity = state.cart[product.id].quantity + 1)
        : alert('no puede')
      
    : (product.quantity = 1);

  
  commit("setCart", product);
};

export const getClientInfo = async ({ commit }) => {
  try {
    await api.get("client/client-info", { headers: AuthHeader() }).then((res) => {
      commit("setClient", res.data.client);
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPaymentMethods = async ({ commit }) => {
  try {
    await api.get("paymentmethodsale", { headers: AuthHeader() }).then((res) => {
      commit("setPaymentMethods", res.data.methods);
    });
  } catch (error) {
    console.log(error);
  }
};
