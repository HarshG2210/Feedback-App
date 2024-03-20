import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        {/* <Link to={{
        pathname: "/about",
        search: "?1234",
        hash:"#hello"
      }}> */}
        <FaQuestion />
      </Link>
    </div>
  );
}

export default AboutIconLink;
