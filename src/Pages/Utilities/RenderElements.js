import React from "react";
import { Editor, Element, Range, Text, Transforms, Document } from "slate";
import { css } from "@emotion/css";

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

export const BoldElement = (props) => {
  return <h2 {...props.attributes}>{props.children}</h2>;
};

export const UnderLineElement = (props) => {
  return <u {...props.attributes}>{props.children}</u>;
};
export const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export const Leaf = (props) => {
  // return (
  //   <span
  //     {...props.attributes}
  //     style={{
  //       fontWeight: props.leaf.bold ? "bold" : "normal",
  //       textDecoration: props.leaf.underline ? "underline" : "none",
  //       fontStyle: props.leaf.italic ? "italic" : "normal",
  //     }}
  //   >
  //     {props.children}
  //   </span>
  // );
  const { attributes, children, leaf, editor } = props;
  console.log(editor);
  console.log("NEXT LETTER");
  console.log(leaf.text[leaf.text.length - 1]);
  if (editor.selection && Range.isCollapsed(editor.selection)) {
    Editor.removeMark(editor, "bold");
    Editor.removeMark(editor, "italic");

  }

  return (
    <span
      {...attributes}
      className={css`
        font-weight: ${leaf.bold && 'bold'};
        font-style: ${leaf.italic && 'italic'};
        text-decoration: ${leaf.underlined && 'underline'};
        ${leaf.title &&
          css`
            display: inline-block;
            font-weight: bold;
            font-size: 20px;
            margin: 20px 0 10px 0;
          `}
        ${leaf.list &&
          css`
            padding-left: 10px;
            font-size: 20px;
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
        ${leaf.code &&
          css`
            font-family: monospace;
            background-color: #eee;
            padding: 3px;
          `}
      `}
    >
      {children}
    </span>
  );
};

export const CustomEditor = {
  isMarkActive(editor, mark) {
    const [match] = Editor.nodes(editor, {
      match: function (n) {
        console.log(n.type);
        switch (mark) {
          case "bold":
            return CustomEditor.isBoldMarkActive(editor);
            break;

          case "italic":
            return isBoldNodeAtSelection(editor, editor.selection);

            break;
          case "underline":
            return n.underlined === true;
            break;
          case "code":
            return n.code === true;
            break;

          case "list":
            return isListNodeAtSelection(editor, editor.selection);
            break;
        }
      },
      universal: true,
    });
    console.log("The mark " + mark + " is " + !!match);
    return !!match;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.code === true,
      universal: true,
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
      match: (n) => n.underlined === true,
    });

    return !!match;
  },

  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });

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
      { code: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleListBlock(editor) {
    // const isActive = CustomEditor.isListBlockActive(editor);
    // Transforms.setNodes(
    //   editor,
    //   { type: isActive ? "paragraph" : "list" },
    //   { match: (n) => Editor.isBlock(editor, n) }
    // );

    console.log(editor);
    editor.isInline = (element) => ["listmark"].includes(element.type);
    console.log(editor);

    if (!isListNodeAtSelection(editor, editor.selection)) {
      const isSelectionCollapsed = Range.isCollapsed(editor.selection);
      if (isSelectionCollapsed) {
        Transforms.insertNodes(
          editor,
          {
            type: "listmark",

            children: [{ text: "listmark" }],
          },
          { at: editor.selection }
        );
      } else {
        Transforms.wrapNodes(
          editor,
          { type: "listmark", children: [{ text: "" }] },
          { split: true, at: editor.selection }
        );
      }
    } else {
      Transforms.unwrapNodes(editor, {
        match: (n) => Element.isElement(n) && n.type === "listmark",
      });
    }
  },

  toggleUnderLineBlock(editor) {
    const isActive = CustomEditor.isUnderLineBlockActive(editor);
    Transforms.setNodes(
      editor,
      { underlined: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  isMarkActive(editor, format) {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  },

  markPrefix: {
    bold: "**",
    italic:"_"
  },
  toggleMark(editor, format) {
    const isActive = CustomEditor.isMarkActive(editor, format);

    if (isActive) {
      Transforms.delete(editor, {
        at: Editor.end(editor, editor.selection),
        unit: "character",
        distance:  format==="bold"? 2:1,
      });
      Transforms.delete(editor, {
        at: Editor.start(editor, editor.selection),
        unit: "character",
        distance: format==="bold"? 2:1,
        reverse: true,
      });
      Editor.removeMark(editor, format);
    } else {
      Transforms.insertText(editor, CustomEditor.markPrefix[format], {
        at: Editor.end(editor, editor.selection),
      });
      Transforms.insertText(editor, CustomEditor.markPrefix[format], {
        at: Editor.start(editor, editor.selection),
      });
      Editor.addMark(editor, format, true);
    }
  },

  toggleItalicMark(editor) {
    console.log(editor);
    editor.isInline = (element) => ["italicmark"].includes(element.type);
    console.log(editor);

    if (!isItalicNodeAtSelection(editor, editor.selection)) {
      const isSelectionCollapsed = Range.isCollapsed(editor.selection);
      if (isSelectionCollapsed) {
        Transforms.insertNodes(
          editor,
          {
            type: "italicmark",

            children: [{ text: "italicmark" }],
          },
          { at: editor.selection }
        );
      } else {
        Transforms.wrapNodes(
          editor,
          { type: "italicmark", children: [{ text: "" }] },
          { split: true, at: editor.selection }
        );
      }
    } else {
      Transforms.unwrapNodes(editor, {
        match: (n) => Element.isElement(n) && n.type === "italicmark",
      });
    }
  },
};

export function isBoldNodeAtSelection(editor, selection) {
  if (selection == null) {
    return false;
  }

  return (
    Editor.above(editor, {
      at: selection,
      match: function (n) {
        console.log(n);
        return n.bold === true;
      },
    }) != null
  );
}

export function isListNodeAtSelection(editor, selection) {
  if (selection == null) {
    return false;
  }

  return (
    Editor.above(editor, {
      at: selection,
      match: (n) => n.type === "listmark",
    }) != null
  );
}

export function isItalicNodeAtSelection(editor, selection) {
  if (selection == null) {
    return false;
  }

  return (
    Editor.above(editor, {
      at: selection,
      match: (n) => n.type === "italicmark",
    }) != null
  );
}
