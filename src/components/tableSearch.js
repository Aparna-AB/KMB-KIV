import React, { useMemo, useEffect } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import debouce from "lodash.debounce";

const TableSearch = ({
  handlePageCount,
  handleSearch,
  isOnlySearch,
  placeholder,
}) => {
  const handleSearchChange = (el) => {
    handleSearch(el.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleSearchChange, 2000);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      {isOnlySearch ? (
        <Col className="col-md-4">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={placeholder ? placeholder : "search"}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="search"
              onChange={debouncedResults}
              className="table-search"
            />
            <img
              src="../../../assets/icons/search.svg"
              className="table-search-icon"
            />
          </InputGroup>
        </Col>
      ) : (
        <Col>
          <InputGroup className="mb-3 mt-8">
            <Form.Control
              placeholder={placeholder ? placeholder : "search"}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="search"
              onChange={debouncedResults}
              className="table-search"
            />
            <img
              src="../../../assets/icons/search.svg"
              className="table-search-icon"
            />
          </InputGroup>
        </Col>
      )}
    </Row>
  );
};

export default TableSearch;
