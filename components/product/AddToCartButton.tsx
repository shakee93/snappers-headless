"use client"
import React, { useState } from "react";
import { HiShoppingBag } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";

interface AddToCartButtonProps {
  isInStock: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ isInStock }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (isInStock) {
      setQuantity(1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  const handleDelete = () => {
    setQuantity(0);
  };

  return (
    <div className="flex justify-center items-center text-sm py-2 mt-3">
      {quantity === 0 ? (
        <button
          className={`py-2 h-[35px] px-4 rounded-3xl w-full bg-snap_blue text-white flex justify-center items-center gap-2 ${
            isInStock ? "opacity-1" : "opacity-50"
          }`}
          onClick={handleAddToCart}
          disabled={!isInStock}
        >
          <HiShoppingBag className="text-snap_yellow text-base" /> Add to Cart
        </button>
      ) : (
        <div className="rounded-3xl  w-full text-white flex justify-between items-center">
          {quantity === 1 ? (
            <button
              className="bg-snap_blue h-[35px] w-full text-snap_yellow py-2 px-2 rounded-l-3xl flex justify-center items-center"
              onClick={handleDelete}
            >
              <HiTrash className="text-base " />
            </button>
          ) : (
            <button
              className="bg-snap_blue h-[35px] w-full text-snap_yellow py-2 px-2 rounded-l-3xl"
              onClick={handleDecrement}
            >
              -
            </button>
          )}
          <span className="bg-snap_blue h-[35px] w-full text-center py-2 px-4">
            {quantity}
          </span>
          <button
            className="bg-snap_blue w-full h-[35px] text-snap_yellow py-2 px-2 rounded-r-3xl"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
