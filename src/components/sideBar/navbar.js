import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { localData } from "../../utils/constants";
import { logoutAction } from "../../services/modules/auth/authSlice";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../utils/selectors";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4">
          <i className="bx bx-menu bx-sm"></i>
        </a>
      </div>
      <div
        className="navbar-nav-right d-flex align-items-end"
        id="navbar-collapse"
      >
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0"></i>
          </div>
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="notification">
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <img src="../../../assets/icons/notification.svg" />
                  <Badge className="notificationalert"></Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <li>
                    <a class="dropdown-item" href="#">
                      Notification
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Notification
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Notification
                    </a>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item navbar-dropdown dropdown-user dropdown user-profile">
              <a
                className="nav-link dropdown-toggle hide-arrow user-profile-img"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-online">
                  <img
                    className="w-px-40 h-auto rounded-circle"
                    src="../../../assets/icons/profile.png"
                  />
                </div>
              </a>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  {getUserInfo()?.customerDetail?.email}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <li>
                    <a class="dropdown-item" href="#">
                      <FontAwesomeIcon icon={faUser} />
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <FontAwesomeIcon icon={faGear} />
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => {
                        navigate(`/login`);
                        localData.remove();
                        dispatch(logoutAction());
                      }}
                    >
                      <FontAwesomeIcon icon={faRightFromBracket} />
                      Logout
                    </a>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
