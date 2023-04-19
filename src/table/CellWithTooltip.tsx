import React from "react";
import { Tooltip } from "@mui/material";

const CellWithTooltip = (props: any) => {
  const { value } = props;
  return (
    <Tooltip
      title={value}
      arrow
      sx={{
        p: 2, // パディング
        backgroundColor: "green.500", // 背景色
        color: "white", // テキスト色
        fontSize: "1.2rem", // フォントサイズ
      }}
    >
      <div>{value}</div>
    </Tooltip>
  );
};

export default CellWithTooltip;
