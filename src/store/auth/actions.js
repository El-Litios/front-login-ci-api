import api from "../../api/api";
import router from '../../router'

export const login = async ({ commit }, user) => {
  try {
    await api
      .post("/auth/login", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        const userData = {
          accessToken: res.data.access_token,
          username: res.data.user.name,
          id: res.data.user.id,
          roleid: res.data.user.roleid,
        };
        console.log(userData);
        if (res.data.access_token) {
          localStorage.setItem("user", JSON.stringify(userData));

          commit("loginSuccess", res.data);
          router.push({ name: "Dashboard" });
        }
      });
  } catch (err) {
    commit("loginFail");
  }
};

export const logout = ({ commit }) => {
  localStorage.removeItem("user");
  commit("logout");
  router.push({ name: "Home" });
};
