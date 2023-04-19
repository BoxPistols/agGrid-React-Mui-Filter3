import ReactDOM from "react-dom";
import Table from "../src/table/Table";
import "./app.css";
// import { createTheme, ThemeProvider } from "@mui/system";
// import { green } from "@mui/material/colors";

// const theme = createTheme({
//   components: {
//     MuiTooltip: {
//       styleOverrides: {
//         tooltip: {
//           padding: "1rem",
//           backgroundColor: "red",
//           color: "white",
//           fontSize: "1.2rem",
//         },
//       },
//     },
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <Table />
    // </ThemeProvider>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
