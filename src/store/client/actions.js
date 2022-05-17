import api from "../../api/api";
import AuthHeader from "../../services/auth-header";
import router from '../../router'

export const getClients = async ({ commit }) => {
    try {
        api.get("/client", { headers: AuthHeader() }).then((res) => {
          const clientData = {
            client: res.data.client,
            message: res.data.message,
          };
          console.log(clientData);
          commit("setClient", clientData);
        });
      } catch (error) {
        console.log(error);
      }
};