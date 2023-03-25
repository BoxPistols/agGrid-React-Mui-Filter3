// import React from "react";
import ReactDOM from "react-dom";
import Table from "../src/table/Table";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
