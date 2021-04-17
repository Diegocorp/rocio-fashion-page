import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./index.css";

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["orange", "purple", "green"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              {/* Section 1 */}
              <div className="section" id="section1">
                <h1>Section 1</h1>
                <h2>Dolor quis Lorem aliqua tempor do excepteur laborum Lorem dolore anim cillum commodo fugiat occaecat.</h2>
              </div>
              {/* Section 2 */}
              <div className="section" id="section2">
                <div className="slide">
                  <h1>Slide 2.1</h1>
                </div>
                <div className="slide">
                  <h1>Slide 2.2</h1>
                </div>
                <div className="slide">
                  <h1>Slide 2.3</h1>
                </div>
              {/* Section 3 */}
              </div>
              <div className="section" id="section3">
                <h1>Section 3</h1>
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));

export default FullpageWrapper;
