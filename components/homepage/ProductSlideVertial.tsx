"use client";

import * as React from "react";
import productsData from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel2";
import ProductCardThree from "@/components/product/ProductCardThree";
import Autoplay from "embla-carousel-autoplay";

export function ProductSlideVertical() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full h-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        plugins={[plugin.current]}
        orientation="vertical"
        className="w-full h-full"
      >
        <CarouselContent className=" h-[200px]">
          {productsData.map((product, index) => (
            <CarouselItem key={index} className="pt-1 basis-1/4">
              <div className="p-1">
                <ProductCardThree product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
