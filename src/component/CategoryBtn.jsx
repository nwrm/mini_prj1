import React from "react";

const CategoryBtn = ({ onFilter }) => {
  return (
    <div>
      <div>
        <button type="button" onClick={() => onFilter("ele")}>
          Element
        </button>
        <button type="button" onClick={() => onFilter("mid")}>
          Middle
        </button>
        <button type="button" onClick={() => onFilter("high")}>
          High
        </button>
      </div>
    </div>
  );
};

export default CategoryBtn;
