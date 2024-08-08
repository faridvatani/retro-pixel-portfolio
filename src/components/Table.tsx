import React, { FC } from "react";

interface TableProps {
  header: string[];
  data: any[];
  dark?: boolean;
  isBordered?: boolean;
  isCentered?: boolean;
  className?: string;
}

const Table: FC<TableProps> = ({
  data,
  dark = false,
  isBordered = true,
  isCentered = false,
  className,
}) => {
  if (data.length === 0) return null;

  return (
    <div className="nes-table-responsive">
      <table
        className={`nes-table ${dark ? "is-dark" : ""} ${
          isBordered ? "is-bordered" : ""
        } ${isCentered ? "is-centered" : ""} ${className}`}
      >
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value as React.ReactNode}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
