import React from "react";
import ReactDOM from "react-dom";
import Sunburst from "sunburst-chart";
//import data from "./data"

const data = {
  name: "main",
  color: "magenta",
  children: [
    {
      name: "a",
      color: "yellow",
      size: 1
    },
    {
      name: "b",
      color: "red",
      children: [
        {
          name: "ba",
          color: "orange",
          size: 1
        },
        {
          name: "bb",
          color: "blue",
          children: [
            {
              name: "bba",
              color: "green",
              size: 1
            },
            {
              name: "bbb",
              color: "pink",
              size: 1
            }
          ]
        }
      ]
    }
  ]
};
class SunburstChart extends React.Component {
  constructor() {
    super();
    this.state = {
      myChart: Sunburst().data(data)
    };
  }

  componentDidMount() {
    // set el height and width etc.
    this.state.myChart(ReactDOM.findDOMNode(this));
  }

  onSelect(event) {
    console.log(event);
  }
  render() {
    return <div id="chart" />;
  }
}
export default SunburstChart;
