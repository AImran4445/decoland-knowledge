import React from "react";
import Sunburst from "react-zoomable-sunburst";
import data from "./data";

class ReactZoomableSun extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }

  onSelect(event) {
    console.log(event);
  }
  render() {
    return (
      <div>
        <Sunburst
          data={this.state.data}
          width="880"
          height="880"
          count_member="size"
          labelFunc={node => {
            console.log(node);
            return node.data.name;
          }}
        />
      </div>
    );
  }
}
export default ReactZoomableSun;
