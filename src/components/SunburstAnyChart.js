import React from "react";
import AnyChart from "anychart-react";
import anychart from "anychart";
import "./style.css";

//all child that have parent id eu all are second parent in the graph 
//just need to remove the value 

var data = [
  {
    id: "eu",
    name: "Blockchain",
    fill: "#fff",
    label: {
      fontColor: "#2a333d",
      fontWeight: "bold"
    }
  },
  {
    id: "2.15",
    parent: "eu",
    name: "Blockchain use cases by Civil Society",
    fill: "#C485FF"
  },
  {
    id: "3.162",
    parent: "2.15",
    name: "Fundraising",
    fill:"#C485FF",
    value: 143989754
  },
  {
    id: "3.163",
    parent: "2.15",
    name: " Digital identity",
    fill:"#DDB9FF",
    value: 44222947
  },
  {
    id: "3.164",
    parent: "2.15",
    name: "Corruption",
    fill:"#DDB9FF",
    value: 38170712
  },
  
  {
    id: "2.16",
    parent: "eu",
    name: " Blockchain for social impact",
    fill: "#CA498C",
    value: 143989754,
    label: {
      fontWeight: "bold",
      fontSize:"36px"
    }
  },
  {
    id: "3.173",
    parent: "2.16",
    fill: "#FF8DC8",
    value: 143989754
  },
  {
    id: "2.17",
    parent: "eu",
    name: "Blockchain and Digital Identity",
    fill: "#6771DC"
  },
  {
    id: "3.186",
    parent: "2.17",
    name: " Governance",
    fill:"#A6ADFF",
    value: 59359900
    
  },
  {
    id: "3.187",
    parent: "2.17",
    name: " Digital identity",
    fill:"#A6ADFF",
    value: 59359900
  },
  {
    id: "3.188",
    parent: "2.17",
    name: "Corruption",
    fill:"#A6ADFF",
    value: 59359900
  },
  
  {
    id: "2.18",
    parent: "eu",
    name: "Regenerative Finance",
    fill: "#59A314"
  },
  {
    id: "3.202",
    parent: "2.18",
    name: "",
    fill:"#D4E7CB",
    value: 82114224
  }
];

class SunburstAnyChart extends React.Component {
  constructor() {
    super();
    let dataTree = anychart.data.tree(data, "as-table");
    let chart = anychart.sunburst(dataTree);

    chart.calculationMode("parent-independent");
    chart.title("Europe Population");
    chart.palette(["#0288d1", "#d4e157", "#ff6e40", "#f8bbd0"]);
    chart.labels().format("{%Name}\n{%Value}{scale:(1000000)(1)|( mln)}");
    chart.tooltip().format("Population: {%Value}{scale:(1000000)(1)|( mln)}");
    chart.fill(function() {
      return anychart.color.darken(this.parentColor, 0.15);
    });

    chart.container("container");
    this.state = {
      chart: chart.draw()
    };
  }
  render() {
    return (
      <div>
        <AnyChart instance={this.state.chart} title="" />
      </div>
    );
  }
}

export default SunburstAnyChart;
