import React from "react";
import "./Navbar.scss";
import icon1 from "../../common/imgs/home.svg";
import icon2 from "../../common/imgs/Group 98.svg";

function Navbar() {
  return (
    <div className="navbarCont">
      <div className="row">
        <img src={icon1} className="col-1 img-icon" alt="icon1"></img>
        <ul className="col-9">
          <li></li>
        </ul>
        <ul className="col-2 list">
          <li>
            <img className="img-icon" src={icon2}></img>
          </li>
          <div className="text">
            <li>Bidemi Yusuf</li>
            <li>Executive</li>
            <span>
              <i class="fa fa-caret-down"></i>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
}


export default Navbar;
