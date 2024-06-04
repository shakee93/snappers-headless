"use client"
import React, { useState } from "react";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import WishlistButton from "./WishlistButton";

interface Product {
  productName: string;
  priceBeforeDiscount: number;
  priceAfterDiscount: number;
  productImage: string;
  savedAmount: number;
  stockStatus: string;
}

interface Props {
  product: Product;
}

const ProductCardTwo: React.FC<Props> = ({ product }) => {
  const isInStock = product.stockStatus.toLowerCase() === "in stock";
  const savedAmount = product.priceBeforeDiscount - product.priceAfterDiscount;
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  const handleToggleWishlist = () => {
    setWishlistLoading(true); // Set loading state while processing the action
    // Simulate API call to toggle wishlist status (replace with actual API call)
    setTimeout(() => {
      setIsInWishlist((prevState) => !prevState);
      setWishlistLoading(false);
    }, 1000);
  };

  return (
    <div className="product-card-1 bg-white w-[230px] p-1 rounded-xl">
      <div className="rounded-xl relative border-[1px] hover:shadow-xl p-4 shadow-md shadow-gray-300">
        <div className="flex flex-col gap">
          <div className="w-full border-dashed border-b-2">
            <Image
              src={product.productImage}
              alt={product.productName}
              height={300}
              width={300}
              className="object-scale-down h-40 w-full"
            />
          </div>
          <div className="pt-2">
            <h2 className="font-medium leading-tight text-center text-base h-[50px] px-2">
              {product.productName}
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div
              className={`px-2 py-1 font-semibold min-w-max rounded-xl text-xs ${
                isInStock
                  ? "text-[#2DC90F] border-[1px] border-[#2DC90F] bg-[#DBFBD6]"
                  : "text-[#ff5722] border-[1px] border-[#ff5722] bg-[#ffeee8]"
              }`}
            >
              {product.stockStatus}
            </div>
            <div className="flex flex-col items-end gap-0">
              <div className="text-[#ff5722] text-[13px] font-medium">
                <s>Rs. {product.priceBeforeDiscount.toFixed(2)}</s>
              </div>
              <div className="font-bold leading-none min-w-max">
                Rs. {product.priceAfterDiscount.toFixed(2)}
              </div>
            </div>
          </div>
          <div>
            <AddToCartButton isInStock={isInStock} />
          </div>
        </div>
        {savedAmount > 0 && (
          <div className="absolute rounded-xl bg-snap_yellow flex flex-col justify-center items-center p-2 top-3 font-medium">
            <div className="text-xs">Save</div>
            <div className="text-xs font-bold">Rs. {savedAmount.toFixed(2)}</div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <WishlistButton
            isInWishlist={isInWishlist}
            onToggleWishlist={handleToggleWishlist}
            loading={wishlistLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardTwo;
