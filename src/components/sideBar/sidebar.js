import React, { useEffect, useState, useCallback, useRef } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./theme.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SuccessModal from "../commonSuccessModal";
import { useLocation } from "react-router-dom";

function Sidemenu({ routes }) {
  const [sideCollapsed, setSideCollapsed] = useState(false);
  const elementRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation();
  const currentPath = location.pathname;

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const isMenuActive = (menu, path) => {
    return currentPath === path ? "active" : "";
  };

  const toggleSideCollapsed = useCallback(() => {
    if (
      elementRef.current &&
      elementRef.current.classList.contains("ps-collapsed")
    ) {
      document.body.classList.remove("body-collapsed");
    } else {
      document.body.classList.add("body-collapsed");
    }
    setSideCollapsed((collapsed) => !collapsed);
  }, [setSideCollapsed]);

  useEffect(() => {
    const firstMenu = routes[0];
    if (firstMenu) {
      setActiveMenu(firstMenu.name);
    }
  }, []);

  return (
    <>
      <SuccessModal />
      <Sidebar
        collapsed={sideCollapsed}
        collapsedWidth="80px"
        rootStyles={{
          border: "none",
          top: 0,
          height: "100vh",
          position: "fixed",
          overflow: "auto",
        }}
        ref={elementRef}
      >
        <div className="app-brand demo">
          <img
            src="../../../assets/icons/collapse_menu.svg"
            onClick={toggleSideCollapsed}
            className="collapsed-icon"
          />
          <a href="#" className="app-brand-link">
            <span className="app-brand-logo demo">
              <img src="../../../assets/images/logo-dashboard.svg" />
            </span>
            {/* <span className="app-brand-text demo menu-text fw-bolder ms-2">KMB</span> */}
          </a>
        </div>
        <Menu>
          {routes &&
            routes.map((menu, i) => (
              <div key={menu.path + i}>
                {menu.mainMenu && (
                  <MenuItem
                    icon={<FontAwesomeIcon icon={menu.icon} />}
                    component={<Link to={menu.path} />}
                    className={isMenuActive(menu.name, menu.path)}
                    onClick={() => handleMenuClick(menu.name)}
                  >
                    {menu.name}
                  </MenuItem>
                )}

                {menu.subMenuHead && (
                  <SubMenu
                    label={menu.name}
                    icon={<FontAwesomeIcon icon={menu.icon} />}
                  >
                    {menu.childrens.length > 0 &&
                      menu.childrens.map((el, i) => (
                        <>
                          {el.child ? (
                            <>
                              <SubMenu
                                label={el.name}
                                // icon={<FontAwesomeIcon icon={menu.icon} />}
                              >
                                {el.childrens.map((ele) => (
                                  <MenuItem
                                    key={ele.path + i}
                                    component={<Link to={ele.path} />}
                                    className={isMenuActive(ele.name, ele.path)}
                                  >
                                    {ele.name}
                                  </MenuItem>
                                ))}
                              </SubMenu>
                            </>
                          ) : (
                            <MenuItem
                              key={el.path + i}
                              component={<Link to={el.path} />}
                              className={isMenuActive(el.name, el.path)}
                            >
                              {el.name}
                            </MenuItem>
                          )}
                        </>
                      ))}
                  </SubMenu>
                )}
              </div>
            ))}
        </Menu>
      </Sidebar>
    </>
  );
}

export default Sidemenu;
