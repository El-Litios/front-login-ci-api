export const loginSuccess = (state, payload) => {
  state.initialState.status.loggedIn = true;
  state.initialState.user = payload;
};

export const loginFail = (state) => {
  state.initialState.status.loggedIn = false
  state.initialState.user = null
  
};

export const logout = (state) => {
    state.initialState.status.loggedIn = false;
    state.initialState.user = null;
}
