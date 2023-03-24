import React from "react";

function FilterButtons({ filter, handleFilter }) {
  return (
    <ul className="filters">
      <li>
        <a
          href="#/"
          className={filter === "all" ? "selected" : ""}
          onClick={() => handleFilter("all")}
        >
          All
        </a>
      </li>
      <li>
        <a
          href="#/"
          className={filter === "active" ? "selected" : ""}
          onClick={() => handleFilter("active")}
        >
          Active
        </a>
      </li>
      <li>
        <a
          href="#/"
          className={filter === "completed" ? "selected" : ""}
          onClick={() => handleFilter("completed")}
        >
          Completed
        </a>
      </li>
    </ul>
  );
}

export default FilterButtons;
