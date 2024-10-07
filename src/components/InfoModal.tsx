import { Icon } from "./Icon";
import Link from "next/link";
import Image from "next/image";
import RatingStars from "./RatingStars";
import SocialIcons from "./SocialIcons";
import PhoneNumberLink from "./PhoneNumberLink";
import DayButton from "./DaysWrapper";

interface InfoModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, closeModal }) => {
  return (
    <>
      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-300"
          onClick={closeModal}
        ></div>
      )}

      {/* Bottom Info Wrapper */}
      <div
        className={`w-full h-[800px] px-4 transition-300 fixed ${
          !isOpen ? "top-[100%]" : "top-[130px]"
        } bg-white sm:hidden block z-20 rounded-t-2xl`}
      >
        <div className="h-14 border-b border-white-300 flex items-center justify-between">
          <h5 className="text-xl text-black-100 font-medium">O ресторане</h5>
          <button
            onClick={closeModal}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-white-100 transition-all active:scale-90"
          >
            <Icon name="close-icon" width={16} height={16} color="#8E9BA8" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <Image
            src="images/svg/avatar-small.svg"
            alt="Avatar small"
            width={48}
            height={48}
          />
          <div>
            <h4 className="text-xl leading-6 text-black-100">
              KFC Uzbekistan Fast food
            </h4>
            {/* Rating Star Icons */}
            <div className="flex gap-1 items-center mt-1.5 cursor-pointer">
              <RatingStars breakpoint={"mobile"} />
              <span className="font-medium text-14 text-gray ml-[5px]">
                4.1
              </span>
              <Link
                href="/"
                className="text-xs h-5 flex items-center px-1.5 bg-statusBg rounded-md text-yellow-100 ml-2"
              >
                $$$$
              </Link>
            </div>
          </div>
          <Link
            href="/"
            className="w-6 h-6 rounded-md bg-white-100 flex items-center justify-center"
          >
            <Icon name="arrow-icon" width={16} height={16} color="#8E9BA8" />
          </Link>
        </div>
        <p className="text-14 text-gray leading-5 font-normal my-4">
          Kentucky Fried Chicken, сокращённо KFC — международная сеть ресторанов
          общественного питания, специализирующаяся на блюдах из курятины.
          Штаб-квартира компании располагается в городе Луисвилле в штате
          Кентукки.
        </p>
        <hr className="bg-white-400 border-none h-px" />
        <div className="w-full lg:max-w-[328px] lg:pl-4 lg:border-l border-white-400 mt-3">
          <h2 className="text-base leading-5 text-black-100 mb-3">
            График работы
          </h2>
          <div className="w-full rounded-lg group transition-200 cursor-pointer pb-1 sm:hover:bg-white-20 border-white-300">
            <DayButton />
            <h3 className="text-xs pl-1 flex gap-1 text-green">
              Открыто до <span className="text-blue-100">23:00</span>
              <Icon
                name="arrow-down-icon"
                color="--blue"
                width={16}
                height={16}
              />
            </h3>
          </div>
          <hr className="my-3 bg-white-400 border-none h-px" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://yandex.uz/maps/-/CDDfyK8G"
            className="flex items-center transition-300 gap-2 text-14 leading-4 sm:hover:text-blue-100"
          >
            <Icon name="location-icon" width={20} height={20} color="#4489F7" />
            77XC, Shahrisabz kochasi, Tashkent
            <span className="w-6 h-6 rounded-md bg-white-100 flex items-center justify-center">
              <Icon name="arrow-icon" width={16} height={16} color="#8E9BA8" />
            </span>
          </Link>
          <div className="border border-white-400 w-full h-11 my-4 rounded-lg flex-y-center justify-between px-2">
            <h5 className="text-14 leading-4 text-black-100 pb-1">
              Социальные сети:
            </h5>
            <SocialIcons />
          </div>
          <PhoneNumberLink
            phoneNumber="+998914899186"
            initialShowNumber={false}
          />
        </div>
      </div>
    </>
  );
};

export default InfoModal;
