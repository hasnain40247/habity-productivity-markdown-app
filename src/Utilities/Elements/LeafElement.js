import React, { useState } from "react";
import {
  Editor,
  Element,
  Range,
  Text,
  Transforms,
  Document,
  Node,
} from "slate";
import { css } from "@emotion/css";

export const Leaf = (props) => {
  let { leaf, children, attributes } = props;

  return (
    <span
      {...attributes}
      className={css`
        font-weight: ${leaf.bold && "bold"};
        font-style: ${leaf.italic && "italic"};
        text-decoration: ${leaf.underlined && "underline"};
        ${leaf.bold &&
        css`
          color: #7d1935;
        `}
        ${leaf.italic &&
        css`
          color: #2d6e7e;
        `}
        ${leaf.title &&
        css`
          display: inline-block;
          font-weight: 900;
          font-size: ${leaf.heading}px;
          color: #03506f;
          margin: 10px 0 5px 0;
        `}
        ${leaf.strike &&
        css`
          text-decoration: line-through;
          color: #ffd369;
        `}
        ${leaf.list &&
        css`
          padding-left: 10px;
          color: #54BAB9;
          line-height: 10px;
        `}
        ${leaf.hr &&
        css`
          display: block;
          text-align: center;
          border-bottom: 2px solid #ddd;
        `}
        ${leaf.blockquote &&
        css`
          display: inline-block;
          border-left: 2px solid #ddd;
          padding-left: 10px;
          color: #aaa;
          font-style: italic;
        `}
        ${leaf["code-snippet"] &&
        css`
          display: table;
          border-radius: 5px;
          margin: 10px 0 5px 0;
          color: #fbf2cf;
          font-family: monospace;
          background-color: #393e46;
          padding: 5px;
        `}
      `}
    >
      {children}
    </span>
  );
  // return <span {...attributes}>{children}</span>;

  // const { attributes, children, leaf, editor } = props;

  // if (editor.selection && Range.isCollapsed(editor.selection)) {
  //   Editor.removeMark(editor, "bold");
  //   Editor.removeMark(editor, "italic");
  // }

  // return (
  //   <span
  //     {...attributes}
  //     className={css`
  //       font-weight: ${leaf.bold && "bold"};
  //       font-style: ${leaf.italic && "italic"};
  //       text-decoration: ${leaf.underlined && "underline"};
  //       ${leaf.title &&
  //       css`
  //         display: inline-block;
  //         font-weight: bold;
  //         font-size: 20px;
  //         margin: 20px 0 10px 0;
  //       `}
  //       ${leaf.list &&
  //       css`
  //         padding-left: 10px;
  //         font-size: 20px;
  //         line-height: 10px;
  //       `}
  //       ${leaf.hr &&
  //       css`
  //         display: block;
  //         text-align: center;
  //         border-bottom: 2px solid #ddd;
  //       `}
  //       ${leaf.blockquote &&
  //       css`
  //         display: inline-block;
  //         border-left: 2px solid #ddd;
  //         padding-left: 10px;
  //         color: #aaa;
  //         font-style: italic;
  //       `}
  //       ${leaf.code &&
  //       css`
  //         font-family: monospace;
  //         background-color: #eee;
  //         padding: 3px;
  //       `}
  //     `}
  //   >
  //     {children}
  //   </span>
  // );
};
export default Leaf;
