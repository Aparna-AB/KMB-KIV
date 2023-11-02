import moment from "moment";

export const dateTime = (date) => {
  let formattedDate = moment(date).format("YYYY-MM-DD h:mm a");
  return formattedDate;
};

export const date = (date) => {
  let formattedDate = moment(date).format("YYYY-MM-DD ");
  return formattedDate;
};
export const month = (date) => {
  let formattedDate = moment(date).format("MMM YYYY ");
  return formattedDate;
};
export const dateonly = (date) => {
  let formattedDate = moment(date).format(" DD-MM-YYYY");
  return formattedDate;
};
