import React from "react";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Page Not Found</h1>
      <p style={styles.message}>
        Oops! The page you are looking for does not exist.
      </p>
      {/* You can add additional elements or styling here */}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  message: {
    fontSize: "18px",
  },
};

export default NotFound;
