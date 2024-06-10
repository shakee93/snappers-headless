import Deals from "@/public/categories/images/Deals.jpg";
import Groceries from "@/public/categories/images/Groceries.jpg";
import Bakery from "@/public/categories/images/Bakery.jpg";
import Beverages from "@/public/categories/images/Beverages.jpg";
import Chilled from "@/public/categories/images/Chilled.jpg";
import Frozen from "@/public/categories/images/Frozen.jpg";
import Household from "@/public/categories/images/Household.jpg";
import Fresh from "@/public/categories/images/Fresh.jpg";

const mainCategories = {
  Deals: {
    link: "/collections/deals",
    image: Deals,
  },
  Groceries: {
    link: "/collections/groceries",
    image: Groceries,
  },
  Bakery: {
    link: "/collections/bakery",
    image: Bakery,
  },
  Beverages: {
    link: "/collections/beverages",
    image: Beverages,
  },
  Chilled: {
    link: "/collections/chilled",
    image: Chilled,
  },
  Fresh: {
    link: "/collections/fresh",
    image: Fresh,
  },
  Frozen: {
    link: "/collections/frozen",
    image: Frozen,
  },
  Household: {
    link: "/collections/household",
    image: Household,
  },
};

export default mainCategories;
