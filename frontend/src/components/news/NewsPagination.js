import React from "react";
import { Pagination } from "react-bootstrap";

export default function NewsPagination({ pages, active, onSelect }) {
  const getPaginationItems = () => {
    let items = [];
    for (let num = 1; num <= pages; num++) {
      items.push(
        <Pagination.Item
          key={num}
          active={num === active}
          onClick={() => onSelect(num)}
        >
          {num}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <Pagination className="justify-content-center">
      {getPaginationItems()}
    </Pagination>
  );
}
