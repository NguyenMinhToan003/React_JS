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
      let nowListUser = state.users;
      if (nowListUser && nowListUser.length >= 0) {
        nowListUser = nowListUser.filter(
          (item) => item.id !== action.payload.id
        );
      } else return state;

      return {
        ...state,
        nowListUser,
      };

    default:
      return state;
  }
};
export default rootReducer;
