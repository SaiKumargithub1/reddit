import React from "react";
function SortButtons({ setSort }) {
  const handleSort = (sortType) => {
    setSort(sortType);
  };

  return (
    <div className="sort-buttons">
      <button onClick={() => handleSort("hot")}>Hot</button>
      <button onClick={() => handleSort("new")}>New</button>
      <button onClick={() => handleSort("controversial")}>Controversial</button>
    </div>
  );
}

export default SortButtons;
