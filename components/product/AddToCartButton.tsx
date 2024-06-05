"use client";
import React from "react";
import { HiShoppingBag } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";

interface AddToCartButtonProps {
  isInStock: boolean;
  quantity: number;
  handleAddToCart: () => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleDelete: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  isInStock,
  quantity,
  handleAddToCart,
  handleIncrement,
  handleDecrement,
  handleDelete
}) => {
  return (
    <div className="flex justify-center items-center min-w-36 text-sm py-2">
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
        <div className="rounded-3xl w-full text-white flex justify-between items-center">
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
