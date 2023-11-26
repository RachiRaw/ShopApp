export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  const itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  state.itemsPrice = addDecimals(itemsPrice);

  const shippingPrice = state.itemsPrice > 100 ? 0 : 20;
  state.shippingPrice = addDecimals(shippingPrice);

  const taxPrice = 0.12 * state.itemsPrice;
  state.taxPrice = addDecimals(taxPrice);
  console.log;

  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  state.totalPrice = addDecimals(totalPrice);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
