import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartInitialState = { 
  items: [], 
  total: 0,
  count: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItemsAdd = [...state.items, action.payload];
      return {
        ...state,
        items: newItemsAdd,
        total: newItemsAdd.reduce((acc, item) => acc + item.price, 0),
        count: newItemsAdd.length
      };
    case 'REMOVE_ITEM':
      const newItemsRemove = state.items.filter((item) => item.id !== action.id);
      return {
        ...state,
        items: newItemsRemove,
        total: newItemsRemove.reduce((acc, item) => acc + item.price, 0),
        count: newItemsRemove.length
      };
    case 'CLEAR_CART':
      return cartInitialState;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
