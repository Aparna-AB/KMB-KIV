import React from "react";
import ReactPaginate from "react-paginate";
import { pagination } from "../utils/constants";
const Pagination = ({ pageCount, handlePageChange }) => {
  const itemPerPage = Math.ceil(pageCount / pagination.limit);

  return (
    <div className="pagination-container">
      {pageCount > pagination.limit && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          renderOnZeroPageCount={null}
          pageCount={itemPerPage}
          onPageChange={handlePageChange}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
          pageRangeDisplayed={pagination.limit}
        />
      )}
    </div>
  );
};

export default Pagination;
