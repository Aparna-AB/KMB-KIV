import { useEffect } from "react";
import { useFormik } from "formik";
import { Container } from "react-bootstrap";
import * as Yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TextBox from "../../../components/textBox";
import Button from "../../../components/button";
import SelectBox from "../../../components/Selectbox";
// import CheckBox from "../../../components/checkbox";
import RadioButton from "../../../components/radioButton";

import "./style.css";


const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/;

function NewVesselOwnerRegistration({ changeTab, handleUpdateForm, ActionType, state, show, handleClose }) {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const options1 = [
    { value: "v1", label: "" },
    { value: "v2", label: "" },
    ];

  const initialValues = {
    nameOfOwnerRepresentative: "",
    ownerName: "",
    Email: "",
    desiredUserName: "",
    categoryOfVessel: "",
    lengthOfVessel: "",
    depthOfVessel: "",
    proposedYearOfCompletion: "",
    registrationType: "",
    addressOfOwnerRepresentative: "",
    addressofOwner: "",
    Mobile: "",
    nameOfVessel: "",
    subCategoryOfVessel: "",
    breadthOfVessel: "",
    vesselType: "",
    subVesselType: "",
    enterTextasBelow: "",
  };

  const requiredField = (name) => Yup.string().required(`${name} is required!`);

  const validationSchema = Yup.object({
    nameOfOwnerRepresentative: requiredField("Name of owner Representative"),
    ownerName: requiredField("Name of Owner"),
    Email: requiredField("Email id"),
    desiredUserName: requiredField("Desired Username"),
    categoryOfVessel: requiredField("Category of Vessel"),
    lengthOfVessel: requiredField("Length of Vessel"),
    depthOfVessel: requiredField("Depth of Vessel"),
    proposedYearOfCompletion: requiredField("Proposed Year of Completion"),
    registrationType: requiredField("Registration Type"),
    addressOfOwnerRepresentative: requiredField("Address of Owner Representative"),
    addressofOwner: requiredField("Address of Owner"),
    
    nameOfVessel: requiredField("Name of Vessel"),
    subCategoryOfVessel: requiredField("Sub-Category of Vessel"),
    breadthOfVessel: requiredField("Breadth of Vessel"),
    vesselType: requiredField("Vessel Type"),
    subVesselType: requiredField("Sub-Vessel Type"),
    enterTextasBelow: requiredField("Enter Text as Below"),
     Mobile: Yup.string()
     .matches(phoneRegExp, "Phone Number is not valid")
     .required("Phone Number is required!"),
      
  
  });

//   const onSubmit = (values) => {
//     const { nameOfOwnerRepresentative, ownerName, Email, desiredUserName, categoryOfVessel, lengthOfVessel, 
//         depthOfVessel, proposedYearOfCompletion, registrationType, addressOfOwnerRepresentative,
//         addressofOwner, Mobile, nameOfVessel, subCategoryOfVessel, breadthOfVessel, vesselType,
//         subVesselType, enterTextasBelow } = values;
//     let postData = {
//         nameOfOwnerRepresentative: nameOfOwnerRepresentative,
//         ownerName: ownerName,
//         Email: Email,
//         desiredUserName: desiredUserName,
//         categoryOfVessel: categoryOfVessel,
//         lengthOfVessel: lengthOfVessel,
//         depthOfVessel: depthOfVessel,
//         proposedYearOfCompletion: proposedYearOfCompletion,
//         registrationType: registrationType,
//         addressOfOwnerRepresentative: addressOfOwnerRepresentative,
//         addressofOwner: addressofOwner,
//         Mobile: Mobile,
//         nameOfVessel: nameOfVessel,
//         subCategoryOfVessel: subCategoryOfVessel,
//         breadthOfVessel: breadthOfVessel,
//         vesselType: vesselType,
//         subVesselType: subVesselType,
//         enterTextasBelow: enterTextasBelow,
      
//     };
   
//   };

const onSubmit = (values) => {
    //TODO:API Service call
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const isTouched = (fieldName, formik) => {
    const isCondition = formik.touched[fieldName] && formik.errors[fieldName];
    return isCondition ? true : false;
  };

   const handleRadioButton = (label, value) => {
    const otherLabel = label === "approve" ? "reject" : "approve";

    
    formik.setValues((prevValues) => ({
        ...prevValues,
        [otherLabel]: false,
        [label]: value,
      }));
    };

//  
//  
//         <Row className="button-container">
//           <Col className="btn-col address-button">
//             <a className="btn-outline " onClick={() => changeTab("main")}>
//               Previous
//             </a>
//           </Col>

//           <Col className="address-button btn-col2">
//             <Button
//               label="Next"
//               type="submit"
//               className="btn-sucess float-right"
//             />
//           </Col>
//         </Row>
//       </form>
//     </div>
//   );


return (
        <div className="content-a" >
            <div style={{textAlign:"right"}}>
                <a href="customer">Back</a>
            </div>
         <form className="" onSubmit={formik.handleSubmit}>
            <Col className="justify-content-md-center addresrow">
              {/* <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className=""> */}
                <div>
                  <h5 className="address-name">New Vessel Owner Registration</h5>
                </div><br></br>
                
<div style={{lineHeight: "40px"}}>
    <Container>
        <div>
        {/* <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}> */}
        {/* <Row xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}> */}
        <div>
        <Row>
        <TextBox
                        label="Name of Owner's Representative(if any)"
                        id="nameOfOwnerRepresentative"
                        name="nameOfOwnerRepresentative"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.nameOfOwnerRepresentative}
                        touched={isTouched("nameOfOwnerRepresentative", formik)}
                        error={formik.errors.nameOfOwnerRepresentative}
                      />

                       <TextBox
                        label="Name of Owner"
                        id="ownerName"
                        name="ownerName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.ownerName}
                        touched={isTouched("ownerName", formik)}
                        error={formik.errors.ownerName}
                      />

                    <TextBox
                        label="Email Id"
                        id="Email"
                        name="Email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Email}
                        touched={isTouched("Email", formik)}
                        error={formik.errors.Email}
                      />

                  <TextBox
                        label="Desired Username"
                        id="desiredUserName"
                        name="desiredUserName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.desiredUserName}
                        touched={isTouched("desiredUserName", formik)}
                        error={formik.errors.desiredUserName}
                      />
                      <br></br>

<SelectBox
                        id="categoryOfVessel"
                        options={options1}
                        label="Category of Vessel"
                        name="categoryOfVessel"
                        value={formik.values.zone}
                        onChange={formik.handleChange}
                        isRequired={true}
                        isTouched={isTouched("categoryOfVessel", formik)}
                        error={formik.errors.categoryOfVessel}
                        // className="select"
                        // required={true}
                      />
<br></br>
                        <TextBox
                        label="Length of Vessel(in meters)"
                        id="lengthOfVessel"
                        name="lengthOfVessel"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lengthOfVessel}
                        touched={isTouched("lengthOfVessel", formik)}
                        error={formik.errors.lengthOfVessel}
                      />

                        <TextBox
                        label="Depth of Vessel(in meters)"
                        id="depthOfVessel"
                        name="depthOfVessel"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.depthOfVessel}
                        touched={isTouched("depthOfVessel", formik)}
                        error={formik.errors.depthOfVessel}
                      />

                        <TextBox
                        label="Proposed Year of Completion"
                        id="proposedYearOfCompletion"
                        name="proposedYearOfCompletion"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.proposedYearOfCompletion}
                        touched={isTouched("proposedYearOfCompletion", formik)}
                        error={formik.errors.proposedYearOfCompletion}
                      />

                  
                      <div
                     
                     style={{
                          display: "flex",
                          flexDirection: "row",
                           margin: "30px 10px",
                           justifyContent:"space-around",
                        }}
                      >
                         Registration Type 
                        <RadioButton
                      
                          id={"newVessel"}
                          label={"New Vessel"}
                          name="newVessel"
                          onClick={(value) =>
                            handleRadioButton("newVessel", value)
                          }
                          checked={formik.values.newVessel}
                        />
                       
                         </div>

                      </Row>
                      </div>

