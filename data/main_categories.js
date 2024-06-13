import Deals from "@/public/categories/images/Deals.png";
import Groceries from "@/public/categories/images/Groceries.png";
import Bakery from "@/public/categories/images/Bakery.png";
import Beverages from "@/public/categories/images/Beverages.png";
import Chilled from "@/public/categories/images/Chilled.png";
import Frozen from "@/public/categories/images/Frozen.png";
import Household from "@/public/categories/images/Household.png";
import Fresh from "@/public/categories/images/Fresh.png";

const mainCategories = {
  Deals: {
    link: "/collections/deals",
    image: Deals,
    bgColor: "#FCE4EC", // light pink background color
  },
  Groceries: {
    link: "/collections/groceries",
    image: Groceries,
    bgColor: "#FFF3E0", // light orange background color
  },
  Bakery: {
    link: "/collections/bakery",
    image: Bakery,
    bgColor: "#FFF9C4", // light yellow background color
  },
  Beverages: {
    link: "/collections/beverages",
    image: Beverages,
    bgColor: "#E3F2FD", // light blue background color
  },
  Chilled: {
    link: "/collections/chilled",
    image: Chilled,
    bgColor: "#E0F7FA", // light cyan background color
  },
  Fresh: {
    link: "/collections/fresh",
    image: Fresh,
    bgColor: "#E8F5E9", // light green background color
  },
  Frozen: {
    link: "/collections/frozen",
    image: Frozen,
    bgColor: "#F3E5F5", // light purple background color
  },
  Household: {
    link: "/collections/household",
    image: Household,
    bgColor: "#ECEFF1", // light grey background color
  },
};

export default mainCategories;
