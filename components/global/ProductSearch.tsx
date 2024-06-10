"use client";

import * as React from "react";
import { useState } from "react";
import productsData from "@/data/products";
import AddToCartButton from "@/components/product/AddToCartButton";
import WishlistButton from "@/components/product/WishlistButton";
import ProductPopup from "@/components/product/ProductPopup";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@radix-ui/react-dialog";
import Image from "next/image";

const ProductSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartQuantities, setCartQuantities] = useState<{ [key: string]: number }>({});
  const [wishlistState, setWishlistState] = useState<{ [key: string]: boolean }>({});
  const [wishlistLoading, setWishlistLoading] = useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = productsData.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (productId: string) => {
    setCartQuantities(prevState => ({
      ...prevState,
      [productId]: 1,
    }));
  };

  const handleIncrement = (productId: string) => {
    setCartQuantities(prevState => ({
      ...prevState,
      [productId]: prevState[productId] + 1,
    }));
  };

  const handleDecrement = (productId: string) => {
    setCartQuantities(prevState => ({
      ...prevState,
      [productId]: Math.max(prevState[productId] - 1, 0),
    }));
  };

  const handleDelete = (productId: string) => {
    setCartQuantities(prevState => ({
      ...prevState,
      [productId]: 0,
    }));
  };

  const toggleWishlist = (productId: string) => {
    setWishlistLoading(true);
    setTimeout(() => {
      setWishlistState(prevState => ({
        ...prevState,
        [productId]: !prevState[productId],
      }));
      setWishlistLoading(false);
    }, 1000);
  };

  return (
    <div className="relative product-search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search products..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      {searchTerm && (
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-96 overflow-y-auto">
          <div className="grid grid-cols-1 gap-4 p-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.SKU} className="p-1 border rounded-md shadow-sm">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex items-center cursor-pointer">
                        <Image
                          src={product.productImage}
                          alt={product.productName}
                          width={300}
                          height={300}
                          className="h-16 w-16 object-cover rounded-md"
                        />
                        <div className="flex-1 ml-4">
                          {product.productName}
                        </div>
                      </div>
                    </DialogTrigger>
                      <ProductPopup
                        product={product}
                        isInWishlist={wishlistState[product.SKU] || false}
                        wishlistLoading={wishlistLoading}
                        toggleWishlist={() => toggleWishlist(product.SKU)}
                        quantity={cartQuantities[product.SKU] || 0}
                        handleAddToCart={() => handleAddToCart(product.SKU)}
                        handleIncrement={() => handleIncrement(product.SKU)}
                        handleDecrement={() => handleDecrement(product.SKU)}
                        handleDelete={() => handleDelete(product.SKU)}
                      />
                    
                  </Dialog>
                </div>
              ))
            ) : (
              <div className="p-2 text-center text-gray-500">
                No products found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
