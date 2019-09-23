import React from "react";
import ReactDOM from "react-dom";
import Paper from "@material-ui/core/Paper";
import "./styles.css";
import Flexi from "./components/Flexi";
import TextField from "./components/common/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

class App extends React.Component {
  state = {
    flexiConfig: {
      items: [
        {
          name: "person_name",
          label: "Person's Name",
          type: "TextField"
        },
        {
          name: "states",
          label: "Person's state",
          type: "DropDown",
          values: ["Maharashtra", "Kerala", "Tamil Nadu"]
        }
      ]
    }
  };
  handleChange = e => {
    this.setState({ flexiConfig: e.target.value });
  };
  onFlexiSubmit(object) {
    console.log(object);
  }

  render() {
    const { flexiConfig } = this.state;
    return (
      <div className="App">
        <Flexi
          flexiConfig={flexiConfig}
          onSubmit={this.onFlexiSubmit}
          handleChange={this.handleChange}
        />
        {/* <Paper>
          <h2>Input</h2>
          <TextareaAutosize
            rowsMax={4}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            value={JSON.stringify(this.state.flexiConfig)}
            onChange={this.handleChange}
          />
        </Paper> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
