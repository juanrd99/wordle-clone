import React from "react";
import "./TableItem.css";
import PropTypes from "prop-types";

function TableItem({ itemId }) {
  return <div className="table-item"></div>;
}

TableItem.propTypes = {
  itemId: PropTypes.string.isRequired
};

export default TableItem;
