import React from "react";
import "./BorderSnippet.css";
import { Link } from "react-router-dom";

const BorderSnippet = ({ border }) => {
  return (
    <div>
      <Link to={`/country/${border.toLowerCase()}`} className="snippet">
        {border}
      </Link>
    </div>
  );
};

export default BorderSnippet;
