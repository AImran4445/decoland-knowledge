import React, { useRef, useEffect, useState } from "react";
// libraries
import * as d3 from "d3";
// redux
import { connect } from "react-redux";

const Sunburst = (props) => {
  const data = {
    name: "flare",
    children: [
      {
        name: "analytics",
        children: [
          {
            name: "cluster",
            children: [
              { name: "AgglomerativeCluster", size: 3938 },
              { name: "CommunityStructure", size: 3812 },
              { name: "HierarchicalCluster", size: 6714 },
              { name: "MergeEdge", size: 743 },
            ],
          },
          {
            name: "graph",
            children: [
              { name: "BetweennessCentrality", size: 3534 },
              { name: "LinkDistance", size: 5731 },
              { name: "MaxFlowMinCut", size: 7840 },
              { name: "ShortestPaths", size: 5914 },
              { name: "SpanningTree", size: 3416 },
            ],
          },
          {
            name: "optimization",
            children: [{ name: "AspectRatioBanker", size: 7074 }],
          },
        ],
      },
      {
        name: "animate",
        children: [
          { name: "Easing", size: 17010 },
          { name: "FunctionSequence", size: 5842 },
          {
            name: "interpolate",
            children: [
              { name: "ArrayInterpolator", size: 1983 },
              { name: "ColorInterpolator", size: 2047 },
              { name: "DateInterpolator", size: 1375 },
              { name: "Interpolator", size: 8746 },
              { name: "MatrixInterpolator", size: 2202 },
              { name: "NumberInterpolator", size: 1382 },
              { name: "ObjectInterpolator", size: 1629 },
              { name: "PointInterpolator", size: 1675 },
              { name: "RectangleInterpolator", size: 2042 },
            ],
          },
          { name: "ISchedulable", size: 1041 },
          { name: "Parallel", size: 5176 },
          { name: "Pause", size: 449 },
          { name: "Scheduler", size: 5593 },
          { name: "Sequence", size: 5534 },
          { name: "Transition", size: 9201 },
          { name: "Transitioner", size: 19975 },
          { name: "TransitionEvent", size: 1116 },
          { name: "Tween", size: 6006 },
        ],
      },
      {
        name: "data",
        children: [
          {
            name: "converters",
            children: [
              { name: "Converters", size: 721 },
              { name: "DelimitedTextConverter", size: 4294 },
              { name: "GraphMLConverter", size: 9800 },
              { name: "IDataConverter", size: 1314 },
              { name: "JSONConverter", size: 2220 },
            ],
          },
          { name: "DataField", size: 1759 },
          { name: "DataSchema", size: 2165 },
          { name: "DataSet", size: 586 },
          { name: "DataSource", size: 3331 },
          { name: "DataTable", size: 772 },
          { name: "DataUtil", size: 3322 },
        ],
      },
      {
        name: "display",
        children: [
          { name: "DirtySprite", size: 8833 },
          { name: "LineSprite", size: 1732 },
          { name: "RectSprite", size: 3623 },
          { name: "TextSprite", size: 10066 },
        ],
      },
    ],
  };

  // Element References
  const svgRef = useRef(null);
  const svgContainer = useRef(null); // The PARENT of the SVG

  // State to track width and height of SVG Container
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  // calculate width and height of container
  const getSvgContainerSize = () => {
    const newWidth = svgContainer.current.clientWidth;
    setWidth(newWidth);

    const newHeight = svgContainer.current.clientHeight;
    setHeight(newHeight);
  };

  // resizer
  useEffect(() => {
    // get 'width' and 'height' on render
    getSvgContainerSize();
    // listen for resize changes
    window.addEventListener("resize", getSvgContainerSize);
    // cleanup event listener
    return () => window.removeEventListener("resize", getSvgContainerSize);
  }, []);

  // draw chart
  useEffect(() => {
    // D3 Code

    // Dimensions
    let dimensions = {
      width: width,
      height: height,
      margins: 50,
    };

    dimensions.containerWidth = dimensions.width - dimensions.margins * 2;
    dimensions.containerHeight = dimensions.height - dimensions.margins * 2;

    // selections
    const svg = d3
      .select(svgRef.current)
      .classed("sunburst-chart-svg", true)
      .attr("width", dimensions.width)
      .attr("height", dimensions.height);

    // clear all previous content on refresh
    const everything = svg.selectAll("*");
    everything.remove();

    const container = svg
      .append("g")
      .classed("sunburst-chart-inner-container", true)
      .attr(
        "transform",
        `translate(${dimensions.margins}, ${dimensions.margins})`
      );

    // rest of d3 code ...

    // const someElement = container.append('g')
    //  ...
  }, [width, height]); // redraw chart if data or dimensions change

  const renderContent = () => {
    return (
      <div className="sunburst-chart-container">
        <div ref={svgContainer} className="sunburst-chart-svg-container">
          <svg ref={svgRef} />
        </div>
      </div>
    );
  };

  return <>{renderContent()}</>;
};

// map state to props
function mapState(state) {
  return {};
}

// map actions to props
const mapDispatch = {};

// connect store
export default connect(mapState, mapDispatch)(Sunburst);