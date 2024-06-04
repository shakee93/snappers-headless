import React from "react";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

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

  return (
    <div className="product-card-1 bg-white w-[230px] p-2  rounded-xl">
      <div className="rounded-xl border-[1px] hover:shadow-xl p-3 shadow-md shadow-gray-300">
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
              className={`px-2 py-1 rounded-xl text-xs ${
                isInStock
                  ? "text-[#2DC90F] bg-[#DBFBD6]"
                  : "text-[#ff5722] bg-[#ffeee8]"
              }`}
            >
              {product.stockStatus}
            </div>
            <div className="flex flex-col items-end">
              <div className="text-[#ff5722] text-[13px]">
                <s>Rs. {product.priceBeforeDiscount.toFixed(2)}</s>
              </div>
              <div>Rs. {product.priceAfterDiscount.toFixed(2)}</div>
            </div>
          </div>
          <div>
            <AddToCartButton isInStock={isInStock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardTwo;
