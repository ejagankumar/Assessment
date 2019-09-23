import React from "react";
import Button from "../common/Button";
import { Grid } from "@material-ui/core";
import Input from "./components/Input";
import Paper from "@material-ui/core/Paper";
class Flexi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log(this.props);
    let stateObject = {};
    for (let item of this.props.flexiConfig.items) {
      stateObject[item.name] = "";
    }
    this.setState({
      ...stateObject
    });
  }
  handleChange = (element, e) => {
    console.log(e);

    this.setState({
      [element]: e.target.value
    });
  };
  render() {
    const { flexiConfig, onSubmit } = this.props;
    const { items = [] } = flexiConfig;
    console.log(this.state, "State");
    return (
      <div>
        <Paper>
          <Grid container spacing={20}>
            {/* <Grid item md={12} style={{ textAlign: "center" }}> */}
            {items.map((item, index) => {
              return (
                <Input
                  item={item}
                  value={this.state[item.name]}
                  itemState={this.state}
                  handleChange={this.handleChange}
                />
              );
            })}
            {/* </Grid> */}
          </Grid>
          <Grid container spacing={20}>
            <Grid item md={4} />
            <Grid item md={4}>
              <Button
                label="Submit"
                handleClick={() => {
                  onSubmit(this.state);
                }}
              />
            </Grid>
            <Grid item md={4} />
          </Grid>
        </Paper>
        <Paper>
          <h2>Output</h2>
          {JSON.stringify(this.state)}
        </Paper>
      </div>
    );
  }
}

export default Flexi;
