import React from "react";
import "./item.css";

const Item = ({ label, important = false }) => {
  const ListStyle = {
    color: important ? "tomato" : "white",
  };
  return <span style={ListStyle}>{label}</span>;
};

export default Item;
