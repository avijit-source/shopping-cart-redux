export const addCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};
