import api from "../../api/api";
import AuthHeader from "../../services/auth-header";
import router from "../../router";
import authHeader from "../../services/auth-header";

export const getClients = async ({ commit }) => {
  try {
    await api.get("/client", { headers: AuthHeader() }).then((res) => {

      commit("setClient", res.data.client);
    });
  } catch (error) {
    console.log(error);
  }
};

export const createClient = async ({}, client) => {
  try {
    await api
      .post(
        "/newclient",
        { name: client.name, email: client.email, retainer_fee: client.rent },
        authHeader()
      )
      .then((res) => {
        console.log(res);
        router.go();
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateClient = async ({}, client) => {
  try {
    await api.post("/updateclient",
    { id: client.id, name: client.name, email: client.email, retainer_fee: client.rent },
    authHeader()
    )
    .then(() => {
      router.go();
    })
  } catch (error) {
    console.log(error);
  }
};

export const deleteClient = async ({ commit }, id) => {
   try {
    await api.delete(`/deleteclient/${id}`,
    authHeader()
    )
    .then(res => {
      console.log(res); 
      commit('deletedClient', id)
    })
   } catch (error) {
    console.log(error);
  } 
}