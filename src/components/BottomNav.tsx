"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Icon } from "./Icon";
import { BottomNavItems } from "@/data/data";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState(pathname);

  useEffect(() => {
    setActiveNav(pathname);
  }, [pathname]);

  return (
    <div className="fixed w-full bottom-0 h-16 bg-white flex sm:hidden items-center justify-between gap-3 px-8 border-t border-white-300">
      {BottomNavItems.map((navItem) => (
        <Link
          key={navItem.id}
          onClick={() => setActiveNav(navItem.href)}
          href={navItem.href}
          className={`relative py-2 px-4 rounded-3xl transition-300 ${
            activeNav === navItem.href ? "bg-yellow w-[120px]" : "w-[53px]"
          } text-14 flex justify-center gap-2 font-medium`}
        >
          <div>
            <Icon
              name={navItem.iconName}
              width={20}
              height={20}
              color={activeNav === navItem.href ? "#000000" : "#8E9BA8"}
              className="mx-2 transition-300"
            />
          </div>
          {activeNav === navItem.href ? <span>{navItem.label}</span> : null}
          {navItem.href === "/basket" ? (
            <span className="absolute -right-1 -top-1 h-4 text-white px-1 bg-red text-xs font-semibold leading-4 rounded-full">
              6
            </span>
          ) : null}
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
