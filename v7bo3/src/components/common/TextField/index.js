import React from "react";
import TextBox from "@material-ui/core/TextField";
import "../index.css";

const TextField = ({ label, value, handleChange, name }) => {
  return (
    <div className="flexi-padding">
      <TextBox
        id={name}
        label={label}
        value={value}
        onChange={e => {
          handleChange(name, e);
        }}
        margin="normal"
      />
    </div>
  );
};

export default TextField;
