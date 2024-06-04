import React from "react";
import Feat1 from "@/public/best-offers.svg";
import Feat2 from "@/public/easy-return.svg";
import Feat3 from "@/public/free-delivery.svg";
import Feat4 from "@/public/choices.svg";
import Image from "next/image";

interface Props {}

const features = [
  {
    feature: "Best prices & Offers",
    description: "Minimum order: Rs.3000",
    image: Feat1,
    background: "bg-[#EDFFEC]"
  },
  {
    feature: "Free delivery",
    description: "Colombo and suburbs only",
    image: Feat3,
    background: "bg-[#FFF2FF]"
  },
  {
    feature: "Easy returns",
    description: "Within 24 hours",
    image: Feat2,
    background: "bg-[#E8F5FF]"
  },
  {
    feature: "Variety of choices",
    description: "Incredible bargain",
    image: Feat4,
    background: "bg-[#FBFFE0]"
  },
];

function HeroFeaturesSection(props: Props) {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="text-base text-white bg-snap_blue p-2 text-center rounded-xl font-medium">What We Provide?</div>
      <div className="grid gap-2">
        {features.map((feature, index) => (
          <div key={index} className={`${feature.background} rounded-lg`}>
            <div className={`flex gap-1 h-[70px]  px-4 `}> 
              <div className="h-full w-10 flex items-center">
                <Image
                  src={feature.image.src}
                  alt={feature.feature}
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <div className="font-bold text-base leading-none">{feature.feature}</div>
                <div className="text-sm">{feature.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroFeaturesSection;
