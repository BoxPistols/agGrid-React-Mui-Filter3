// import React from "react";
import ReactDOM from "react-dom";
// import Table from "../src/table/Table";
import Card from "./components/Card";
// import "./app.css";

function App() {
  return (
    <div className="App">
      <Card />
      {/* <Table /> */}
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
