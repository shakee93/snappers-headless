"use client"
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface WishlistButtonProps {
  isInWishlist: boolean;
  onToggleWishlist: () => void;
  loading?: boolean;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({
  isInWishlist,
  onToggleWishlist,
  loading = false,
}) => {
  return (
    <button
      className="flex items-center gap-1 text-red-500 focus:outline-none"
      onClick={onToggleWishlist}
      disabled={loading}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V2.5a.5.5 0 011 0V4a8 8 0 01-8 8z"
          ></path>
        </svg>
      ) : isInWishlist ? (
        <FaHeart className="text-red-500 text-xl" />
      ) : (
        <FaRegHeart className="text-red-500 text-xl" />
      )}
    </button>
  );
};

export default WishlistButton;
