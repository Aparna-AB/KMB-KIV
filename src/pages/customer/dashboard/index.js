import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button";

import "./style.css";
import SideBar from "../../../components/sideBar";

function Dashboard() {
  const [buttons, setButtons] = useState([
    {
      label: "Zone",
      route: "zone",
    },
    {
      label: "LSGD",
      route: "LSGD",
    },
    {
      label: "Quantity",
      route: "quantity",
    },
    {
      label: "Bank",
      route: "bank",
    },
    {
      label: "Canoe",
      route: "canoe",
    },
  ]);

  useEffect(() => {
    // setButtons([
    //   ...buttons.map((button) => ({
    //     ...button,
    //     onClick: () => handleNavigation(button.route),
    //   })),
    // ]);
  });

  const navigate = useNavigate();

  const handleNavigation = (route) => navigate(`/${route}`);

  return (
    <Container className="customer-dashboard-container">
      <SideBar />
      <Row>
        <Col xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
          <div
            className="customer-dashboard-button-container"
            onClick={() => handleNavigation("zoneBookingStatus")}
          >
            <p>Zone Booking Status</p>
          </div>
        </Col>

        <Col xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
          <div
            onClick={() => handleNavigation("sandBookingHistory")}
            className="customer-dashboard-button-container"
          >
            <p>Sand Booking History</p>
          </div>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
          <div className="customer-dashboard-button-container">
            <p>Sand Booking Form</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
          <div
            className="customer-dashboard-button-container"
            onClick={() => handleNavigation("customerRegApproval")}
          >
            <p>Request to change date of Sand Issue </p>
          </div>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
          <div className="customer-dashboard-button-container">
            <p>Apply for repair</p>
          </div>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
          <div className="customer-dashboard-button-container">
            <p>Next Booking</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
