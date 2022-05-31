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

export const getProductCategory = async ({ commit }) => {
  try {
    await api.get("/category", { headers: AuthHeader() }).then((res) => {
      commit("setCategory", res.data.categories)
    });
  } catch (error) {
    console.log(error);
  }
};
