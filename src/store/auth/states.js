const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
const initialState = user
  ? {
      status: { loggedIn: true },
      user: {
          user
      }
    }
  : { status: { loggedIn: false }, user: null };

export default () => ({
  initialState,
});
