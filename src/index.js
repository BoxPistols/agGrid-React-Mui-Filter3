// import React from "react";
import ReactDOM from "react-dom";
import Split from "react-split";
import Table from "../src/table/Table";
import Card from "./components/Card";
import "./app.css";

function App() {
  return (
    <div className="Index">
      <Split
        className="split"
        // sizes={[30, 70]}
        minSize={80}
        // maxSize={120}
        // expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        // direction="vertical"
      >
        <Card />
        <div>
          <Table />
        </div>
      </Split>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

/**
 * TODO: save to local localStorage
 
import React, { useState, useEffect } from 'react';
import SplitPane from 'react-split-pane';

const App = () => {
  const [paneWidth, setPaneWidth] = useState(
    localStorage.getItem('paneWidth') || '50%'
  );

  useEffect(() => {
    const storedWidth = localStorage.getItem('paneWidth');
    if (storedWidth) {
      setPaneWidth(storedWidth);
    }
  }, []);

  const onDragFinished = (width) => {
    localStorage.setItem('paneWidth', width);
    setPaneWidth(width);
  };

  return (
    <SplitPane
      split="vertical"
      defaultSize={paneWidth}
      onDragFinished={onDragFinished}
    >
      <div>Left Pane</div>
      <div>Right Pane</div>
    </SplitPane>
  );
};

export default App;
*/
