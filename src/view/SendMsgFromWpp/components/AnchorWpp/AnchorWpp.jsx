import { forwardRef } from "react";

const AnchorWpp = forwardRef((props, ref) => {
  return (
    <a href={props.url} ref={ref} rel="noopener noreferrer" target="_blank">
      {" "}
    </a>
  );
});

export default AnchorWpp;
