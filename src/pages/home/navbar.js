import React from "react";
import { Dropdown } from 'react-bootstrap';

function Navbar(){
    return(
        <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4" >
                    <i className="bx bx-menu bx-sm"></i>
                </a>
            </div>
            <div className="navbar-nav-right d-flex align-items-end" id="navbar-collapse">
                <div className="navbar-nav align-items-center">
                    <div className="nav-item d-flex align-items-center">
                        <i className="bx bx-search fs-4 lh-0"></i>
                    </div>
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <li>                        
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                <img className="notification" src="../assets/icons/notification.svg" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {/* Dropdown menu items */}
                                <li><a class="dropdown-item" href="#">Notification</a></li>
                                <li><a class="dropdown-item" href="#">Notification</a></li>
                                <li><a class="dropdown-item" href="#">Notification</a></li>
                                <li><a class="dropdown-item" href="#">Notification</a></li>
                                <li><a class="dropdown-item" href="#">Notification</a></li>
                            </Dropdown.Menu>
                        </Dropdown>                        
                        </li>                    
                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <div className="avatar avatar-online">
                                    <img className="w-px-40 h-auto rounded-circle" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png " />
                                </div>
                            </a>                            
                        </li>
                        <li>                        
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                            Maribel Aber
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {/* Dropdown menu items */}
                                <li><a class="dropdown-item" href="#">My Profile</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </Dropdown.Menu>
                        </Dropdown>                        
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;