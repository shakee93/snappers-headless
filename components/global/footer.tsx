import React from "react";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute w-full bottom-0 bg-snap_blue dark:bg-transparent text-white dark:text-white dark:border-t border-snap_blue ">
      <div className="container flex flex-col py-4">
        <div className="grid grid-cols-3 py-3 justify-between">
          {/* 1st Column */}
          <div>
            <nav>
              <ul className="flex gap-5 font-medium">
                <li>
                  <Link href={"/terms"}>Terms & Conditions</Link>
                </li>
                <li>
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={"/faq"}>FAQ</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* 2nd Column */}
          <SocialIcons />

          {/* 3rd column */}
          <div>
            <nav>
              <ul className="flex gap-5 justify-end font-medium">
                <li>
                  <Link href={"mailto:info@snappers.lk"}>
                    Email:info@snappers.lk
                  </Link>
                </li>
                <li>
                  <Link href={"/privacy-policy"}>Feedback</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div></div>
        </div>

        {/* copyright section */}
        <div className="text-center py-3 text-sm">
          © {currentYear}, Snappers™. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
