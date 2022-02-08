import React from "react";
import "./TableItem.css";
import PropTypes from "prop-types";

function TableItem({ itemId, word }) {
  return (
    <div className="table-item">
      <p>{word[itemId - 1]}</p>
    </div>
  );
}

TableItem.propTypes = {
  itemId: PropTypes.string.isRequired
};

export default TableItem;
