import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    totalProductsAmount:
      JSON.parse(localStorage.getItem("totalProductsAmount")) || 0,
    totalProductsPrice:
      JSON.parse(localStorage.getItem("totalProductsPrice")) || 0,
    totalProductsOldPrice:
      JSON.parse(localStorage.getItem("totalProductsOldPrice")) || 0,
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
        state.totalProductsOldPrice +=
          action.payload.oldPrice * action.payload.amount;
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
          discount: action.payload.discount,
          numberOfProducts: action.payload.numberOfProducts,
          amount: action.payload.amount,
        });
        state.totalProductsAmount += action.payload.amount;
        state.totalProductsPrice +=
          action.payload.price * action.payload.amount;
        state.totalProductsOldPrice +=
          action.payload.oldPrice * action.payload.amount;
      }

      const saveCart = JSON.stringify(state.cart);
      localStorage.setItem("cart", saveCart);
      const saveTotalProductsAmount = JSON.stringify(state.totalProductsAmount);
      localStorage.setItem("totalProductsAmount", saveTotalProductsAmount);
      const saveTotalProductsPrice = JSON.stringify(state.totalProductsPrice);
      localStorage.setItem("totalProductsPrice", saveTotalProductsPrice);
      const saveTotalProductsOldPrice = JSON.stringify(
        state.totalProductsOldPrice,
      );
      localStorage.setItem("totalProductsOldPrice", saveTotalProductsOldPrice);
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
        state.totalProductsOldPrice -= action.payload.totalOldPrice;
      } else {
        productAlreadyExists.amount -= action.payload.amount;
        productAlreadyExists.totalPrice -= action.payload.totalPrice;
        state.totalProductsAmount -= action.payload.amount;
        state.totalProductsPrice -= action.payload.totalPrice;
        state.totalProductsOldPrice -= action.payload.totalOldPrice;
      }

      const saveCart = JSON.stringify(state.cart);
      localStorage.setItem("cart", saveCart);
      const saveTotalProductsAmount = JSON.stringify(state.totalProductsAmount);
      localStorage.setItem("totalProductsAmount", saveTotalProductsAmount);
      const saveTotalProductsPrice = JSON.stringify(state.totalProductsPrice);
      localStorage.setItem("totalProductsPrice", saveTotalProductsPrice);
      const saveTotalProductsOldPrice = JSON.stringify(
        state.totalProductsOldPrice,
      );
      localStorage.setItem("totalProductsOldPrice", saveTotalProductsOldPrice);
    },

    modifyCartAmount(state, action) {
      const productAlreadyExists = state.cart.find((product) => {
        return (
          product.id === action.payload[0].id &&
          product.sizeNumber === action.payload[0].sizeNumber &&
          product.colorName === action.payload[0].colorName
        );
      });

      switch (action.payload[1]) {
        case "-":
          if (productAlreadyExists.amount > 1) {
            productAlreadyExists.amount--;
            productAlreadyExists.totalPrice -= action.payload[0].price;
            productAlreadyExists.totalOldPrice -= action.payload[0].oldPrice;
            state.totalProductsAmount--;
            state.totalProductsPrice -= action.payload[0].price;
            state.totalProductsOldPrice -= action.payload[0].oldPrice;
          }

          break;
        case "+":
          if (
            productAlreadyExists.amount < action.payload[0].numberOfProducts
          ) {
            productAlreadyExists.amount++;
            productAlreadyExists.totalPrice += action.payload[0].price;
            productAlreadyExists.totalOldPrice += action.payload[0].oldPrice;
            state.totalProductsAmount++;
            state.totalProductsPrice += action.payload[0].price;
            state.totalProductsOldPrice += action.payload[0].oldPrice;
          }

          break;
        default:
          return null;
      }

      const saveCart = JSON.stringify(state.cart);
      localStorage.setItem("cart", saveCart);
      const saveTotalProductsAmount = JSON.stringify(state.totalProductsAmount);
      localStorage.setItem("totalProductsAmount", saveTotalProductsAmount);
      const saveTotalProductsPrice = JSON.stringify(state.totalProductsPrice);
      localStorage.setItem("totalProductsPrice", saveTotalProductsPrice);
      const saveTotalProductsOldPrice = JSON.stringify(
        state.totalProductsOldPrice,
      );
      localStorage.setItem("totalProductsOldPrice", saveTotalProductsOldPrice);
    },
  },
});

export const { addToCart, removeFromCart, modifyCartAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
