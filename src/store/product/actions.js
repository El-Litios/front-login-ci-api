import api from "../../api/api";
import AuthHeader from "../../services/auth-header";
import router from "../../router";

export const getProduct = async ({ commit }) => {
  try {
    await api.get("/product", { headers: AuthHeader() }).then((res) => {
      commit("setProduct", res.data.products);
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductCategory = async ({ commit }) => {
  try {
    await api.get("/category", { headers: AuthHeader() }).then((res) => {
      commit("setCategory", res.data.categories);
    });
  } catch (error) {
    console.log(error);
  }
};

export const saveProducts = async ({}, product) => {
  try {
    await api.post("/saveproducts",
    { name: product.name, description: product.description, categoryid: product.category, quantity: product.quantity, price: product.price , stateid: 2},
    AuthHeader())
    .then((res) => {
      console.log(res.data.message);
      router.go();
    });
  } catch (error) {
    console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
  }
};
