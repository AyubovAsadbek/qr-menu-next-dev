"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { socialLinks } from "@/data/data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Footer top */}
      <div className="bg-white">
        <div className="container text-center hidden items-center py-6 mt-10 sm:flex-y">
          {/* Desktop Logo */}
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/images/svg/logo-dark.svg"
              width="198"
              height="36"
              alt="Company Logo"
              className="hidden sm:block"
            />
          </Link>

          <p className="font-normal text-gray leading-5 text-14 max-w-[870px] my-5 px-3">
            На нашем сайте мы собираем лучшие отзывы о различных компаниях,
            чтобы помочь вам принимать осознанные решения. Независимо от того,
            ищете ли вы идеальное место для обеда, лучший вуз для обучения или
            надежный банк для финансовых нужд, мы предоставляем вам ценную
            информацию.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                aria-label={link.LinkIconName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name={link.LinkIconName}
                  width={link.width}
                  height={link.height}
                  color={link.color}
                />
              </Link>
            ))}
          </div>

          <Link
            href="https://business-dev.commeta.uz/sharh/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-52 h-10 transition-all bg-yellow flex-center gap-2 rounded-lg mt-5 font-semibold leading-5 sm:hover:bg-yellow-200"
            aria-label="Добавить меню"
          >
            <Icon name="plus-icon" width={20} height={20} color="black-100" />
            Добавить меню
          </Link>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-3 hidden sm:block">
        <div className="container flex justify-between items-center">
          <p className="text-14 text-gray font-normal leading-5">
            © {year} QR Menu. Все права защищены.
          </p>

          <Link
            href="https://sharh.commeta.uz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-2 py-1 bg-poweredLinkBg rounded-md"
            aria-label="Powered by Commeta"
          >
            <span className="text-gray-100 text-14 leading-5 font-normal">
              Powered by
            </span>
            <Image
              src="/images/svg/commeta-logo.svg"
              alt="Commeta Logo"
              width={83}
              height={15}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
