import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./style.css";
function Index() {
  const navigate = useNavigate();

  const handleNavigation = (route) => navigate(`/${route}`);

  return (
    <Container>
<div>
      <h3>{"Customer Page"}</h3>
      </div>

      <div className="container_style">

        <div
          onClick={() => handleNavigation("newVesselOwnerRegistration")}
          className="button-container"
        >
          <p>{"New Vessel Owner Registration"}</p>
</div>
          <div
          onClick={() => handleNavigation("existingVesselOwnerRegistration")}
          className="button-container"
        >
          <p>{"Existing Vessel Owner Registration"}</p>
          
        </div>

      </div>
    </Container>
  );
}

export default Index;




