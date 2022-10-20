import React, { useCallback } from "react";

export const renderElement = (props) => <Element {...props} />;

const Element = ({ attributes, children, element }) => {
  console.log(element);
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return (
        <h1 {...attributes}>
          <span>#</span> {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 {...attributes}>
          <span>##</span> {children}
        </h2>
      );
    case "heading-three":
      return <h3 {...attributes}>{children}</h3>;
    case "heading-four":
      return <h4 {...attributes}>{children}</h4>;
    case "heading-five":
      return <h5 {...attributes}>{children}</h5>;
    case "heading-six":
      return <h6 {...attributes}>{children}</h6>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "code":
      return (
        <pre {...attributes}>
          <span>`</span>
          <code>{children}</code>
          <span>`</span>
        </pre>
      );

    default:
      return <p {...attributes}>{children}</p>;
  }
};