</div>
<div className="content-b">
    <Row>
    <div>
<Col >
  
                    <TextBox
                        label="Address Owner's Representative"
                        id="addressOfOwnerRepresentative"
                        name="addressOfOwnerRepresentative"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.addressOfOwnerRepresentative}
                        touched={isTouched("addressOfOwnerRepresentative", formik)}
                        error={formik.errors.addressOfOwnerRepresentative}
                      />

                    <TextBox
                        label="Address of Owner"
                        id="addressOfOwner"
                        name="addressOfOwner"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.addressOfOwner}
                        touched={isTouched("addressOfOwner", formik)}
                        error={formik.errors.addressOfOwner}
                      />
       
                    <TextBox
                        label="Mobile Number"
                        id="Mobile"
                        name="Mobile"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Mobile}
                        touched={isTouched("Mobile", formik)}
                        error={formik.errors.Mobile}
                      />

                    <TextBox
                        label="Name of Vessel"
                        id="nameOfVessel"
                        name="nameOfVessel"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.nameOfVessel}
                        touched={isTouched("nameOfVessel", formik)}
                        error={formik.errors.nameOfVessel}
                      />

                    <TextBox
                        label="Sub Category of Vessel"
                        id="subCategoryOfVessel"
                        name="subCategoryOfVessel"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.subCategoryOfVessel}
                        touched={isTouched("subCategoryOfVessel", formik)}
                        error={formik.errors.subCategoryOfVessel}
                      />

                        <TextBox
                        label="Breadth of Vessel(in meters)"
                        id="breadthOfVessel"
                        name="breadthOfVessel"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.breadthOfVessel}
                        touched={isTouched("breadthOfVessel", formik)}
                        error={formik.errors.breadthOfVessel}
                      />

                        <TextBox
                        label="Vessel Type"
                        id="vesselType"
                        name="vesselType"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.vesselType}
                        touched={isTouched("vesselType", formik)}
                        error={formik.errors.vesselType}
                      />

                        <TextBox
                        label="Sub Vessel Type"
                        id="subVesselType"
                        name="subVesselType"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.subVesselType}
                        touched={isTouched("subVesselType", formik)}
                        error={formik.errors.subVesselType}
                      />

                        <TextBox
                        label="Enter Text as Below"
                        id="enterTextasBelow"
                        name="enterTextasBelow"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.enterTextasBelow}
                        touched={isTouched("enterTextasBelow", formik)}
                        error={formik.errors.enterTextasBelow}
                      />
                       </Col>
                      </div>
       
        </Row>
        
        </div>
        <div>
              <Button onClick={handleClose} label={"Close"}></Button>
            <Button type="submit" label={"Submit"}></Button>
            </div>
    </Container>
</div>

</Col>
</form>
</div>
);

}
export default NewVesselOwnerRegistration;
