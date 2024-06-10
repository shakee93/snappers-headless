"use client";

import * as React from "react";
import productsData from "@/data/products";
import ProductCardThree from "@/components/product/ProductCardThree";

const VerticalProductGrid: React.FC = () => {
  // Adjust the number of rows to display here
  const maxRows = 3;

  return (
    <div className="grid grid-cols-1 gap-2 p-3 bg-white rounded-2xl shadow-lg">
      {productsData.slice(0, maxRows).map((product, index) => (
        <div key={index} className="p-1">
          <ProductCardThree product={product} />
        </div>
      ))}
    </div>
  );
};

export default VerticalProductGrid;
