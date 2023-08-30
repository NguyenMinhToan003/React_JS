// import { root } from "npm";

const initState = {
  users: [
    { id: 1, name: "Toan" },
    { id: 2, name: "Nguyen" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case `DELETE_USER`:
      let user = state.users;
      user = user.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        user,
      };

    default:
      return state;
  }
};
export default rootReducer;
