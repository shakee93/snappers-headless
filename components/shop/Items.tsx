import * as React from "react"
import productsData from "@/data/products";
import ProductCardTwo from "@/components/product/ProductCardTwo";


export function ItemSlides() {
    return (
        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {productsData.map((product, index) => (
                    <ProductCardTwo key={index} product={product} />
                ))}
            </div>


        </>
    )
}
