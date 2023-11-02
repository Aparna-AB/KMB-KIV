import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CheckBox from "./checkbox";
import { dateTime, date, month, dateonly } from "../utils/moment";
import { pagination } from "../utils/constants";
import Form from "react-bootstrap/Form";
const CommonTable = ({ data, column, page }) => {
  return (
    <div>
      {data.length > 0 ? (
        <Table
          striped
          bordered
          hover
          responsive
          className="table-container kmb-table"
        >
          <thead>
            <tr>
              {column.map((item) => (
                <TableHeadItem key={item.heading} item={item} />
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length > 0 &&
              data.map((item, index) => (
                <TableRow
                  key={index}
                  item={item}
                  column={column}
                  index={index}
                  page={page}
                />
              ))}
          </tbody>
        </Table>
      ) : (
        <Table
          bordered
          responsive
          className="table-container kmb-table no-data-table"
        >
          <thead>
            <tr>
              {column.map((item) => (
                <TableHeadItem key={item.heading} item={item} />
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={9}>No data available</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;

const TableRow = ({ item, column, index, page }) => (
  <tr key={index}>
    {column.map((columnItem) => {
      if (columnItem.heading === "Sl. No.") {
        return (
          <td key={columnItem.heading}>
            {Number((page - 1) * pagination.limit + index + 1)}
          </td>
        );
      }
      if (columnItem.type === "button") {
        if (columnItem.permitCheck) {
          if (item[columnItem.value] === "Created") {
            return <td key={columnItem.heading}></td>;
          }
          if (item[columnItem.value] === "Rejected") {
            return <td key={columnItem.heading}>Rejected</td>;
          }
        }
      }
      if (columnItem.type === "button") {
        if (columnItem.blockstatusCheck) {
          console.log(item[columnItem.value]);
          if (item[columnItem.value] === "Active") {
            return (
              <td key={columnItem.heading}>
                <Button onClick={() => columnItem.onClick(item)} variant="link">
                  {columnItem.label}
                </Button>
              </td>
            );
          } else {
            return (
              <td key={columnItem.heading}>
                <Button onClick={() => columnItem.onClick(item)} variant="link">
                  Active
                </Button>
              </td>
            );
          }
        }
      }

      if (columnItem.type === "button") {
        if (columnItem.statusCheckVieworEdit) {
          console.log(item[columnItem.value]);
          if (item[columnItem.value] === "draft") {
            return (
              <td key={columnItem.heading}>
                <Button onClick={() => columnItem.onClick(item)} variant="link">
                  Edit
                </Button>
              </td>
            );
          } else {
            return (
              <td key={columnItem.heading}>
                <Button onClick={() => columnItem.onClick(item)} variant="link">
                  View
                </Button>
              </td>
            );
          }
        }
      }

      if (columnItem.type === "row") {
        if (columnItem.istruefalseCheck) {
          if (item[columnItem.value] === false) {
            return <td key={columnItem.heading}>Inactive</td>;
          }
          if (item[columnItem.value] === true) {
            return <td key={columnItem.heading}>Active</td>;
          }
        }
      }
      if (columnItem.type === "row") {
        if (columnItem.statusValueCheck) {
          if (item[columnItem.value] === "submitted") {
            return (
              <td key={columnItem.heading}>
                <span className="status-primary-text">Submitted</span>
              </td>
            );
          }
          if (item[columnItem.value] === "Approved") {
            return (
              <td key={columnItem.heading}>
                <span className="status-green-text"> Approved</span>
              </td>
            );
          }
          if (
            item[columnItem.value] === "Under Processing" ||
            item[columnItem.value] === "underprocessing"
          ) {
            return (
              <td key={columnItem.heading}>
                <span className="status-yellow-text"> Under Processing</span>
              </td>
            );
          }
          if (item[columnItem.value] === "Rejected") {
            return (
              <td key={columnItem.heading}>
                <span className="satus-red-text"> Rejected</span>
              </td>
            );
          }
          if (item[columnItem.value] === "Pending") {
            return (
              <td key={columnItem.heading}>
                <span className="status-yellow-text"> Pending</span>
              </td>
            );
          }
          if (
            item[columnItem.value] === "Issued" ||
            item[columnItem.value] === "issued"
          ) {
            return (
              <td key={columnItem.heading}>
                <span className="status-green-text"> Issued</span>
              </td>
            );
          }
          if (
            item[columnItem.value] === "draft" ||
            item[columnItem.value] === "Draft"
          ) {
            return (
              <td key={columnItem.heading}>
                <span className="status-gray-text">Draft</span>
              </td>
            );
          }
        }
      }
      if (columnItem.type === "button") {
        if (columnItem.statusCheck) {
          if (
            item[columnItem.value] === "pending" ||
            item[columnItem.value] === false ||
            item[columnItem.value] === "Created"
          ) {
            return (
              <td key={columnItem.heading}>
                <Button onClick={() => columnItem.onClick(item)} variant="link">
                  {columnItem.label}
                </Button>
              </td>
            );
          }

          if (
            item[columnItem.value] === "Draft" ||
            item[columnItem.value] === "draft"
          ) {
            return (
              <td key={columnItem.heading}>
                <Button onClick={() => columnItem.onClick(item)} variant="link">
                  Edit
                </Button>
              </td>
            );
          } else if (item[columnItem.value] === "reject") {
            return <td key={columnItem.heading}>Rejected</td>;
          } else if (item[columnItem.value] === "Rejected") {
            return <td key={columnItem.heading}>Rejected</td>;
          } else {
            return (
              <td key={columnItem.heading}>{columnItem.statusCheckLabel}</td>
            );
          }
        } else {
          return (
            <td key={columnItem.heading}>
              <Button onClick={() => columnItem.onClick(item)} variant="link">
                {columnItem.label}
              </Button>
            </td>
          );
        }
      }

      if (columnItem.type === "checkbox") {
        return (
          <td key={columnItem.heading}>
            {/* <CheckBox
              checked={isChecked(item)}
              onClick={(el) => columnItem.onClick(item)}
              variant="link"
            /> */}
            {item.isSelect ? (
              <Form.Check
                type={"checkbox"}
                id={item._id}
                // label={label}
                // onClick={(el) => columnItem.onClick(item, index)}
                checked={true}
                onChange={() => columnItem.onClick(item, index)}
              />
            ) : (
              <Form.Check
                type={"checkbox"}
                id={item._id}
                // label={label}
                // onClick={(el) => columnItem.onClick(item, index)}
                checked={false}
                onChange={() => columnItem.onClick(item, index)}
              />
            )}
          </td>
        );
      }

      if (columnItem.monthCheck) {
        if (columnItem.type === "date") {
          return (
            <td key={columnItem.heading}>
              {columnItem.format === "date"
                ? month(item[columnItem.value])
                : month(item[columnItem.value])}
            </td>
          );
        }
      }

      if (columnItem.dateOnly) {
        if (columnItem.type === "date") {
          return (
            <td key={columnItem.heading}>
              {columnItem.format === "date"
                ? dateonly(item[columnItem.value])
                : dateonly(item[columnItem.value])}
            </td>
          );
        }
      }

      if (columnItem.type === "date") {
        return (
          <td key={columnItem.heading}>
            {columnItem.format === "date"
              ? date(item[columnItem.value])
              : dateTime(item[columnItem.value])}
          </td>
        );
      }

      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split("."); //['address', 'city']
        return (
          <td key={columnItem.heading}>
            {item[itemSplit[0]] ? item[itemSplit[0]][itemSplit[1]] : "Nil"}
          </td>
        );
      }
      // else {
      //   return (
      //     <td key={columnItem.heading}>
      //       {item[columnItem.value] ? item[columnItem.value] : "Nil"}
      //     </td>
      //   );
      // }

      if (Array.isArray(item[columnItem.value])) {
        return (
          <td key={columnItem.heading}>{item[columnItem.value].join(", ")}</td>
        );
      } else {
        return (
          <td key={columnItem.heading}>
            {item[columnItem.value] ? item[columnItem.value] : "Nil"}
          </td>
        );
      }
    })}
  </tr>
);

export default CommonTable;
