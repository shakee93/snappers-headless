import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="absolute w-full bottom-0 bg-white dark:bg-transparent dark:text-white  dark:border-t border-[#1e293b] text-black ">
      <div className="container flex items-center justify-between py-3">
        <nav>
          <ul className="flex space-x-4 font-bold">
            <li>
              <Link href={"/terms"}>Terms & Conditions</Link>
            </li>
            <li>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
