import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import "./style.css";

function Dashboard() {
  
  useEffect(() => {});

  const navigate = useNavigate();
  const handleNavigation = (route) => navigate(`/${route}`);

  return (
    <Container className="dashboard-container">
      <Row>
        <h1> Dashboard </h1>
        
      </Row>

      
    </Container>
  );
}

export default Dashboard;
