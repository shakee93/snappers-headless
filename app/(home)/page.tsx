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
import FeatureDeals from "@/public/deals-feature.png";
import SectionHeader from "@/components/global/SectionHeader";

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
        <div className="p-5 w-2/12 border-[1.5px] rounded-lg bg-[#548C2F]">
          <Image
            src={FeatureDeals}
            alt=""
            width={500}
            height={600}
            className="w-full h-auto "
          />
        </div>
        <div className="w-9/12">
          <SectionHeader
            className="categories-heading"
            content={<div>Best <span className="text-[#EA4B02]">Deals</span> for you</div>} 
          />

          <ProductSlide />
        </div>
      </div>
      <div className="p-5 border-[1.5px] rounded-lg flex gap-5">
        <div className="w-1/3 flex gap-5 p-5 flex-col">
          <div>
            {" "}
            <div>
              <SectionHeader
                className="3-section-heading"
                content="Top Selling"
              />
              {/* More content */}
            </div>
          </div>
          <div>
            <ProductSlideVertial />
          </div>
        </div>
        <div className="w-1/3 flex gap-5 p-5 flex-col">
          <div>
            <SectionHeader
              className="3-section-heading"
              content="Trending Products"
            />
          </div>
          <div>
            <ProductSlideVertial />
          </div>
        </div>
        <div className="w-1/3 flex gap-5 p-5 flex-col">
          <div>
            <SectionHeader
              className="3-section-heading"
              content="Recently Added"
            />
          </div>
          <div>
            <ProductSlideVertial />
          </div>
        </div>
      </div>
      <div className="">
        <NewsletterSection />
      </div>
      <div className="p-10 w-full h-full border-[1.5px] rounded-lg flex flex-col gap-5 mb-28">
        <div>
          <SectionHeader
            className="categories-heading"
            content="Our Categories"
          />
        </div>
        <div className="">
          <CategorySlides />
        </div>
      </div>
    </main>
  );
}
