import * as React from "react";
import { styled } from "@mui/material/styles";

interface SpanProps {
  click: boolean;
}

const OddIdSpan = styled("span")<SpanProps>(({ click }) => ({
  color: click ? "red" : "inherit",
}));

interface EvenIdSpanProps {
  externalButtonClick: boolean;
}

const EvenIdSpan = styled("span")<EvenIdSpanProps>(
  ({ externalButtonClick }) => ({
    color: externalButtonClick ? "blue" : "inherit",
  })
);

interface Props {
  data: { id: number };
  context: {
    componentParent: {
      state: { click: boolean; externalButtonClick: boolean };
    };
  };
}

function IdCellRenderer({ data, context }: Props): JSX.Element {
  const {
    componentParent: {
      state: { click, externalButtonClick } = {
        click: false,
        externalButtonClick: false,
      },
    } = {},
  } = context ?? {};

  return data.id % 2 !== 0 ? (
    <OddIdSpan click={click}>{data.id}</OddIdSpan>
  ) : (
    <EvenIdSpan externalButtonClick={externalButtonClick}>{data.id}</EvenIdSpan>
  );
}
export default IdCellRenderer;
