import Image from "next/image";

interface DiscountTimeProps {
  customClass: string;
}

const DiscountTime: React.FC<DiscountTimeProps> = ({ customClass }) => {
  return (
    <div className={`w-full p-2 rounded-lg bg-red-100 ${customClass}`}>
      <p className="font-normal text-14 leading-5 text-black-100 flex-center gap-1">
        <Image
          src={"/images/svg/discount.svg"}
          width={16}
          height={16}
          alt="Discount Icon"
        />
        Скидка заканчивается через:
      </p>
      <span className="text-base font-semibold leading-5 text-black-100">
        8 : 10 : 20
      </span>
    </div>
  );
};

export default DiscountTime;
