export const isCarted = (cart = [], product) => {
  let foundProduct = cart.find((p) => p.id === product.id);
  if (foundProduct) {
    return true;
  } else {
    return false;
  }
};
