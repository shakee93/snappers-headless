import { useState, useCallback } from "react";

const useWishlist = () => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  const toggleWishlist = useCallback(() => {
    setWishlistLoading(true);
    setTimeout(() => {
      setIsInWishlist((prevState) => !prevState);
      setWishlistLoading(false);
    }, 1000);
  }, []);

  return {
    isInWishlist,
    wishlistLoading,
    toggleWishlist,
  };
};

export default useWishlist;
