import React from "react";
import { Editor, Text, Transforms } from "slate";
export const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export const ListElement = (props) => {
  return (
    <ul {...props.attributes}>
      <li>{props.children}</li>
    </ul>
  );
};

export const UnderLineElement = (props) => {
  return <u {...props.attributes}>{props.children}</u>;
};
export const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? "bold" : "normal",
        textDecoration: props.leaf.underline ? "underline" : "none",
        fontStyle: props.leaf.italic ? "italic" : "normal",
      }}
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

  isListBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "list",
    });

    return !!match;
  },

  isUnderLineBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.underline === "underline",
    });

    return !!match;
  },
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });
    console.log(match);
    return !!match;
  },

  isItalicMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.italic === true,
      universal: true,
    });
    console.log(match);
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

  toggleListBlock(editor) {
    const isActive = CustomEditor.isListBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "list" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleUnderLineBlock(editor) {
    const isActive = CustomEditor.isUnderLineBlockActive(editor);
    Transforms.setNodes(
      editor,
      { underline: isActive ? "paragraph" : "underline" },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      {
        match: function (n, p) {
          console.log(n, p);
          return Text.isText(n);
        },
        split: true,
      }
    );
  },

  toggleItalicMark(editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      {
        match: function (n, p) {
          console.log(n, p);
          return Text.isText(n);
        },
        split: true,
      }
    );
  },
};
