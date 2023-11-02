import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/breadCrumb";

import Table from "../../../components/table";
import Button from "../../../components/button";
import Pagination from "../../../components/pagination";
import TableSearch from "../../../components/tableSearch";
import { tableData } from "../../../utils/constants";
// import { useLazyFetchSandBookingHistoryQuery } from "../../../services/modules/customer/sandBookingHistory";
import { useLazyFetchSandBookingHistoryQuery } from "../../../services/modules/customer/sandBooking";

// import { useLazyFetchZoneBookingStatusQuery } from "../../../services/modules/customer/zoneBookingStatus";
import { getUserInfo } from "../../../utils/selectors";
import Loader from "../../../components/loader";
import "./style.css";

function LorryRegistration() {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [
    fetchsandBookingHistory,
    { data, isSuccess, isLoading, isFetching, error },
  ] = useLazyFetchSandBookingHistoryQuery();

  const handleShow = () => setShow(true);

  const handleOnclick = (item) => {
    handleShow(!show);
  };

  const fetchAllsandBookingHistory = (searchParams, pageSelected) => {
    const userId = getUserInfo()?.customerDetail?._id;
    console.log(userId);
    pageSelected && setPage(pageSelected);
    fetchsandBookingHistory({
      searchParams: searchParams,
      page: pageSelected,
      userId,
    });
  };
  useEffect(() => {
    fetchAllsandBookingHistory();
  }, []);

  const tableColumns = [
    { heading: "Sl. No.", value: "slno", type: "row" },
    { heading: "Port & Zone", value: "port.name", type: "row" },
    { heading: "Sand Quantity", value: "sand_cost", type: "row" },
    { heading: "Priority No.", value: "priority", type: "row" },
    { heading: "Token No.", value: "token", type: "row" },
    { heading: "Cancel Booking", value: "no_of_trips", type: "row" },
    { heading: "Status", value: "status", type: "row" },
    { heading: "Allotted Date", value: "alloteddate", type: "row" },
    // { heading: "Download", value: "status", type: "row" },
    { heading: "Payment Status", value: "payment_status", type: "row" },
  ];

  const handlePageChange = (page) => {
    setPage(page?.selected + 1);
    fetchAllsandBookingHistory(searchText, page?.selected + 1);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    fetchAllsandBookingHistory(value, 1);
  };

  const handlePageCount = (value) => {};
  if (isLoading) return <Loader />;
  return (
    <Container>
      {/* <Breadcrumbs urls={urls} active={"Sand Booking History"} /> */}
      <h4 style={{ marginBottom: "20px" }}>Sand Booking History</h4>
      <div className="quantity-header">
        <p>Allotted Quantity:</p>
        <p>{data?.alloted_qty}</p>
      </div>

      <div className="quantity-header">
        <p>Used Quantity: </p>
        <p>{data?.used_qty}</p>
      </div>

      <div className="quantity-header">
        <p>Balance Quantity: </p>
        <p>{data?.balance_qty}</p>
      </div>

      <TableSearch
        handlePageCount={handlePageCount}
        handleSearch={handleSearch}
        isOnlySearch={true}
      />
      <Table data={data?.history ?? []} column={tableColumns} page={page} />
      <Pagination
        pageCount={data?.count ?? 0}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
}

export default LorryRegistration;
