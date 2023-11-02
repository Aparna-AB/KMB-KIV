import { useEffect, useState } from "react";
import { Field, useFormik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import TextBox from "../../../../components/textBox";
import TextArea from "../../../../components/textArea";
import SelectBox from "../../../../components/Selectbox";
import Button from "../../../../components/button";
import Table from "../../../../components/table";

import * as Yup from "yup";

import "./style.scss";
 


function RegisterForm({changeTab, handleUpdateForm, ActionType, state, handleClose,
    handleUpdateData}){
        const [dataTable, setDataTable] = useState([]);
        const handleChangeTab = (form3) => {
            changeTab(form3);
          };

    const inputFields = [
        {
            label: "Name of Vessel (if already named)/Yard Number",
            id: "vessel_name",
            name: "vessel_name",
            type: "text",
            required: true,
        },
        {
            label: "Type of Vessel",
            id: "type_vessel",
            name: "type_vessel",
            type: "text",
            required: true,
        },
        {
            label: "Category of Vessel",
            id: "category",
            name: "category",
            type: "text",
            required: true,
        },
        {
            label: "No. of Passengers",
            id: "num_passenger",
            name: "num_passenger",
            type: "text",
            required: true,
        },
        {
            label: "Official No.",
            id: "vtype",
            name: "vtype",
            type: "text",
            required: true,
        },
        {
            label: "Hull Material",
            id: "hull_material",
            name: "hull_material",
            type: "text",
            required: true,
        },
        {
            label: "Name of Builder",
            id: "name_builder",
            name: "name_builder",
            type: "text",
            required: true,
        },
        {
            label: "Place of Build",
            id: "place_build",
            name: "place_build",
            type: "text",
            required: true,
        },
        {
            label: "Date of Build",
            id: "date_build",
            name: "date_build",
            type: "text",
            required: true,
        },
        {
            label: "Means of Propulsion",
            id: "propulsion",
            name: "propulsion",
            type: "text",
            required: true,
        },
        {
            label: "Total British Horse Power of Main Engine",
            id: "total",
            name: "total",
            type: "text",
            required: true,
        },
        {
            label: "Date of Engine Manufacture",
            id: "date_manufacture",
            name: "date_manufacture",
            type: "text",
            required: true,
        },
        {
            label: "Length",
            id: "Length",
            name: "Length",
            type: "text",
            required: true,
        },
        {
            label: "Breadth",
            id: "Breadth",
            name: "Breadth",
            type: "text",
            required: true,
        },
       
        {
            label: "Depth",
            id: "Depth",
            name: "Depth",
            type: "text",
            required: true,
        },
        {
            label: "Gross RegisteredTonnage",
            id: "gross_regTonnage",
            name: "gross_regTonnage",
            type: "text",
            required: true,
        },
        {
            label: "Net RegisteredTonnage",
            id: "net_regTonnage",
            name: "net_regTonnage",
            type: "text",
            required: true,
        },
        


    ];

    const initialValues = {
        vessel_name: "",
        type_vessel: "",
        category: "",
        num_passenger: "",
        vtype: "",
        hull_material: "",
        name_builder: "",
        place_build: "",
        date_build: "",
        propulsion: "",
        total: "",
        date_manufacture: "",
        Length: "",
        Breadth: "",
        Depth: "",
        gross_regTonnage: "",
        net_regTonnage: "",

};

const requiredField = (name) => Yup.string().required(`${name} is required!`);

const validationSchema = Yup.object({
   
    vessel_name: requiredField("Reference Name"),
    type_vessel: requiredField("Type of Vessel"),
    category: requiredField("Category of Vessel"),
    num_passenger: requiredField("No of Passenger"),
    vtype: requiredField("Official Number"),
    hull_material: requiredField("Hull Material"),
    name_builder: requiredField("Name of Builder"),
    place_build: requiredField("Place of Build"),
    date_build: requiredField("Date of Build"),
    propulsion: requiredField("Means of Propulsion"),
    total: requiredField("Total British Horse Power of Main Engine"),
    date_manufacture: requiredField("Date of Engine Manufacture"),
    Length: requiredField("Length"),
    Breadth: requiredField("Breadth"),
    Depth: requiredField("Depth"),
    gross_regTonnage: requiredField("Gross Registered Tonnage"),
    net_regTonnage: requiredField("Net Registered Tonnage"),
  });


  const onSubmit = (values) => {
      changeTab("form3");
      handleUpdateForm(values, ActionType.FORM_TWO);
  };
  
  const formik = useFormik({
       initialValues,
       validationSchema,
      onSubmit,
  });

  useEffect(() => {
      const { 
        vessel_name,
        type_vessel,
        category,
        num_passenger,
        vtype,
        hull_material,
        name_builder,
        place_build,
        date_build,
        propulsion,
        total,
        date_manufacture,
        Length,
        Breadth,
        Depth,
        gross_regTonnage,
        net_regTonnage,
      } = state || {} ;
      
      const fieldValues = { 
        vessel_name,
        type_vessel,
        category,
        num_passenger,
        vtype,
        hull_material,
        name_builder,
        place_build,
        date_build,
        propulsion,
        total,
        date_manufacture,
        Length,
        Breadth,
        Depth,
        gross_regTonnage,
        net_regTonnage,
      };

      Object.keys(fieldValues).forEach((field) => {
          formik.setFieldValue(field, fieldValues[field] ?? "");
        });
    }, []);
  

    const tableColumns = [
        { heading: "Fire Fighting Item", value :"item", type: "row"},
        { heading: "FNumber/Type", value :"type", type: "row"},
        { heading: "Condition", value :"condition", type: "row"},
        { heading: "Location", value :"location", type: "row"}
    ];

    useEffect(() => {
        newFunction();
    }, []);

    function newFunction() {
        let data = [
            {
                item: "Fire Fighting Plan",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Fire Fighting Plan",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Fire Pumps (Mech)",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Fire Pumps (Hand)",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Portable Extinguishers",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Fixed Extinguishing System",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Fire Buckets",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Sand Boxes",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Hydrants",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            },
            {
                item: "Hoses, Fittings and Nozzles",
                type: "Display Field",
                condition: "Display Field",
                location: "Display Field"
            }
            
        ];
        setDataTable(data);
    }

   
  
    return (
        <div>
            <div className="row">
                <h4>Form Number 7 </h4>
                <h4>Particular To Be Furnished For Survey Of New Vessel Or Vessels Which Are To Be Surveyed For The First Time</h4>
            </div>
            <form  onSubmit={formik.handleSubmit}>
                <Row className="justify-content-md">
                    
                        {inputFields.map((input) => (
                            <Col md={4}>
                            <TextBox
                            label={input.label}
                            id={input.id}
                            name={input.name}
                            type={input.type}
                            onChange={formik.handleChange}
                            value={formik.values[input.name]}
                            touched={formik.touched[input.name]}
                            error={formik.errors[input.name]}
                            required={input.required}
                            key={input.id}
                          />
                          </Col>
                          
                        ) )}
                                      
                </Row><br/>
                <div className="">
                <Row>
                            <div className="fire_fitings">
                                <Table data={dataTable} column={tableColumns} />
                            </div>
                        </Row>
                </div>
               
                
                    <Container className="container">
                        <Row className="button-container">
                            <Col className="btn-col address-button d-flex justify-content-center">
                            <Button
                label="Back"
                className="btn-sucess float-right btn-outline"
                onClick={() => handleChangeTab("form1")} 
              />                  
                                <Button
                                    label="Next"
                                    type="submit"
                                    className="btn-sucess float-right btn-default"
                                />
                            </Col>
                        </Row>
                    </Container>

                    
                
                

            </form>
        </div>
    );

};

export default RegisterForm;