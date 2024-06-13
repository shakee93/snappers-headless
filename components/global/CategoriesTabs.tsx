"use client";
import { useState } from "react";
import Image from "next/image";
import CategoryImage from "@/public/categories/icons/Categories.svg";
import Link from "next/link";

interface Category {
  link: string;
  subcategories: { [key: string]: string };
  icon: string;
}

interface Categories {
  [key: string]: Category;
}

interface CategoriesTabsProps {
  categories: Categories;
  isAbsolute: Boolean;
}

const CategoriesTabs: React.FC<CategoriesTabsProps> = ({ categories, isAbsolute }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMouseOverSubcategories, setIsMouseOverSubcategories] =
    useState<boolean>(false);

  const handleCategoryHover = (category: string) => {
    setActiveCategory(category);
  };

  const handleSubcategoriesMouseEnter = () => {
    setIsMouseOverSubcategories(true);
  };

  const handleSubcategoriesMouseLeave = () => {
    setIsMouseOverSubcategories(false);
  };

  const handleMouseLeave = () => {
    if (!isMouseOverSubcategories) {
      setActiveCategory(null);
    }
  };

  return (
    <div className={`${isAbsolute ? 'absolute top-0' : ''}`}>
      <div className="w-full   flex z-50 " onMouseLeave={handleMouseLeave}>
        <div className="flex flex-col gap-1 pt-4">
          <div className="bg-snap_blue rounded-xl text-white  flex justify-center items-center py-2 gap-2">
            <Image src={CategoryImage.src} height={20} alt="Cate" width={20} />
            <div>Categories</div>
          </div>

          {Object.keys(categories).map((category) => (
            <button
              key={category}
              className={`pl-2 pr-3 min-w-max py-1 text-base text-left w-[185px] ${
                category === activeCategory
                  ? "bg-[#ecececf7] text-snap_blue"
                  : "bg-white text-snap_blue"
              }`}
              onMouseEnter={() => handleCategoryHover(category)}
            >
              <Image
                src={categories[category].icon}
                alt={category}
                width={10}
                height={10}
                className="w-4 h-4 mr-2 inline-block"
              />
              {category}
            </button>
          ))}
        </div>
        <div className="bg-[#ecececf7]  h-[375px] rounded-xl ml-6 z-50">
          {activeCategory && (
            <div className="text-black  grid grid-flow-col grid-rows-8 gap-1  min-w-max max-w-max px-4 py-4">
              {Object.keys(categories[activeCategory].subcategories).map(
                (subcategory) => (
                  <Link
                    key={subcategory}
                    href={categories[activeCategory].subcategories[subcategory]}
                    onMouseEnter={handleSubcategoriesMouseEnter}
                      onMouseLeave={handleSubcategoriesMouseLeave}
                      className="hover:bg-red-50 px-4 py-2 rounded-lg"
                  >
                    <div>
                      {subcategory}
                    </div>
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesTabs;
