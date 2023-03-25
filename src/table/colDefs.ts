export default [
  {
    headerName: "UserId",
    field: "userId",
    sortable: true,
    maxWidth: 90,
  },
  {
    headerName: "Id",
    field: "id",
    sortable: true,
    cellRenderer: "idCellRenderrer",
    maxWidth: 60,
  },
  {
    headerName: "Title",
    field: "title",
    sortable: true,
    minWidth: 120,
  },
  {
    headerName: "Completion Status",
    field: "completed",
    sortable: true,
  },
];
