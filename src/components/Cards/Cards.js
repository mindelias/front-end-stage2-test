import React from "react";
import {Button} from 'reactstrap'
import "./Cards.scss";
import "../../common/variable.scss";
import "../../common/main.scss";
import { Meter } from "grommet";

function Cards({ img, img2, text, text2, iconG, iconR , color}) {
  return (
    <div className="big-cards mb-5 ml-5 xs-col-12">
      <ul className="row inner-row1 text-center">
        <img src={img} alt="img1" className="mr-3 img-in-card"></img>
        <h5 className="mr-3">{text}</h5>
        <p className="box">N5000000</p>
        <p className="box-green">
          {" "}
          {text2}
          <i class="fa fa-caret-down ml-2"></i>
        </p>
      </ul>
      <div className="row px-5 parent">
        <div className="col-4 ml-7 p-sm-0 p-xs-0">
          <Meter
            type="circle"
            width="200"
            height="200"
            // background="#6915cf"
            thickness="medium"
            values={[
              {
                value: 55,
                label: "sixty",
                color: `${color}`,
                onClick: () => {}
              }
            ]}
            aria-label="meter"
            round
          />
        </div>
        <div className = 'float-in-middle'>
          <strong className = ''>64%</strong>
          <p>Remaining</p>
        </div>

        <div className="col-6  inner-card">
          <div className="row ml-3 ">
            <img className="col-4 offset-md-2 mr-0 pr-0" src={iconG}></img>
            <div className="col-6 ml-0">
              <p>
                Total <strong> OPEX </strong>Spent
              </p>
              <p>N 18,000,000</p>
            </div>
          </div>
          <div className="row  mt-3  ml-3">
            <img className="col-4 offset-md-2 mr-0 pr-0" src={iconR}></img>
            <div className="col-6 ml-0">
               <Button>Testing Reactstrap</Button>
              <p>N 32,000,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;

{
  /* <Meter
  values={[
    {
      value: 60,
      label: "sixty",
      onClick: () => {}
    }
  ]}
  aria-label="meter"
/>; */
}
