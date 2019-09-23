import React from "react";
import MaterialButton from "@material-ui/core/Button";
import "../index.css";

const Button = ({ label, handleClick }) => {
  return (
    <div className="flexi-padding">
      <MaterialButton
        variant="outlined"
        size="medium"
        color="primary"
        onClick={handleClick}
      >
        {label}
      </MaterialButton>
    </div>
  );
};

export default Button;
