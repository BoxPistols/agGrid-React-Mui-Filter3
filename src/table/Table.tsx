import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { AgGridReact } from "ag-grid-react";
import { Button, Typography, Card, CardContent, Box } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Table = () => {
  // グリッドAPIへの参照
  const gridRef = useRef<AgGridReact>(null);

  // 表示する行データ
  const [rowData, setRowData] = useState<any[]>([]);

  // 選択された行データ
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  // 各カラムの定義
  const [columnDefs] = useState([
    // { field: "id", hide: true }, // ID（非表示）
    {
      headerName: "",
      field: "checkbox",
      width: 50,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    }, // チェックボックス
    { field: "id" }, // ID（非表示）
    { field: "make", filter: true }, // メーカー
    { field: "model", filter: true }, // 車種
    { field: "price" }, // 価格
  ]);

  // カラムの共通プロパティを設定するオブジェクト
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  // データの読み込み処理
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => {
        setRowData(
          rowData.map((row: any, index: number) => ({ id: index, ...row }))
        );
      });
  }, []);

  // 選択された行が変更されたときの処理
  const onSelectionChanged = useCallback(() => {
    const selectedNodes = gridRef.current?.api.getSelectedNodes();
    const selectedData = selectedNodes?.map((node: any) => node.data);
    // selectedDataがundefinedでないことを確認してから、setSelectedRowsに渡す
    if (selectedData) {
      setSelectedRows(selectedData);
    } else {
      setSelectedRows([]);
    }
  }, []);

  // 全選択の解除
  const handleButtonClicked = useCallback((_e: any) => {
    gridRef.current?.api.deselectAll();
  }, []);

  return (
    <div>
      <main className="main">
        <Typography variant="h4" color="initial">
          Check Table
        </Typography>
        {/* Ag-Gridテーブル */}
        <div
          className="ag-theme-alpine"
          style={{ width: "100vw", maxWidth: 840, height: 500 }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            animateRows={true}
            rowSelection="multiple"
            onSelectionChanged={onSelectionChanged}
          />
        </div>
        {/* 選択解除ボタン */}
        <Button variant="outlined" sx={{ mt: 1 }} onClick={handleButtonClicked}>
          Clear Select
        </Button>
        {/* 選択された行を表示するカード */}
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
          <Card sx={{ minWidth: 275, maxWidth: 400 }}>
            <CardContent>
              {selectedRows.map((row, index) => (
                <Typography variant="body2" color="text.secondary" key={index}>
                  ID: {row.id}, Make: {row.make}, Model: {row.model}, Price:{" "}
                  {row.price}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Box>
      </main>
    </div>
  );
};

export default Table;
