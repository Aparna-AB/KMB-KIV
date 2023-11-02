import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

function Sidemenu() {
  return (
    <Sidebar>
      <div className="app-brand demo">
        <a href="#" className="app-brand-link">
          <span className="app-brand-logo demo">
            <img src="../../../assets/images/logo-dashboard.svg" />
          </span>
          {/* <span className="app-brand-text demo menu-text fw-bolder ms-2">KMB</span> */}
        </a>
      </div>
      <Menu>
        <SubMenu
          label="Charts"
          // icon={<faHome />}
        >
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default Sidemenu;
