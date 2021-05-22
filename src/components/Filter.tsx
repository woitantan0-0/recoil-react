import React, { FC } from "react";

interface FilterProps {
  filter: string;
  onChangeFilter: CallableFunction;
}

const Filter: FC<FilterProps> = ({ filter, onChangeFilter }) => {
  const handleClickFilter = (filter: string) => {
    onChangeFilter(filter);
  };

  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClickFilter.bind(null, "ALL")}
        className={filter === "ALL" ? "is-active" : ""}
      >
        ALL
      </a>
      <a
        href="#"
        onClick={handleClickFilter.bind(null, "TODO")}
        className={filter === "TODO" ? "is-active" : ""}
      >
        TODO
      </a>
      <a
        href="#"
        onClick={handleClickFilter.bind(null, "DONE")}
        className={filter === "DONE" ? "is-active" : ""}
      >
        DONE
      </a>
    </div>
  );
};

export default Filter;
