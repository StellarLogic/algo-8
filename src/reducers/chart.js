import chartData from "../assets/data";
import constants from "../constants";

const initialState = {
  data: chartData,
  default: null,
};

const chart = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_DEFAULT:
      return { ...state, default: payload };
    default:
      return state;
  }
};

export default chart;
