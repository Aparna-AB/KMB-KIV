import React, { useState } from "react";
import "./core.scss";
import "./theme.scss";
import "./dashboard.scss";
import Sidemenu from "./sidebar";
import Navbar from "./navbar";
import Contentwrapper from "./contentWrapper";

const Home = () => {
  const [change, setChange] = useState(true);

  return (
    <div id="root">
      <div>
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <Sidemenu />

            <div className="layout-page">
              <Navbar />
              {/* Content wrapper start here */}
              <Contentwrapper />
              {/* Content wrapper end here  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
