import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
const Toaster = ({ message, show, hideToast, error }) => {
  const notify = async () => {
    if (error) {
      await toast.error(message, {});
    } else {
      await toast(message, {});
    }
  };
  useEffect(() => {
    if (show) {
      notify();
    }
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />
    </>
  );
};

export default Toaster;
