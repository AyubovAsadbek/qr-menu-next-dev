import React, { useState, useEffect } from "react";
import { Icon } from "./Icon";
import Image from "next/image";
import { languageItems } from "@/data/data";

const LocaleMobileSwitcher = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [locale, setLocale] = useState("uz");

  const openModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 10);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 300);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id === "modal-overlay") {
        closeModal();
      }
    };

    if (isModalVisible) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalVisible]);

  const handleLanguage = (locale: string) => {
    setLocale(locale);
    closeModal();
  };

  return (
    <div>
      {/* Button */}
      <button
        onClick={openModal}
        className="py-4 pl-3 pr-4 bg-white w-full text-base text-black-100 font-semibold rounded-2xl flex items-center justify-between shadow-languageMobile transition-all active:scale-95"
      >
        <div className="flex">
          <Icon
            name="globe-icon"
            width={24}
            height={24}
            color="#8E9BA8"
            className="mr-3"
          />
          <span className="text-14">Язык интерфейса</span>
        </div>
        <div className="flex-y-center gap-1">
          <Icon name="globe-icon" width={24} height={24} color="#596066" />
          <span className="text-gray text-14">
            {locale === "uz"
              ? "O'zbekcha"
              : locale === "la"
              ? "Ўзбекча"
              : locale === "qar"
              ? "Qaraqalpaqsha"
              : locale === "en"
              ? "English"
              : locale === "ru"
              ? "Русский"
              : null}
          </span>
          <Icon
            name="arrow-down-icon"
            width={20}
            height={20}
            color="#8E9BA8"
            className="-rotate-90"
          />
        </div>
      </button>

      {/* Modal */}
      {isModalVisible && (
        <div
          id="modal-overlay"
          className={`fixed inset-0 z-50 flex justify-center items-end transition-300 ${
            isModalOpen ? "bg-black bg-opacity-50" : "bg-transparent"
          }`}
        >
          <div
            className={`w-full max-w-md bg-white rounded-t-2xl p-4 shadow-lg transform transition-300 ${
              isModalOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="flex-y-center justify-between pb-2 border-b">
              <h2 className="text-lg font-bold">Выберите язык</h2>
              <button onClick={closeModal} className="text-xl">
                <Icon
                  name="close-icon"
                  width={24}
                  height={24}
                  color="#8E9BA8"
                />
              </button>
            </div>

            {/* Modal Content */}
            <div>
              {languageItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleLanguage(item.locale)}
                  className="flex-y-center justify-between w-full py-2 text-left text-lg font-semibold border-b border-white-100"
                >
                  <div className="flex gap-2">
                    <Image
                      src={item.image}
                      alt="Uz flag"
                      width={24}
                      height={24}
                    />
                    {item.label}
                  </div>
                  <div className="w-5 h-5 border-2 border-blue-100 rounded-full flex-center">
                    {item.locale === locale ? (
                      <span className="w-2.5 h-2.5 bg-blue-100 rounded-full"></span>
                    ) : null}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocaleMobileSwitcher;
