import React from "react";
import Cards from "../Cards/Cards";
import icon3 from "../../common/imgs/icon3.png";
import ring1 from "../../common/imgs/Capture.PNG";
import IconG from "../../common/imgs/grn-money.png";
import IconR from "../../common/imgs/red-money.png";
import SmallCards from "../Cards/smallCards";
import yellowcon from '../../common/imgs/yellowcon.png';
 import grncon from "../../common/imgs/grncon.png";
 import redcon from "../../common/imgs/redcon.png";

function Content() {
  return (
    <div className="row mt-5 right">
      <div className="col-7 col-xs-12">
        <Cards
          img={icon3}
          text="Total Annula capel Budget"
          text2="Annual"
          img2={ring1}
          iconG={IconG}
          iconR={IconR}
          color="#6915cf"
        />
        <Cards
          img={icon3}
          text="Total Annula OPEX Budget"
          text2="Annual"
          img2={ring1}
          iconG={IconG}
          iconR={IconR}
          color="#fb0091"
        />
      </div>
      <div className="col-5">
        <SmallCards
          img={yellowcon}
          text1="Pending Budget Reassignment Status"
          text2="200"
        />
        <SmallCards
          img={grncon}
          text1="Approved Budget Reassignment Status"
          text2="373"
        />
        <SmallCards
          img={redcon}
          text1="Declined Budget Reassignment Status"
          text2="372"
        />
      </div>
    </div>
  );
}

export default Content;
