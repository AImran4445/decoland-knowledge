import React from "react";

import Sunburst from "react-zoomable-sunburst-d3-v4";

let data = {
  name: "TOPICS",
  children: [
    {
      name: "Topic A",
      children: [{ name: "Sub A1", size: 4 }, { name: "Sub A2", size: 4 }]
    },
    {
      name: "Topic B",
      children: [
        { name: "Sub B1", size: 3 },
        { name: "Sub B2", size: 3 },
        {
          name: "Sub B3",
          size: 3
        }
      ]
    },
    {
      name: "Topic C",
      children: [{ name: "Sub A1", size: 4 }, { name: "Sub A2", size: 4 }]
    }
  ]
};

class SunburstD3V4 extends React.Component {
  onSelect(event) {
    console.log(event);
  }
  render() {
    return (
      <div>
        <Sunburst
          data={data}
          onSelect={this.onSelect}
          scale="linear"
          tooltipContent={
            <div
              class="sunburstTooltip"
              style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;"
            />
          }
          tooltip
          tooltipPosition="right"
          keyId="anagraph"
          width="480"
          height="400"
        />
      </div>
    );
  }
}
export default SunburstD3V4;
