import BasketCard from "@/components/BasketCard";
import Button from "@/components/Button";
import { Icon } from "@/components/Icon";
import { basketItems } from "@/data/data";
import React from "react";

const BasketPage = () => {
  return (
    <div className="container text-center sm:pb-0 pb-40">
      <div className="bg-white sm:bg-transparent py-4">
        <h2 className="text-black-100 font-medium sm:text-2xl">Корзина</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 sm:mt-0">
        {basketItems.map((item, index) => (
          <BasketCard food={item} key={index} />
        ))}
      </div>
      <div className="sm:hidden w-full p-4 bg-white  fixed left-0 bottom-16 rounded-t-2xl shadow-showQr">
        {/* <button>Показать QR код</button> */}
        <Button
          variant="showBtn"
          icon={
            <Icon name="scan-icon" width={20} height={20} color="#121C25" />
          }
        >
          Показать QR код
        </Button>
      </div>
    </div>
  );
};

export default BasketPage;
