"use client";

import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { Icon } from "./Icon";
import useScroll from "@/hooks/useScroll";

const DesktopNav: React.FC = () => {
  // Handle scroll changes using useScroll hook
  const scrolled = useScroll(50);

  return (
    <header
      className={`sticky top-0 transition-300 ${
        scrolled ? "shadow-lg" : ""
      }  w-full bg-white z-20 `}
    >
      <div className="container py-6 flex justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={"/images/svg/logo-dark.svg"}
            alt="Logo Image"
            width={178}
            height={32}
          />
        </Link>
        {/* Navbar Right */}
        <div className="flex-y-center gap-4">
          <LocaleSwitcher />

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://business-dev.commeta.uz/sharh"
            className="text-xs px-6 py-2.5 font-medium flex-center gap-2 bg-yellow rounded-lg transition-300 text-black-100 active:scale-95 sm:hover:bg-yellow-200"
          >
            <Icon name="add-icon" width={16} height={16} color="black-100" />
            Добавить ресторан
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DesktopNav;
