import React from "react";
import { Select } from "@material-ui/core";
import "../index.css";
const Dropdown = ({ handleChange, values = [], value, label, name }) => {
  return (
    <div className="flexi-padding dropdown">
      <h4 style={{ display: "inline" }}> {label}</h4>
      <Select
        native
        value={value}
        id={name}
        onChange={e => {
          handleChange(name, e);
        }}
      >
        <option value="" />
        {values.map((value, index) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

export default Dropdown;
