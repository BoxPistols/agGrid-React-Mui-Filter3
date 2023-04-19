import React from "react";
import { Tooltip, Box } from "@mui/material";

const CellWithTooltip = (props: any) => {
  const { value } = props;

  return (
    <Tooltip
      title={value}
      //   arrow
      disableInteractive
      PopperProps={{
        sx: {
          //   minWidth: 100,
          //   minHeight: 40,
          fontSize: 12,
          padding: "8px 16px",
          border: "1px solid #999",
          backgroundColor: "#212121",
          color: "white",
          //   marginRight: "32px !important",
          transition: 0,
          //  "& .MuiTooltip-arrow": {
          // top: "-10px !important",
          //    "&::before": {
          //      backgroundColor: "gray",
          //    },
          //  },
        },
      }}
      components={{ Tooltip: Box }}
    >
      <div>{value}</div>
    </Tooltip>
  );
};

export default CellWithTooltip;
