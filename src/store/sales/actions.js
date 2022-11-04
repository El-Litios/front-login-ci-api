import api from "../../api/api";
import AuthHeader from "../../services/auth-header";
import router from "../../router";

export const addSale = async ({ commit }, obj) => {
  try {
    await api
      .post(
        "/storevending",
        {
          totalprice: obj.totalPrice,
          description: obj.description,
          clientid: obj.client,
          paymentid: obj.payment,
          stateid: 1,
        },
        AuthHeader()
      )
      .then((res) => {
        console.log(res.data.message);

        api
          .post(
            "/storedetailsvending",
            {
              items: obj.items,
              vendingid: res.data.message,
            },
            AuthHeader()
          )
          .then((res) => {
            console.log(res.data.message);
          })
          .catch((err) => {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          });
      });
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};
