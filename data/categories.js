// categories.js
import Deals from "@/public/categories/icons/Deals.svg"
import Groceries from "@/public/categories/icons/Grocery.svg"
import Bakery from "@/public/categories/icons/Bakery.svg"
import Beverages from "@/public/categories/icons/Beverages.svg"
import Chilled from "@/public/categories/icons/Chilled.svg"
import Frozen from "@/public/categories/icons/Frozen.svg"
import Household from "@/public/categories/icons/Household.svg"
import Fresh from "@/public/categories/icons/Fresh.svg"



const categories = {
    "Deals": {
      link: "/collections/smart-phones",
      icon: Deals,
      subcategories: {
        "Snap-deals": "/snap-deals",
        "Other Deals": "/apple",
      },
    },
    "Groceries": {
      link: "/collections/mobile-accessories",
      icon: Groceries,
      subcategories: {
        "Phone Cases": "/mobile-accessories/cases",
        "Screen Protectors": "/mobile-accessories/screen-protectors",
        "Chargers": "/mobile-accessories/chargers",
        "Headphones": "/mobile-accessories/headphones",
        "Headsets": "/mobile-accessories/headsets",
        "Speakers": "/mobile-accessories/speakers",
        "Phone Protectors": "/mobile-accessories/phone-protectors",
        "Power Banks": "/mobile-accessories/power-banks",
      },
    },
    "Bakery": {
      link: "/collections/cameras",
      icon: Bakery,
      subcategories: {
        "DSLR": "/cameras/dslr",
        "Mirrorless": "/cameras/mirrorless",
        "Point & Shoot": "/cameras/point-shoot",
        "Action Cameras": "/cameras/action-cameras",
        "Instant Cameras": "/cameras/instant-cameras",
      },
    },
    "Beverages": {
      link: "/collections/laptops",
      icon: Beverages,
      subcategories: {
        "Apple": "/laptops/apple",
        "Dell": "/laptops/dell",
        "HP": "/laptops/hp",
        "Lenovo": "/laptops/lenovo",
        "Asus": "/laptops/asus",
      },
    },
    "Chilled": {
      link: "/collections/laptop-accessories",
      icon: Chilled,
      subcategories: {
        "Bags & Cases": "/laptop-accessories/bags-cases",
        "Docking Stations": "/laptop-accessories/docking-stations",
        "External Hard Drives": "/laptop-accessories/external-hard-drives",
        "Keyboards & Mice": "/laptop-accessories/keyboards-mice",
        "Laptop Chargers": "/laptop-accessories/chargers",
      },
    },
    "Fresh": {
      link: "/smart-watches",
      icon: Fresh,
      subcategories: {
        "Apple Watch": "/smart-watches/apple",
        "Samsung Galaxy Watch": "/smart-watches/samsung",
        "Fitbit": "/smart-watches/fitbit",
        "Garmin": "/smart-watches/garmin",
        "Xiaomi Mi Band": "/smart-watches/mi-band",
      },
    },
    "Frozen": {
      link: "/smart-watches",
      icon: Frozen,
      subcategories: {
        "Apple Watch": "/smart-watches/apple",
        "Samsung Galaxy Watch": "/smart-watches/samsung",
        "Fitbit": "/smart-watches/fitbit",
        "Garmin": "/smart-watches/garmin",
        "Xiaomi Mi Band": "/smart-watches/mi-band",
      },
    },
    "Household": {
      link: "/smart-watches",
      icon: Household,
      subcategories: {
        "Apple Watch": "/smart-watches/apple",
        "Samsung Galaxy Watch": "/smart-watches/samsung",
        "Fitbit": "/smart-watches/fitbit",
        "Garmin": "/smart-watches/garmin",
        "Xiaomi Mi Band": "/smart-watches/mi-band",
      },
    },
    
  };
  
  export default categories;
  