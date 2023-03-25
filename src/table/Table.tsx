import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import axios from "axios";
import IdCellRenderrer from "./cellRenderrers/IdCellRenderrer";

import columnDefs from "./colDefs";

import { CircularProgress, TextField } from "@mui/material";

const url = "https://jsonplaceholder.typicode.com/todos";

interface IProps {}

const Table: React.FC<IProps> = () => {
  const [rowData, setRowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("");
  const [gridApi, setGridApi] = useState<any>(null);
  const [, setGridColumnApi] = useState<any>(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setRowData(response.data);
      setIsLoading(false);
    });
  }, []);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    gridApi.onFilterChanged();
  };

  const doesExternalFilterPass = (node: any) => {
    return node.data.title.indexOf(value) > -1;
  };

  return (
    <>
      <span className="spinner">{isLoading && <CircularProgress />}</span>
      {!isLoading && (
        <div className="root">
          <span className="titleFilter">
            <TextField
              label="Title Filter"
              value={value}
              onChange={handleChange}
              margin="normal"
            />
          </span>

          <div
            style={{ height: "1000px", width: "100%" }}
            className="ag-theme-balham"
          >
            <AgGridReact
              animateRows={true}
              columnDefs={columnDefs}
              rowData={rowData}
              onGridReady={onGridReady}
              rowHeight={40}
              context={{ componentParent: this }}
              frameworkComponents={{ idCellRenderrer: IdCellRenderrer }}
              isExternalFilterPresent={() => true}
              doesExternalFilterPass={doesExternalFilterPass}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
