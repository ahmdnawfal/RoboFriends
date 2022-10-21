import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((val, i) => (
        <div key={i}>
          <Card id={val.id} name={val.name} email={val.name} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
