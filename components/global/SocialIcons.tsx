import React from "react";
import Link from "next/link";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

interface Props {}

function SocialIcons(props: Props) {
  const {} = props;

  return (
    <div className="flex items-center gap-4 justify-center">
      <Link href={"https://www.facebook.com/Snapperslanka"}>
        <FaFacebookF />
      </Link>
      <Link href={"https://www.instagram.com/snapperslk/"}>
        <FaInstagram />
      </Link>
      <Link href={"https://twitter.com/snapperslk"}>
        <FaXTwitter />
      </Link>
      <Link href={"https://www.tiktok.com/@snapperslk?lang=en%20"}>
        <FaTiktok />
      </Link>
    </div>
  );
}

export default SocialIcons;
