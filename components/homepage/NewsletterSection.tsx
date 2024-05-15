import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {}

function NewsletterSection(props: Props) {
  const {} = props;

  return (
    <div className="bg-newsletter-bg bg-right bg-cover bg-no-repeat rounded-2xl p-14 bg-[#FFFB9A] ">
      <div className="py-3">
        <h3 className="text-xl font-medium text-snap_blue">Stay Fresh and Informed: Subscribe to Our Snappers Newsletter!</h3>
        <p className="text-sm text-snap_blue">Discover exclusive discounts delivered to your inbox</p>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2 ">
        <Input
          type="email"
          placeholder="Enter your email address"
          className="text-base border-[#FFC901] border-2"
        />
        <Button type="submit" className="bg-[#FFC901] text-black text-base">
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default NewsletterSection;
