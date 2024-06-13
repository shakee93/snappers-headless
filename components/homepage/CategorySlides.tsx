import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel2";
import mainCategories from "@/data/main_categories"; // Update the import path accordingly
import Image from "next/image";

export function CategorySlides() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Object.entries(mainCategories).map(([key, category]) => (
          <CarouselItem key={key} className="md:basis-1/2 lg:basis-2/12">
            <div className="p-1">
              <a href={category.link}>
                <Card>
                  <CardContent
                    className="flex aspect-square items-center flex-col gap-4 justify-center p-6 relative"
                    style={{ backgroundColor: category.bgColor }}
                  >
                    <Image
                      src={category.image}
                      alt={key}
                      className="w-auto h-20"
                    />
                    <div className="">
                      <span className="text-lg font-semibold">{key}</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
