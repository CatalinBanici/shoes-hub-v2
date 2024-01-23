import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    totalProductsAmount:
      JSON.parse(localStorage.getItem("totalProductsAmount")) || 0,
    totalProductsPrice:
      JSON.parse(localStorage.getItem("totalProductsPrice")) || 0,
  },
  reducers: {
    addToCart(state, action) {
      const productAlreadyExists = state.cart.find((product) => {
        return (
          product.id === action.payload.id &&
          product.sizeNumber === action.payload.sizeNumber &&
          product.colorName === action.payload.colorName
        );
      });

      if (productAlreadyExists) {
        productAlreadyExists.amount += action.payload.amount;
        productAlreadyExists.totalPrice +=
          action.payload.price * action.payload.amount;
        state.totalProductsAmount += action.payload.amount;
        state.totalProductsPrice +=
          action.payload.price * action.payload.amount;
      } else {
        state.cart.push({
          id: action.payload.id,
          name: action.payload.name,
          img: action.payload.img,
          sizeNumber: action.payload.sizeNumber,
          colorName: action.payload.colorName,
          colorValue: action.payload.colorValue,
          colorImage: action.payload.colorImage,
          price: action.payload.price,
          oldPrice: action.payload.oldPrice,
          totalPrice: action.payload.totalPrice * action.payload.amount,
          totalOldPrice:
            action.payload.totalOldPrice &&
            action.payload.totalOldPrice * action.payload.amount,
          amount: action.payload.amount,
        });
        state.totalProductsAmount += action.payload.amount;
        state.totalProductsPrice +=
          action.payload.price * action.payload.amount;
      }

      const saveCart = JSON.stringify(state.cart);
      localStorage.setItem("cart", saveCart);
      const saveTotalProductsAmount = JSON.stringify(state.totalProductsAmount);
      localStorage.setItem("totalProductsAmount", saveTotalProductsAmount);
      const saveTotalProductsPrice = JSON.stringify(state.totalProductsPrice);
      localStorage.setItem("totalProductsPrice", saveTotalProductsPrice);
    },

    removeFromCart(state, action) {
      const productAlreadyExists = state.cart.find((product) => {
        return (
          product.id === action.payload.id &&
          product.sizeNumber === action.payload.sizeNumber &&
          product.colorName === action.payload.colorName
        );
      });

      if (productAlreadyExists) {
        state.cart = state.cart.filter(
          (product) =>
            product.id !== action.payload.id ||
            product.sizeNumber !== action.payload.sizeNumber ||
            product.colorName !== action.payload.colorName,
        );
        state.totalProductsAmount -= action.payload.amount;
        state.totalProductsPrice -= action.payload.totalPrice;
      } else {
        productAlreadyExists.amount -= action.payload.amount;
        productAlreadyExists.totalPrice -= action.payload.totalPrice;
        state.totalProductsAmount -= action.payload.amount;
        state.totalProductsPrice -= action.payload.totalPrice;
      }

      const saveCart = JSON.stringify(state.cart);
      localStorage.setItem("cart", saveCart);
      const saveTotalProductsAmount = JSON.stringify(state.totalProductsAmount);
      localStorage.setItem("totalProductsAmount", saveTotalProductsAmount);
      const saveTotalProductsPrice = JSON.stringify(state.totalProductsPrice);
      localStorage.setItem("totalProductsPrice", saveTotalProductsPrice);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
