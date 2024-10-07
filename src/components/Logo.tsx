import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  scrolled: boolean;
};

const Logo: React.FC<LogoProps> = ({ scrolled }) => {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center">
        {/* Desktop Logo */}
        <Image
          src="/images/svg/logo-dark.svg"
          width={178}
          height={32}
          alt="Logo Image"
          className="hidden sm:block"
        />
        {/* Mobile Logo */}
        <Image
          src={`/images/svg/logo-${scrolled ? "dark" : "light"}.svg`}
          width={133}
          height={24}
          alt="Logo Light Image"
          className="block sm:hidden"
        />
      </Link>
    </div>
  );
};

export default Logo;
