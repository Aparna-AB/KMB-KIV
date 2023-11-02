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
import { useLazyFetchZoneBookingStatusQuery } from "../../../services/modules/customer/zoneBookingStatus";
import "./style.css";
import { getUserInfo } from "../../../utils/selectors";
import Loader from "../../../components/loader";

function LorryRegistration() {
  const [show, setShow] = useState(false);
  const [
    fetchZoneBookingStatus,
    { data, isSuccess, isLoading, isFetching, error },
  ] = useLazyFetchZoneBookingStatusQuery();
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const fetchAllZoneBookingStatus = (searchParams, pageSelected) => {
    const userId = getUserInfo()?.customerDetail?._id;
    pageSelected && setPage(pageSelected);
    fetchZoneBookingStatus({
      searchParams: searchParams,
      page: pageSelected,
      userId,
    });
  };
  useEffect(() => {
    fetchAllZoneBookingStatus();
  }, []);
  const tableColumns = [
    { heading: "Sl. No.", value: "slno", type: "row" },
    { heading: "Port Name", value: "port.name", type: "row" },
    { heading: "Zone Name", value: "pref_zone.name", type: "row" },
    { heading: "Total Booking", value: "ton_req", type: "row" },
    {
      heading: "Last sand Issued Pririty No.",
      value: "priority",
      type: "row",
    },
  ];

  const handlePageChange = (page) => {
    setPage(page?.selected + 1);
    fetchAllZoneBookingStatus(searchText, page?.selected + 1);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    fetchAllZoneBookingStatus(value, 1);
  };

  const handlePageCount = (value) => {};
  if (isLoading) return <Loader />;
  return (
    <Container>
      {/* <Breadcrumbs urls={urls} active={"Zone Booking Status"} /> */}
      <h4>Zone Booking Status</h4>
      <TableSearch
        handlePageCount={handlePageCount}
        handleSearch={handleSearch}
        isOnlySearch={true}
      />
      <Table data={data?.data ?? []} column={tableColumns} page={page} />
      <Pagination
        pageCount={data?.count ?? 0}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
}

export default LorryRegistration;
