import CategoryLink from "./CategoryLink";
import { CategoryData } from "@/data/data";

const Categories = () => {
  return (
    <div className="container">
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-7 mt-4 sm:mt-6">
        {CategoryData.map((category, index) => (
          <CategoryLink key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
