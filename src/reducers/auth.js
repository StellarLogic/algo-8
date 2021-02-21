import constants from "../constants";

const initialState = {
  isAuthenticated: false,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SIGN_IN:
      return { ...state, isAuthenticated: true };
    case constants.SIGN_OUT:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
};

export default auth;
