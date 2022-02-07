import React from "react";
import "./Table.css";
import tableElements from "../../tableElements";
import TableItem from "./TableItem/TableItem";
import { v4 as uuidv4 } from "uuid";

function Table() {
  console.log(tableElements);
  return (
    <main className="main">
      <div className="table">
        {tableElements.map((elem) => (
          <TableItem key={uuidv4()} itemId={elem.id} />
        ))}
      </div>
    </main>
  );
}

export default Table;
