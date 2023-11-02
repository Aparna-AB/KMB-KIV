export const tableData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "134",
    owner_name: "test",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "234",
    website: "anastasia.net",
    owner_name: "test",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

export const Messages = {
  deleteHeader: " Delete Confirmation ",
  deleteMessage: " Are you sure you want to delete?",
  approveMsg:"Are you sure you want to Approve?",
  addMessage: "Data added successfully",
  reduceMessage: "Data reduced successfully",
  editMessage: "Data edited successfully",
  deletedMessage: "Data deleted successfully",
  spotbookingsuccessmsg: "Spot booking successfully completed",
  normalBookingSuccess: "Registration successfully completed",
  sandBookingsuccessmsg: "Booking successfully completed",
  sandApprovemsg: "Successfully Approved",

  sandBookingsuccessmsg: "Booking successfully completed",
  zoneAdd: "The zone has been successfully added.",
  zoneEdit: "The zone has been successfully updated.",
  zoneDelete: "The zone has been successfully deleted.",

  LSGDAdd: "The LSGD has been successfully added.",
  LSGDEdit: "The LSGD has been successfully updated.",
  LSGDDelete: "The LSGD has been successfully deleted.",

  quantityAdd: "The quantity has been successfully added.",
  quantityEdit: "The quantity has been successfully updated.",
  quantityDelete: "The quantity has been successfully deleted.",

  districtAdd: "The district has been successfully added.",
  districtEdit: "The district has been successfully updated.",
  districtDelete: "The district has been successfully deleted.",

  bankAdd: "The bank has been successfully added.",
  bankEdit: "The bank has been successfully updated.",
  bankDelete: "The bank has been successfully deleted.",

  canoeAdd: "The canoe has been successfully added.",
  canoeEdit: "The canoe has been successfully updated.",
  canoeDelete: "The canoe has been successfully deleted.",

  assignZoneAdd: "The assign zone has been successfully added.",
  assignZoneEdit: "The assign zone has been successfully updated.",
  assignZoneDelete: "The assign zone has been successfully deleted.",

  assignSectionAdd: "The assign section has been successfully added.",
  assignSectionEdit: "The assign section has been successfully updated.",
  assignSectionDelete: "The assign section has been successfully deleted.",

  updateSaleQuantityAdd: "The sale quantity has been successfully added.",
  updateSaleQuantityEdit: "The sale quantity has been successfully updated.",
  updateSaleQuantityDelete: "The sale quantity has been successfully deleted.",

  portAdd: "The port has been successfully added.",
  portEdit: "The port has been successfully updated.",
  portDelete: "The port has been successfully deleted.",

  sandRateAdd: "The sand rate has been successfully added.",
  sandRateEdit: "The sand rate has been successfully updated.",
  sandRateDelete: "The sand rate has been successfully deleted.",

  pcAdd: "The Port Conservator has been successfully added.",
  pcEdit: "The Port Conservator has been successfully updated.",
  pcDelete: "The Port Conservator has been successfully deleted.",

  LorryRegAdd: "The Lorry has been successfully added.",
  LorryRegEdit: "The Lorry has been successfully updated.",

  tonLimitAdd: "The Ton Limit has been successfully added.",

  workersAdd: "The Workers has been successfully added.",
  workersEdit: "The Workers has been successfully updated.",
  workersDelete: "The Workers has been successfully deleted.",
  OtpSuccess: "OTP verified successfully",
  otpFail: "Otp Vrification Failed",

  spotPCapproval: "The spot booking has been successfully approved.",
  approveMsg: "Successfully Aproved",
  rejectMsg: "Successfully Rejected",

  monthlypermitAdd: "The Monthly permit has been successfully added.",
  monthlypermitapprovemsg: "The Monthly permit has been successfully approved.",
  monthlypermitRejectmsg: "The Monthly permit has been Rejected.",
  permitApprovalPending: "PC approval Pending",

  downloadMessage: "Your file is ready to download",
};

export const pagination = {
  limit: 3,
};

export const statusOptions = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

export const vehicleType = [{ value: "Lorry", label: "Lorry" }];

export const localData = {
  add(value) {
    localStorage.setItem("kmb_dredging_application", JSON.stringify(value));
  },
  remove() {
    localStorage.removeItem("kmb_dredging_application");
  },
  load(key) {
    const stored = localStorage.getItem("kmb_dredging_application");
    return stored == null ? undefined : JSON.parse(stored);
  },
};

export const pcStatusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];
