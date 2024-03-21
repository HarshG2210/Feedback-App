import React from "react";
import spinner from "../assets/Spinner.gif";

function Loader() {
  return (
    <img
      alt="Loading..."
      src={spinner}
      style={{
        width: "100px",
        margin: "auto",
        display: "block",
      }}
    />
  );
}

export default Loader;
