import React from "react";
import "./Table.css";
import tableElements from "../../tableElements";
import TableItem from "./TableItem/TableItem";
import { v4 as uuidv4 } from "uuid";

function Table({ word }) {
  return (
    <main className="main">
      <div className="table">
        {tableElements.map((elem) => (
          <TableItem key={uuidv4()} itemId={elem.id} word={word} />
        ))}
      </div>
    </main>
  );
}

export default Table;
