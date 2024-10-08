import Categories from "@/components/Categories";
import SearchWrapper from "@/components/SearchWrapper";
import React from "react";

const page = () => {
  return (
    <div className="pb-20 sm:pb-0">
      <div className="container">
        <SearchWrapper />
      </div>
      <Categories />
    </div>
  );
};

export default page;
