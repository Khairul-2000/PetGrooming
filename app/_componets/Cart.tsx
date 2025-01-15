"use client";

import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from "../_context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { setShowCart } = useContext(CartContext);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="fixed right-3 top-7 z-30 h-[900px] w-[500px] rounded-xl bg-white">
          <div className="flex flex-row items-center justify-between p-5 px-10">
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Cart;
