import React, { FC } from "react";

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: string[];
  type?: "disc" | "circle";
  className?: string;
}

const List: FC<ListProps> = ({ items, type = "disc", className = "" }) => {
  return (
    <div className={`lists ${className}`}>
      <ul className={`nes-list is-${type}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
