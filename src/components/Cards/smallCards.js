import "./smallCards.scss";
import "../../common/variable.scss";

import React from "react";

function SmallCards({ img, text1, text2 }) {
  return (
    <div className="small-cards">
      <div className="row row1">
        <img className = 'small-cards-img' src={img}></img>
        <p>{text1}</p>
      </div>
      <div className="small-cards-middle">
        <h1>{text2}</h1>
      </div>
    </div>
  );
}

export default SmallCards;
