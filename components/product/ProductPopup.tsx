import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import WishlistButton from "./WishlistButton";

interface ProductPopupProps {
  product: {
    productName: string;
    SKU: string;
    priceBeforeDiscount: number;
    priceAfterDiscount: number;
    productImage: string;
    savedAmount: number;
    stockStatus: string;
    category: string[];
  };
  isInWishlist: boolean;
  wishlistLoading: boolean;
  toggleWishlist: () => void;
  quantity: number;
  handleAddToCart: () => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleDelete: () => void;
}

const ProductPopup: React.FC<ProductPopupProps> = ({
  product,
  isInWishlist,
  wishlistLoading,
  toggleWishlist,
  quantity,
  handleAddToCart,
  handleIncrement,
  handleDecrement,
  handleDelete
}) => {
  const isInStock = product.stockStatus.toLowerCase() === "in stock";
  const savedAmount = product.priceBeforeDiscount - product.priceAfterDiscount;

  return (
    <DialogContent className="bg-white/90">
      <div className="relative grid grid-cols-12 gap-4">
        <div className="col-span-5 border-2 border-dashed bg-white rounded-2xl">
          <Image
            src={product.productImage}
            alt={product.productName}
            height={300}
            width={300}
            className="object-scale-down h-56 w-full"
          />
        </div>
        {savedAmount > 0 && (
          <div className="absolute rounded-xl bg-snap_yellow flex flex-col justify-center items-center p-2 top-2 left-2 font-medium">
            <div className="text-xs">Save</div>
            <div className="text-xs font-bold">
              Rs. {savedAmount.toFixed(2)}
            </div>
          </div>
        )}
        <div className="col-span-7">
        <div className="text-xs text-gray-500">SKU: {product.SKU}</div>
          <div className="font-bold text-xl">{product.productName}</div>
          
          <div className="text-sm text-gray-500">
            Categories: {product.category.join(", ")}
          </div>
          <div
            className={`px-2 py-1 font-semibold min-w-max max-w-max rounded-xl text-sm my-2 ${
              isInStock
                ? "text-[#2DC90F] border-[1px] border-[#2DC90F] bg-[#DBFBD6]"
                : "text-[#ff5722] border-[1px] border-[#ff5722] bg-[#ffeee8]"
            }`}
          >
            {product.stockStatus}
          </div>
          <div className="flex flex-col gap-0">
            <div className="text-[#ff5722] text-base font-medium">
              <s>Rs. {product.priceBeforeDiscount.toFixed(2)}</s>
            </div>
            <div className="font-bold text-lg leading-none min-w-max">
              Rs. {product.priceAfterDiscount.toFixed(2)}
            </div>
          </div>
          <div className="flex items-center gap-4 pt-3">
            <AddToCartButton
              isInStock={isInStock}
              quantity={quantity}
              handleAddToCart={handleAddToCart}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
            />
            <WishlistButton
              isInWishlist={isInWishlist}
              onToggleWishlist={toggleWishlist}
              loading={wishlistLoading}
            />
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default ProductPopup;
