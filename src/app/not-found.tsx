import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen fixed top-0 z-50 flex-x-center gap-5 justify-center text-center bg-white-100 ">
      <Image
        src={"./images/svg/404.svg"}
        alt="404 Image"
        width={300}
        height={300}
      />
      <h1 className="text-2xl lg:text-3xl text-dark font-bold leading-130 ">
        Bu sahifa mavjud emas
      </h1>
      <p className="text-base text-gray-700 font-normal max-w-[300px]">
        Siz notogri havoladan foydalangandingiz yoki sahifa ochirib tashlangan.
      </p>
      <Link
        href="/"
        className="bg-yellow text-black sm:hover:bg-yellow-200 py-3 px-7 font-semibold text-base leading-130 rounded-lg transition-300"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
