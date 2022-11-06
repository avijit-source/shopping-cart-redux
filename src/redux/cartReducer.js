const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let p = action.payload;
      let cart = [...state.cart];
      var foundItem = cart.find((pr) => pr.id === p.id);
      let total = state.total;

      if (!foundItem || foundItem === undefined) {
        foundItem = { ...p, qty: 1 };
        cart = [...state.cart, { ...foundItem }];
        total = Math.ceil(
          Number(state.total) + Number(foundItem.price) * Number(foundItem.qty)
        );
      } else {
        total = Math.ceil(Number(state.total) + Number(foundItem.price));
        let qty = +foundItem.qty;
        foundItem = { ...foundItem, qty: ++qty };
        let idx = cart.findIndex((it) => it.id === foundItem.id);
        cart.splice(idx, 1, foundItem);
      }
      return {
        cart: [...cart],
        total: total,
      };

    case "REMOVE_FROM_CART":
      let found = state.cart.find((pr) => pr.id === action.payload.id);
      let filtered;
      let filteredTotal = +state.total;
      if (found.qty === 1) {
        filtered = state.cart.filter((item) => item.id !== action.payload.id);
        if (filtered.length < 1) {
          filteredTotal = 0;
        } else {
          console.log(filteredTotal);

          filteredTotal =
            Number(filteredTotal) -
            Math.ceil(Number(found.price)) * Number(found.qty);
        }
      } else {
        found = { ...found, qty: found.qty - 1 };
        filtered = state.cart.map((item) => {
          if (item.id === found.id) {
            return found;
          }
          return item;
        });
        filteredTotal =
          Number(filteredTotal) - Math.ceil(Number(action.payload.price));
      }
      return { cart: filtered, total: Math.ceil(filteredTotal) };

    case "REMOVE_CART_ITEM":
      let found2 = state.cart.find((pr) => pr.id === action.payload.id);
      const totalminus = Number(found2.qty) * Number(Math.ceil(found2.price));
      let filtered2 = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      let total2 = state.total - totalminus;
      return { cart: [...filtered2], total: total2 };
    default:
      return state;
  }
};

export default cartReducer;
