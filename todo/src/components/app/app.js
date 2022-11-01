import React from "react";

import HeadH1 from "../header";
import Search from "../search";
import List from "../list";
import "./app.css";

const App = () => {
  const data = [
    { label: "First", important: 0, id: 1 },
    { label: "Second", important: 1, id: 2 },
    { label: "Third", important: 0, id: 3 },
  ];

  return (
    <div className="main">
      <div className="container">
        <HeadH1 />
        <Search />
        <List data={data} />
      </div>
    </div>
  );
};
export default App;
