import React from "react";
import "./Sidebar.scss";
import express from "../../common/imgs/express.png";

function Sidebar() {
  return (
    <div className="sideBarCont">
      <img className="sideBarCont-img" src={express}></img>
      <ul>
        <li>
          <i class="fas fa-home mr-3"></i>
          Dashboard
        </li>
        <li>
          <i class="fas fa-paper-plane mr-3"></i>
          Budget
        </li>
        <li>
          <i class="fas fa-exchange-alt mr-3"></i>
          Approvals
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
