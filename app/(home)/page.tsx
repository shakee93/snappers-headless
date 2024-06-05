import { CartToggle } from "@/components/global/CartToggle";
import CategoriesTabs from "@/components/global/CategoriesTabs";
import { CategorySlides } from "@/components/homepage/CategorySlides";
import HeroSlides from "@/components/homepage/HeroSlides";
import { OfferSlides } from "@/components/homepage/OfferSlides";
import { ProductSlide } from "@/components/homepage/ProductSlide";
import { ProductSlideVertical } from "@/components/homepage/ProductSlideVertial";
import categoriesData from "@/data/categories";
import Image from "next/image";
import NewsletterSection from "@/components/homepage/NewsletterSection";
import FeatureDeals from "@/public/deals-feature.png";
import SectionHeader from "@/components/global/SectionHeading";
import HeroFeaturesSection from "@/components/homepage/HeroFeaturesSection";
import { Button } from "@/components/ui/button";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import VerticalProductGrid from "@/components/homepage/VerticalProductGrid";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <div className="fixed bottom-4 right-4">
        <CartToggle></CartToggle>
      </div>
      <div className="flex gap-5 h-[380px] " id="hero-section">
        <div className="relative grow-0 shrink-0 w-[220px] bg-white/90 z-50 border-[1.5px] p-4 rounded-lg shadow-2xl shadow-[#E5E5E5]">
          <CategoriesTabs categories={categoriesData} />
        </div>
        <div className="w-full h-full z-40 rounded-lg shadow-2xl shadow-[#E5E5E5]">
          <HeroSlides />
        </div>
        <div className="w-4/12 shadow-2xl shadow-[#E5E5E5] bg-white/50 p-3 border-[1.5px] rounded-xl">
          <HeroFeaturesSection />
        </div>
      </div>
      <div
        className="flex gap-5 p-5 bg-gradient-to-r from-[#FF585C] to-[#F1E92A] border-[1.5px] rounded-xl"
        id="offer-section"
      >
        <div className="w-3/12 p-2 flex flex-col justify-center gap-3">
          <div className="font-bold text-2xl text-white leading-tight">
            Check out our Snap Deals
          </div>
          <div className="font-normal text-base text-white">
            Shop with Snappers
          </div>
          <Button className="bg-snap_yellow text-snap_blue text-base font-bold w-max">
            Go to Deals <FaChevronCircleRight className="ml-3" />
          </Button>
        </div>
        <div className="w-9/12">
          <OfferSlides />
        </div>
      </div>
      <div
        className="flex gap-5 p-5 border-[1.5px] rounded-xl"
        id="search-section"
      >
        <div className="w-10/12 border-[1.5px] p-2 rounded-2xl">Search </div>
        <div className="w-2/12 border-[1.5px] p-2 rounded-2xl">
          Wishlist / Deals
        </div>
      </div>
      <div className="p-5 border-[1.5px] rounded-lg flex gap-5 bg-white/50 shadow-xl" id="best-deals">
        <div className="p-5 w-3/12 border-[1.5px] rounded-lg bg-[#548C2F]">
          <Image
            src={FeatureDeals}
            alt=""
            width={300}
            height={300}
            className="w-auto m-auto h-full object-fill "
          />
        </div>
        <div className="w-9/12 bg-white/50">
          <SectionHeader
            className="categories-heading"
            content={
              <div>
                Best <span className="text-[#EA4B02]">Deals</span> for you
              </div>
            }
          />

          <ProductSlide />
        </div>
      </div>
      <div className="p-5 border-[1.5px] bg-white/50 shadow-xl rounded-xl flex gap-5">
        <div className="w-1/3 flex gap-5  flex-col">
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
            <VerticalProductGrid />
          </div>
        </div>
        <div className="w-1/3 flex gap-5 flex-col">
          <div>
            <SectionHeader
              className="3-section-heading"
              content="Trending Products"
            />
          </div>
          <div>
            <VerticalProductGrid />
          </div>
        </div>
        <div className="w-1/3 flex gap-5 flex-col">
          <div>
            <SectionHeader
              className="3-section-heading"
              content="Recently Added"
            />
          </div>
          <div>
            <VerticalProductGrid />
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
