import React from "react";
import Cards from "../Cards/Cards";
import icon3 from "../../common/imgs/icon3.png";
import ring1 from "../../common/imgs/Capture.PNG";
import IconG from "../../common/imgs/grn-money.png";
import ICONR from "../../common/imgs/red-money.png";
import SmallCards from "../Cards/smallCards";

function Content() {
  return (
    <div className="row mt-5 right">
      <div className="col-7">
        <Cards
          img={icon3}
          text="Total Annula capel Budget"
          text2="Annual"
          img2={ring1}
          iconG={IconG}
          iconR={ICONR}
        />
        <Cards
          img={icon3}
          text="Total Annula OPEX Budget"
          text2="Annual"
          img2={ring1}
          iconG={IconG}
          iconR={ICONR}
        />
      </div>
      <div className="col-4">
         <SmallCards/>
      </div>
    </div>
  );
}

export default Content;
