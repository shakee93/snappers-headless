"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Feature1 from "@/public/feat-1.png";
import Feature2 from "@/public/feat-2.png";
import Feature3 from "@/public/feat-3.png";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

interface SlideFields {
  mainHeading: string;
  subHeading: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  featureImage: typeof Feature1;
}

interface Slide {
  id: string;
  slideFields: SlideFields;
}

const slidesData: Slide[] = [
  {
    id: "2",
    slideFields: {
      mainHeading: "Enjoy Exciting Offers from Snappers",
      subHeading: "Minimum order amount Rs.3500 T&C",
      buttonText: "Go to Deals",
      buttonLink: "/xiaomi/xiaomi-redmi-note-12-pro-8gb-256gb",
      backgroundImage: "bg-slide-bg-1",
      featureImage: Feature1,
    },
  },
  {
    id: "3",
    slideFields: {
      mainHeading: "Join Now, Receive Rs.200 Cashback.",
      subHeading: "Limited Time Offer",
      buttonText: "",
      buttonLink:
        "",
      backgroundImage: "bg-slide-bg-2",
      featureImage: Feature2,
    },
  },
  {
    id: "4",
    slideFields: {
      mainHeading: "10% off (max 500LKR) on orders over 3000LKR.",
      subHeading: "Don't wait, offer ends shortly!",
      buttonText: "Order Now",
      buttonLink: "/collections/all",
      backgroundImage: "bg-slide-bg-3",
      featureImage: Feature3,
    },
  },
];

const Slide: React.FC<Slide> = ({ slideFields }) => {
  return (
    <div className={` ${slideFields.backgroundImage} bg-cover h-[380px] w-full p-10 rounded-lg flex`}>
      <div className="w-3/4 flex flex-col justify-center gap-5">
        <h1 className="text-5xl font-bold">{slideFields.mainHeading}</h1>
        <h2 className="text-2xl">{slideFields.subHeading}</h2>
        <Link href={slideFields.buttonLink} className="bg-snap_blue w-max text-white px-5 py-2 rounded-lg">{slideFields.buttonText}</Link>
      </div>
      <div className="w-1/4 flex justify-center items-center">
        I
        <Image
          src={slideFields.featureImage}
          alt={slideFields.subHeading}
          width={500}
          height={500}
          className="w-96"
        />
      </div>
    </div>
    // <div style={{ backgroundColor: slideFields.backgroundColor, padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
    //   <h1>{slideFields.mainHeading}</h1>
    //   <h2>{slideFields.subHeading}</h2>
    //   <img src={slideFields.featureImage.sourceUrl} alt={slideFields.subHeading} style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }} />
    //   <a href={slideFields.buttonLink} className="btn" style={{ display: 'inline-block', marginTop: '10px', padding: '10px 20px', backgroundColor: '#000', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
    //     {slideFields.buttonText}
    //   </a>
    // </div>
  );
};

const HeroSlides: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = slidesData.length;
  const autoPlayRef = useRef<any>();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  return (
    <div className="carousel flex w-full relative">
      <button onClick={prevSlide} className="carousel-control prev">
        <FaChevronCircleLeft className="absolute -left-3" />
      </button>
      <div className="carousel-content">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <Slide {...slide} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-control next">
        <FaChevronCircleRight className="absolute -right-3" />
      </button>
    </div>
  );
};

export default HeroSlides;
