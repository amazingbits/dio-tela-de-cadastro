import React from "react";

const BASE_TITLE = "DIO Clone";
const BASE_DESCRIPTION = "Um protótipo do site da DIO para estudos.";

const Head = (props) => {
  React.useEffect(() => {
    document.title = `${BASE_TITLE} | ${props.title}`;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", `${BASE_DESCRIPTION} ${props.description}`);
  }, [props]);
  return <></>;
};

export default Head;
