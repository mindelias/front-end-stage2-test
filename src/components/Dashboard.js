import React from "react";
import Sidebar from "./Navbar/Sidebar";
import "../common/main.scss";
import Navbar from "./Navbar/Navbar";
import Content from "./ContentBody/Content";
import BarChart from "./Barchats/Barchats";
import "./Barchats/Barchat.scss";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 col-left">
          <Sidebar />
        </div>
        <div className="col-10  col-right">
          <Navbar />
          <Content />
          <div className="row">
            <div className="col-5  barchartCont">
              <h4>Total OPEX Budget Statistics</h4>
              <p> Total Budget Spent VS Total Budget Balance</p>
              <ul>
                <li className="li">Total Spent</li>
                <li className="li grn">Total Spent</li>
                <li className="li">Total Spent</li>
                <li className="li rd">Total Spent</li>
              </ul>
              <BarChart />
            </div>
            <div className="col-5  offset-md-1 barchartCont ">
              <h4>Total OPEX Budget Statistics</h4>
              <p> Total Budget Spent VS Total Budget Balance</p>
              <ul>
                <li className="li">Total Spent</li>
                <li className="li grn">Total Spent</li>
                <li className="li">Total Spent</li>
                <li className="li rd">Total Spent</li>
              </ul>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
