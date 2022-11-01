import React from "react";
import "./header.css";
import ItemsCount from "../items-count";

const HeadH1 = () => {
  return (
    <div className="head">
      <h1 className="header">ToDo</h1>
      <ItemsCount />
    </div>
  );
};

export default HeadH1;
