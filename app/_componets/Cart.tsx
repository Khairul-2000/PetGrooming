"use client";

import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from "../_context/CartContext";

const Cart = () => {
  const { setShowCart } = useContext(CartContext);
  return (
    <div className="absolute -right-8 top-7 z-30 h-[800px] w-[500px] rounded-xl bg-white">
      <div className="flex flex-row items-center justify-between p-5">
        <h1 className="text-left">Cart</h1>
        <RxCross2
          color="black"
          className="cursor-pointer"
          onClick={() => setShowCart(false)}
          size={25}
        />
      </div>
      <hr className="w-full" />
      <div className="flex h-full flex-col items-center justify-center text-center">
        No item in cart
      </div>
    </div>
  );
};

export default Cart;
