import React, { useState } from "react";
import Categories from "./Categories";
import CategoryBtn from "./CategoryBtn";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const [data, setData] = useState(Categories);

  const filterResult = (cateItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === cateItem;
    });
    setData(result);
  };

  return (
    <>
      <CategoryBtn onFilter={filterResult} />
      <CategoryItem data={data} />
    </>
  );
};

export default Category;
