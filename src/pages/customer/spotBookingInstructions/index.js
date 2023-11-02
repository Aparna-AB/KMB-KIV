import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumbs from "../../../components/breadCrumb";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import RegInstructionsModal from "../../../components/regInstructionsModal";
import RegInstructionsModalMessage from "./successMessage";
import { Messages } from "../../../utils/constants";


import "./style.css";

const Index = () => {
    const [show, setShow] = useState(false);

    const urls = [
        {
          route: "",
          label: "Home",
          active: "false",
        },
       
       
      ];

const [deleteModalVisible, setDeleteModal] = useState(false);
      const handleClose = () => setShow(false);

      const handleShow = () => setShow(true);
    
      const handleDeleteClick = () => setDeleteModal(!deleteModalVisible);
  
    
  
    const handleOnclick = (item) => {
      handleShow();
    };
  
    const handlePageChange = (page) => {
      //TODO API Service call
    };


    return (
        <Container>
            <RegInstructionsModalMessage show={show} handleClose={handleClose} />
           <RegInstructionsModal
        handleShow={handleDeleteClick}
        show={deleteModalVisible}
        handleClose={handleDeleteClick}
        message={Messages.deleteMessage}
        headerMessage={Messages.deleteHeader}
      />
          <Breadcrumbs urls={urls}  active={"Home"}/>

          <h5> Spot Booking Online</h5>

<a href="spotRegistration">Spot Registration</a><br></br>
<a href="bookingLimit">Booking Limit</a>

<br></br><br></br>
<h3 className="heading">Spot Booking Instructions</h3>

    <div className="instructions">
      <ul>
        <li>
        സ്പോട്ട് ബുക്കിം രജിസ്‌ട്രേഷൻ സമയം 
        11:30 am മുതൽ 4:30 pm വരെ ആയിരിക്കും .
        </li>

        <li>
        ഓൺലൈൻ പെയ്‌മെന്റ് സംവിധാനം വഴി 
        മാത്രമേ സ്‌പോട്ട് ബുക്കിങ്ങിനു പണമടയ്ക്കുവാൻ സാദിക്കുകയുള്ളു .
        </li>

        <li>
        സ്പോട്ട് ബുക്കിംഗ് വഴി മണൽ ലഭ്യമാക്കുന്നതിന് ആധാർ നിർബന്ധമാണ് .
        </li>

        <li>
        സ്പോട്ട് ബുക്കിംഗ് സമയത്തു നൽകുന്ന ആധാർ തന്നെ ആയിരിക്കണം 
        മണൽ എടുക്കുന്ന സമയത്തു കൊണ്ടുവരേണ്ടത് അല്ലാത്ത പക്ഷം ആ ബുക്കിംഗ് 
        നിരസിക്കുന്നത് ആയിരിക്കും .
        </li>

        <li>
        ഏതെങ്കിലും കാരണവശാൽ സ്പോട്ട് ബുക്കിംഗ് നിരസിക്കുകയാണെങ്കിൽ
         500 രൂപ കുറച്ച് ബാക്കി തുക മാത്രമേ തിരികെ ലഭിക്കുകയുള്ളു .
        </li>

        <li>
        തിരികെ തുക ലഭ്യമാക്കുന്നതിന് അതാത് സ്പോട്ട് ഓഫീസിൽ 
        അപേക്ഷ നൽകേണ്ടതാണ് .
        </li>

        <li>
        സ്പോട്ട് ഓഫീസർ അപേക്ഷ പരിശോധിച്ചതിനു ശേഷം 
        അർഹമായ തുക ഉപഭോക്താവ് ടി തുക അടയ്ക്കുന്നതിന് ഉപയോഗിച്ച 
        അക്കൗണ്ടിലേക്ക് നിക്ഷേപിക്കുന്നതാണ് .
        </li>

        <li>
        സ്പോട്ട് ബുക്കിംഗ് വഴി മണൽ ലഭ്യമാക്കുന്നതിന് നൽകുന്ന 
        മൊബൈൽ നമ്പർ ഒരിക്കൽ അപേക്ഷിച്ചു കഴിഞ്ഞാൽ പിന്നെ അതെ 
        മൊബൈൽ നമ്പർ 2 ദിവസത്തിന് ശേഷം മാത്രമേ നൽകാൻ പാടുള്ളു 
        അല്ലാത്ത പക്ഷം അപേക്ഷ നിരസിക്കുന്നതാണ് .
        </li>
       
      </ul>
    </div>

    <Row className="view-button-container">
        <Col>
          <Button label={"Submit"} onClick={handleOnclick}></Button>
        </Col>
      </Row>
        </Container>
    )
};
export default Index;