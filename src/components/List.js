import React from "react";
import "./List.css";

function List({ img, name, year }) {
  return (
    <div className="box">
      <img className="rows" src={img} alt={name} />
      <p className="para">
        {name} <br />
        {year}
      </p>
    </div>
  );
}

export default List;
