"use client";

import * as React from "react";
import productsData from "@/data/products";
import Autoplay from "embla-carousel-autoplay";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel3";
import ProductCardTwo from "@/components/product/ProductCardTwo";

export function ProductSlide() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <Carousel
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {productsData.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <ProductCardTwo product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
