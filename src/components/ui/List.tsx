import React, { FC } from "react";

interface ListProps<T> extends React.HTMLAttributes<HTMLUListElement> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  type?: "disc" | "circle";
  className?: string;
}

function List<T>({
  items,
  renderItem,
  type = "disc",
  className,
}: ListProps<T>) {
  return (
    <div className={`lists ${className}`}>
      <ul className={`nes-list is-${type}`}>
        {items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
