"use client";

import React, { createContext, PropsWithChildren, useState } from "react";

interface CartContextType {
  cart: number;
  setCart: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartContextContainer = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState(0);
  const contextValue = { cart, setCart };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextContainer;
