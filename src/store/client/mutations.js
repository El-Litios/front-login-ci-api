export const setClient = (state, payload) => {
  state.client = payload;
};

export const deletedClient = (state, payload) => {
  state.client = Object.values(state.client).filter((c) => c.id !== payload);
};
