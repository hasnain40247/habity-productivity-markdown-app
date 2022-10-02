import React from "react";
import { Editor, Text, Transforms } from "slate";
export const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};
export const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
    >
      {props.children}
    </span>
  );
};

export const CustomEditor = {
  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });

    return !!match;
  },
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true, universal:true
    });
console.log(match)
    return !!match;
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: function(n,p) {
        console.log(n,p)
        return Text.isText(n)}, split:true}
    )
  },
};
