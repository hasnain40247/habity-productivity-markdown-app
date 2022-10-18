import React, { useCallback } from "react";

export const renderElement = useCallback((props) => {
  switch (props.element.type) {
    case "code":
      return <CodeElement {...props} />;
    case "list":
      return <ListElement {...props} />;
    case "h1":
      return (
        <strong className="spanss" {...props.attributes}>
          **{props.children}**
        </strong>
      );

    case "boldmark":
      return (
        <span
          style={{ fontWeight: "bold" }}
          {...props.attributes}
          className={"link"}
        >
          <span>**</span>
          <span>{props.children}</span>

          <span>**</span>
        </span>
      );

    case "italicmark":
      return (
        <span
          style={{ fontStyle: "italic" }}
          {...props.attributes}
          className={"link"}
        >
          <span>*</span>
          <span>{props.children}</span>

          <span>*</span>
        </span>
      );

    case "listmark":
      return (
        <span
          style={{ paddingLeft: "10px", display: "block" }}
          {...props.attributes}
          className={"link"}
        >
          <span>- </span>
          <span>{props.children}</span>
        </span>
      );

    default:
      return <DefaultElement {...props} />;
  }
}, []);
