import React from "react";
import AnyChart from "anychart-react";
import anychart from "anychart";
import "./style.css";

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
    name: "Eastern Europe",
    fill: "#f06362"
  },
  {
    id: "3.162",
    parent: "2.15",
    name: "Russia",
    value: 143989754
  },
  {
    id: "3.163",
    parent: "2.15",
    name: "Ukraine",
    value: 44222947
  },
  {
    id: "3.164",
    parent: "2.15",
    name: "Poland",
    value: 38170712
  },
  {
    id: "3.165",
    parent: "2.15",
    name: "Romania",
    value: 19679306
  },
  {
    id: "3.166",
    parent: "2.15",
    name: "Czechia",
    value: 10618303
  },
  {
    id: "3.167",
    parent: "2.15",
    name: "Hungary",
    value: 9721559
  },
  {
    id: "3.168",
    parent: "2.15",
    name: "Belarus",
    value: 9468338
  },
  {
    id: "3.169",
    parent: "2.15",
    name: "Bulgaria",
    value: 7084571
  },
  {
    id: "3.170",
    parent: "2.15",
    name: "Slovakia",
    value: 5447662
  },
  {
    id: "3.171",
    parent: "2.15",
    name: "Moldova",
    value: 4051212
  },
  {
    id: "3.172",
    parent: "2.15",
    name: "Cyprus",
    value: 1179551
  },
  {
    id: "2.16",
    parent: "eu",
    name: "Northern Europe",
    fill: "#43c5f1"
  },
  {
    id: "3.173",
    parent: "2.16",
    name: "United Kingdom",
    value: 66181585
  },
  {
    id: "3.174",
    parent: "2.16",
    name: "Sweden",
    value: 9910701
  },
  {
    id: "3.175",
    parent: "2.16",
    name: "Denmark",
    value: 5733551
  },
  {
    id: "3.176",
    parent: "2.16",
    name: "Finland",
    value: 5523231
  },
  {
    id: "3.177",
    parent: "2.16",
    name: "Norway",
    value: 5305383
  },
  {
    id: "3.178",
    parent: "2.16",
    name: "Ireland",
    value: 4761657
  },
  {
    id: "3.179",
    parent: "2.16",
    name: "Lithuania",
    value: 2890297
  },
  {
    id: "3.180",
    parent: "2.16",
    name: "Latvia",
    value: 1949670
  },
  {
    id: "3.181",
    parent: "2.16",
    name: "Estonia",
    value: 1309632
  },
  {
    id: "3.182",
    parent: "2.16",
    name: "Iceland",
    value: 335025
  },
  {
    id: "3.183",
    parent: "2.16",
    name: "Guernsey and  Jersey",
    value: 165314
  },
  {
    id: "3.184",
    parent: "2.16",
    name: "Isle of Man",
    value: 84287
  },
  {
    id: "3.185",
    parent: "2.16",
    name: "Faroe Islands",
    value: 49290
  },
  {
    id: "2.17",
    parent: "eu",
    name: "Southern Europe",
    fill: "#66c088"
  },
  {
    id: "3.186",
    parent: "2.17",
    name: "Italy",
    value: 59359900
  },
  {
    id: "3.187",
    parent: "2.17",
    name: "Spain",
    value: 46354321
  },
  {
    id: "3.188",
    parent: "2.17",
    name: "Greece",
    value: 11159773
  },
  {
    id: "3.189",
    parent: "2.17",
    name: "Portugal",
    value: 10329506
  },
  {
    id: "3.190",
    parent: "2.17",
    name: "Serbia",
    value: 8790574
  },
  {
    id: "3.191",
    parent: "2.17",
    name: "Croatia",
    value: 4189353
  },
  {
    id: "3.192",
    parent: "2.17",
    name: "Bosnia and Herzegovina",
    value: 3507017
  },
  {
    id: "3.193",
    parent: "2.17",
    name: "Albania",
    value: 2930187
  },
  {
    id: "3.194",
    parent: "2.17",
    name: "Republic of Macedonia",
    value: 2083160
  },
  {
    id: "3.195",
    parent: "2.17",
    name: "Slovenia",
    value: 2079976
  },
  {
    id: "3.196",
    parent: "2.17",
    name: "Montenegro",
    value: 628960
  },
  {
    id: "3.197",
    parent: "2.17",
    name: "Malta",
    value: 430835
  },
  {
    id: "3.198",
    parent: "2.17",
    name: "Andorra",
    value: 76965
  },
  {
    id: "3.199",
    parent: "2.17",
    name: "Gibraltar",
    value: 34571
  },
  {
    id: "3.200",
    parent: "2.17",
    name: "San Marino",
    value: 33400
  },
  {
    id: "3.201",
    parent: "2.17",
    name: "Vatican City",
    value: 792
  },
  {
    id: "2.18",
    parent: "eu",
    name: "Western Europe",
    fill: "#4a5b69"
  },
  {
    id: "3.202",
    parent: "2.18",
    name: "Germany",
    value: 82114224
  },
  {
    id: "3.203",
    parent: "2.18",
    name: "France",
    value: 64979548
  },
  {
    id: "3.204",
    parent: "2.18",
    name: "Netherlands",
    value: 17035938
  },
  {
    id: "3.205",
    parent: "2.18",
    name: "Belgium",
    value: 11429336
  },
  {
    id: "3.206",
    parent: "2.18",
    name: "Austria",
    value: 8735453
  },
  {
    id: "3.207",
    parent: "2.18",
    name: "Switzerland",
    value: 8476005
  },
  {
    id: "3.208",
    parent: "2.18",
    name: "Luxembourg",
    value: 583455
  },
  {
    id: "3.209",
    parent: "2.18",
    name: "Monaco",
    value: 38695
  },
  {
    id: "3.210",
    parent: "2.18",
    name: "Liechtenstein",
    value: 37922
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
