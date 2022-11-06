import axios from "axios";
import * as actions from "./actions";

const fetchStart = () => {
  return {
    type: actions.FETCH_START,
  };
};
const fetchSuccess = (products) => {
  return {
    type: actions.FETCH_SUCCESS,
    payload: products,
  };
};

const fetchError = (error) => {
  return {
    type: actions.FETCH_FAIL,
    payload: error.message,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      let data = res.data;
      dispatch(fetchSuccess(data));
    } catch (e) {
      dispatch(fetchError());
    }
  };
};
