import { CartToggle } from "@/components/global/CartToggle";
import CategoriesTabs from "@/components/global/CategoriesTabs";
import { CategorySlides } from "@/components/homepage/CategorySlides";
import HeroSlides from "@/components/homepage/HeroSlides";
import { OfferSlides } from "@/components/homepage/OfferSlides";
import { ItemSlides } from "@/components/shop/Items";
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
import ProductSearch from "@/components/global/ProductSearch";

export default function Shop() {
  return (
    <main className="">

      <div className="fixed bottom-4 right-4">
        <CartToggle></CartToggle>
      </div>

      <div className="flex flex-row gap-2">

        <div className="flex gap-5 h-fit">
          <div className="w-[220px] bg-white/90 border-[1.5px] p-4 rounded-lg shadow-2xl shadow-[#E5E5E5]">
            <CategoriesTabs categories={categoriesData} isAbsolute={false}/>
          </div>
        </div>


        <div
          className="flex gap-5 p-5 bg-white border-[1.5px] rounded-xl"
        >
          <div className="w-full">
            <ItemSlides />
          </div>

        </div>

      </div>



    </main>
  );
}
