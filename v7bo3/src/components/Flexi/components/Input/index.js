import React from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "../../../common/TextField";
import Dropdown from "../../../common/Dropdown";
import { Grid } from "@material-ui/core";

const Input = ({ item: itm, handleChange, value }) => {
  const cardClass = {
    textAlign: "center"
  };
  return (
    <div className="flexi-padding" style={{ padding: "10px" }}>
      <Paper className={cardClass} style={{ height: "100px" }}>
        <Grid item md={4} sm={6} xs={12}>
          {itm.type === "TextField" && (
            <TextField
              name={itm.name}
              label={itm.label}
              value={value}
              handleChange={handleChange}
            />
          )}
          {itm.type === "DropDown" && (
            <Dropdown
              name={itm.name}
              values={itm.values}
              label={itm.label}
              value={value}
              handleChange={handleChange}
            />
          )}
        </Grid>
      </Paper>
    </div>
  );
};

export default Input;
