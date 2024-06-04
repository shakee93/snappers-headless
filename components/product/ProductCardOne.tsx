import React from "react";
import Image from "next/image";

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

const ProductCardOne: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card-1 bg-white  w-[230px] p-3 rounded-xl">
      <div className="border-2 rounded-xl border-dashed p-1">
        <div className="flex gap">
          <div className="w-full ">
            <Image
              src={product.productImage}
              alt={product.productName}
              height={300}
              width={300}
              className="object-scale-down h-28 w-28"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="px-2 py-1 text-[#ACACAC]">
              <s>Rs.{product.priceBeforeDiscount.toFixed(2)}</s>
            </p>
            <p className="bg-red-500 text-base px-3 py-1 w-max rounded-2xl text-white">
              Rs.{product.priceAfterDiscount.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="pt-2">
          <h2 className="font-medium leading-tight text-center text-base h-[50px] px-2">
            {product.productName}
          </h2>
        </div>
      </div>
      {/* <p>You Save: ${product.savedAmount.toFixed(2)}</p>
      <p>Status: {product.stockStatus}</p> */}
    </div>
  );
};

export default ProductCardOne;
