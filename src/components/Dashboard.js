import React from "react";
import Sidebar from "./Navbar/Sidebar";
import '../common/main.scss'
import Navbar from "./Navbar/Navbar";
import Content from "./ContentBody/Content";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 col-left"><Sidebar/></div>
        <div className="col-10 px-0  mcol-right">
          <Navbar />
          <Content/>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
