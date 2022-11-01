import React from "react";
import Item from "../item";
import "./list.css";
import BtnBlockItem from "../btn-block-item";

const List = ({ data }) => {
  const elements = data.map((item) => {
    return (
      <li className="list-group-item todo-item" key={item.id}>
        <Item {...item} />
        <BtnBlockItem />
      </li>
    );
  });

  return <ul className="list-group ">{elements}</ul>;
};

export default List;
