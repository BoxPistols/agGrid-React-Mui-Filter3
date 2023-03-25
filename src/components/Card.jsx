// App.tsx
import React from "react";
import Split from "react-split";
import "./App.css";

function Card() {
  return (
    <div className="Card">
      <Split
        className="split"
        sizes={[50, 50]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
      >
        <div className="pane pane1">Pane 1</div>
        <div className="pane pane2">Pane 2</div>
      </Split>
    </div>
  );
}

export default Card;
