import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import {
  section1,
  section2,
  section3,
  section4,
} from "../Components/Section/Data";
import Section from "../Components/Section";

const anchors = ["Home", "Blouses", "Pants", "Contact"];

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#282c34", "#ff5f45", "#0798ec", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <Section {...section1} />
          <Section {...section2} />
          <Section {...section3} />
          <Section {...section4} />
        </div>
      );
    }}
  />
);

export default FullpageWrapper;
