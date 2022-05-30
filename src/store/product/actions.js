import api from "../../api/api";
import AuthHeader from "../../services/auth-header";

export const getProduct = async ({ commit }) => {
  try {
    await api.get("/product", { headers: AuthHeader() }).then((res) => {
      const productData = {
        product: res.data.products,
        message: res.data.message,
      };
      commit("setProduct", productData);
    });
  } catch (error) {
    console.log(error);
  }
};
