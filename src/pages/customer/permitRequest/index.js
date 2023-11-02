import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Table from "../../../components/table";
import Button from "../../../components/button";
import Pagination from "../../../components/pagination";
import TableSearch from "../../../components/tableSearch";
import "./style.scss";
import ConfirmationModal from "../../../components/confirmationModal";
import { Messages } from "../../../utils/constants";
import {
  useLazyFetchBankQuery,
  useUpdateBankMutation,
  useAddBankMutation,
} from "../../../services/modules/portConservator/bank";

import Loader from "../../../components/loader";
import SuccessModal from "../../../components/successModal";
import { getUserInfo } from "../../../utils/selectors";

const AddZoneForm = React.lazy(() => import("./components/approvalForm"));

const Index = () => {
  const [show, setShow] = useState(false);
  const [deleteModalVisible, setDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [isEdit, setEdit] = useState(false);
  const [message, setMessage] = useState("");
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [showSuccess, setSuccessModal] = useState(false);

  const [fetchBank, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchBankQuery();
  const [updateBank, { data: updateData, isLoading: updateLoading }] =
    useUpdateBankMutation();
  const [addBank, { data: addBankData, isLoading: addLoading }] =
    useAddBankMutation();

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setMessage(Messages.bankDelete);
    setDeleteModal(!deleteModalVisible);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setEdit(true);
    setShow(!show);
  };

  const tableColumns = [
    { heading: "Sl. No.", value: "name", type: "row" },
    { heading: "Permit Number", value: "branch_name", type: "row" },
    { heading: "Status", value: "status", type: "row" },

   ];

  useEffect(() => {
    if (addBankData?.success) {
      setSuccessModal(true);
      fetchAllBank();
    }
  }, [addBankData]);

  useEffect(() => {
    if (updateData?.success) {
      setSuccessModal(true);
      fetchAllBank();
    }
  }, [updateData]);

  useEffect(() => {
    fetchAllBank();
  }, []);

  const handleUpdateData = (isEdit, postData) => {
    if (isEdit) {
      const id = selectedItem?._id;
      updateBank({ data: postData, id });
      setMessage(Messages.bankEdit);
    } else {
      addBank(postData);
      setMessage(Messages.bankAdd);
    }
    setShow(false);
    fetchAllBank();
  };

  const handleClose = (data) => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleAddBank = (item) => {
    setEdit(false);
    setShow(!show);
  };

  const handlePageChange = (page) => {
    setPage(page?.selected + 1);
    fetchAllBank(searchText, page?.selected + 1);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    fetchAllBank(value, 1);
  };

  const handlePageCount = (value) => {};

  const handleDelete = () => {
    const updatedData = { ...selectedItem, status: "Deleted" };
    const id = selectedItem?._id;
    updateBank({ data: updatedData, id });
    setDeleteModal(!deleteModalVisible);
  };

  const fetchAllBank = (searchParams, pageSelected) => {
    const userId = getUserInfo()?.customerDetail?._id;
    pageSelected && setPage(pageSelected);
    fetchBank({
      searchParams: searchParams,
      page: pageSelected,
      userId: userId,
    });
  };

  if (isLoading || updateLoading || addLoading) return <Loader />;

  return (
    <Container>
      {show && (
        <AddZoneForm
          show={show}
          handleUpdate={handleUpdateData}
          selectedItem={selectedItem}
          isEdit={isEdit}
          handleClose={handleClose}
        />
      )}
      <ConfirmationModal
        show={deleteModalVisible}
        message={Messages.deleteMessage}
        headerMessage={Messages.deleteHeader}
        handleDelete={handleDelete}
        handleClose={() => setDeleteModal(!deleteModalVisible)}
      />
      {showSuccess && (
        <SuccessModal
          show={showSuccess}
          message={message}
          handleClose={() => setSuccessModal(false)}
        />
      )}
      <div className="pc-container">
        <h4>Bank</h4>
        <Row className="view-button-container">
          <Col>
            <Button
              label={"Permit Request Form"}
              onClick={handleAddBank}
              className={"add-new-btn"}
            ></Button>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <TableSearch
              handlePageCount={handlePageCount}
              handleSearch={handleSearch}
            />
          </Col>
        </Row>

        <Table data={data?.data ?? []} column={tableColumns} page={page} />
        <Pagination
          pageCount={data?.count ?? 0}
          handlePageChange={handlePageChange}
        />
      </div>
    </Container>
  );
};

export default Index;
