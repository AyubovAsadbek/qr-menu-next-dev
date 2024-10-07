"use client";
import { useState } from "react";
import FoodCard from "@/components/FoodCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SingleFood from "@/components/SingleFood";
import { CategoryData } from "@/data/data";
import SearchWrapper from "@/components/SearchWrapper";
import CategoryLinks from "@/components/CategoryLinks";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";
type Food = {
  foodName: string;
  foodImages: string;
  oldPrice?: string;
  newPrice: string;
  discount?: string;
};

const MenuPage = () => {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null); // Track selected food
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Control dialog visibility

  const openDialog = (food: Food) => {
    setSelectedFood(food);
    setIsDialogOpen(true);
  };

  return (
    <div className="sm:container mt-4 flex relative z-0 flex-col sm:flex-row gap-1 sm:gap-6 justify-between sm:pb-0 pb-20">
      {/* Menu Left */}
      <div className="flex-y gap-2 sm:gap-5 w-full sticky top-[66px] z-20 sm:max-w-[220px] lg:max-w-[344px] sm:bg-transparent bg-white sm:py-0 py-2 pt-3 sm:border-none border-b border-white-300">
        {/* Back to Menu Link */}
        <Link
          href="/"
          className="group relative border w-full py-6 hidden sm:flex-center gap-3 rounded-2xl overflow-hidden bg-black-100/70 sm:hover:bg-black-100/90 transition-300 text-white font-semibold"
        >
          <Image
            src="/images/png/category-2.png"
            alt="Single Category Image"
            width={344}
            height={72}
            className="absolute -z-10 w-full h-full object-cover sm:group-hover:scale-110 transition-300"
          />
          <span className="bg-categoryIconBg p-1 rounded-lg">
            <Icon
              name="arrow-down-icon"
              className="rotate-90"
              height={20}
              width={20}
              color="white"
            />
          </span>
          B главное меню
        </Link>
        <div className="sm:hidden block container">
          <SearchWrapper />
        </div>
        <CategoryLinks />
      </div>

      {/* Menu Right */}
      <div className="px-4 sm:px-0 max-w-[712px] w-full">
        <div className="sm:block hidden">
          <SearchWrapper />
        </div>
        {CategoryData.map((category, index) => (
          <div
            key={index}
            id={category.active}
            className="scroll-mt-48 sm:scroll-mt-24"
          >
            <h3 className="mt-4 mb-3 text-xl font-semibold text-black-100 leading-4 flex-y-center gap-1">
              {category.name}
              <span
                className={`py-0.5 px-1.5 font-normal bg-white-400 rounded text-xs text-blue-100`}
              >
                {category.dishes}
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 justify-between">
              {category.foods.length > 0 ? (
                category.foods.map((food, index) => (
                  <div key={index} onClick={() => openDialog(food)}>
                    <FoodCard food={food} />
                  </div>
                ))
              ) : (
                <p>No foods available</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Single Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[712px] sm:h-auto h-full rounded-none sm:rounded-2xl focus:outline-none">
          {selectedFood && <SingleFood food={selectedFood} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuPage;
