import { CartToggle } from "@/components/global/CartToggle";
import CategoriesTabs from "@/components/global/CategoriesTabs";
import { CategorySlides } from "@/components/homepage/CategorySlides";
import { HeroSlides } from "@/components/homepage/HeroSlides";
import { OfferSlides } from "@/components/homepage/OfferSlides";
import { ProductSlide } from "@/components/homepage/ProductSlide";
import { ProductSlideVertial } from "@/components/homepage/ProductSlideVertial";
import categoriesData from "@/data/categories";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NewsletterSection from "@/components/homepage/NewsletterSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <div className="fixed bottom-4 right-4">
        <CartToggle></CartToggle>
      </div>
      <div className="flex gap-5 h-[375px] " id="hero-section">
        <div className="relative w-[220px] z-50 border-[1.5px] p-4 rounded-lg shadow-2xl shadow-[#E5E5E5]">
          <CategoriesTabs categories={categoriesData} />
        </div>
        <div className="w-6/12 z-40">
          <HeroSlides />
        </div>
        <div className="w-3/12 p-5 border-[1.5px] rounded-lg">
          featuer section
        </div>
      </div>
      <div
        className="flex gap-5 p-5 border-[1.5px] rounded-lg"
        id="offer-section"
      >
        <div className="w-4/12">offer Slides</div>
        <div className="w-8/12">
          <OfferSlides />
        </div>
      </div>
      <div
        className="flex gap-5 p-5 border-[1.5px] rounded-lg"
        id="search-section"
      >
        <div className="w-10/12 border-[1.5px] p-2 rounded-2xl">Search </div>
        <div className="w-2/12 border-[1.5px] p-2 rounded-2xl">
          Wishlist / Deals
        </div>
      </div>
      <div className="p-5 border-[1.5px] rounded-lg flex gap-5" id="best-deals">
        <div className="p-5 w-4/12 border-[1.5px] rounded-lg">
          Feature image
        </div>
        <div className="w-8/12">
          <ProductSlide />
        </div>
      </div>
      <div className="p-5 border-[1.5px] rounded-lg flex gap-5">
        <div className="w-1/3 flex gap-5 p-5 flex-col">
          <div>Top Selling</div>
          <div>
            <ProductSlideVertial />
          </div>
        </div>
        <div className="w-1/3 flex gap-5 p-5 flex-col">
          <div>Trending Products</div>
          <div>
            <ProductSlideVertial />
          </div>
        </div>
        <div className="w-1/3 flex gap-5 p-5 flex-col">
          <div>Recently Added</div>
          <div>
            <ProductSlideVertial />
          </div>
        </div>
      </div>
      <div className="">
        <NewsletterSection/>
      </div>
      <div className="p-10 w-full h-full border-[1.5px] rounded-lg flex flex-col gap-5 mb-28">
        <div>Category section</div>
        <div className="">
          <CategorySlides />
        </div>
      </div>
    </main>
  );
}
