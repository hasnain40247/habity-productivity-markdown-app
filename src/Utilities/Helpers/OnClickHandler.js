import { Editor, Path, Range, Transforms } from "slate";

export const OnClickHandler = (event, icon, editor) => {
  console.log(icon);
  switch (icon) {
    case "bold": {
      return addInlineStyle(icon, editor, 2);
      break;
    }
    case "italic": {
      return addInlineStyle(icon, editor, 1);
      break;
    }
    case "strike": {
      return addInlineStyle(icon, editor, 1);
      break;
    }
    case "code-snippet": {
      return addBlockStyle(icon, editor);
      break;
    }
    case "list": {
      return addBlockStyle(icon, editor);
      break;
    }
    case "olist": {
      return addBlockStyle(icon, editor);
      break;
    }
  }
};
export const stylemap = {
  bold: "**",
  italic: "_",
  strike: "~",
  "code-snippet": "`",
  list: "- ",
  olist: "1. ",
};

export const handleEnter = (style, editor, event) => {
  let listpointer = editor.children.at(-1).children[0].text[0];
  console.log(typeof listpointer);
  Editor.insertSoftBreak(editor);

  if (typeof listpointer != "undefined") {
    if (listpointer === "-") {
      Editor.insertText(editor, "-");
    } else if (!isNaN(listpointer)) {
      let prev = editor.children.at(-2).children[0].text.split(".")[0];
      Editor.insertText(editor, String(Number(prev) + 1) + ".");
    }
  }

  // console.log(editor.children[editor.children.length - 1].children[0])
  //   if (editor.children[editor.children.length - 1].children[0].text[0] === "-") {
  // Editor.insertBreak(editor)

  //   } else{
  // Editor.insertBreak(editor)

  //   }
};
export const addBlockStyle = (style, editor) => {
  console.log(style);
  let check = style;
  if (style === "olist" || style === "list") check = "list";
  let location = editor.selection;
  const isSelectionCollapsed = Range.isCollapsed(editor.selection);

  if (!isSelectionCollapsed) {
    const [start, end] = Range.edges(editor.selection);
    console.log(editor);
    let teststart = start;
    let testend = end;
    if (check != "list") {
      Transforms.insertText(editor, stylemap[style], { at: testend });
    }
    Transforms.insertText(editor, stylemap[style], { at: teststart });
    const [newstart, newend] = Range.edges(editor.selection);
    Transforms.splitNodes(editor, { at: newend });

    Transforms.splitNodes(editor, { at: start });
    if (check != "list")
      Transforms.move(editor, {
        distance: 1,
        unit: "character",
        edge: "focus",
        reverse: true,
      });
  } else {
    let string = stylemap[style] + style + stylemap[style];
    const [start, end] = Range.edges(editor.selection);
    if (check === "list")
      Transforms.insertText(editor, stylemap[style] + style);
    else
      Transforms.insertText(editor, stylemap[style] + style + stylemap[style]);

    const [newstart, newend] = Range.edges(editor.selection);

    Transforms.splitNodes(editor, { at: newend });
    Transforms.splitNodes(editor, { at: start });
  }
};
export const addInlineStyle = (style, editor, number) => {
  let location = editor.selection;
  const isSelectionCollapsed = Range.isCollapsed(editor.selection);

  if (!isSelectionCollapsed) {
    const [start, end] = Range.edges(editor.selection);
    console.log(editor);
    let teststart = start;
    let testend = end;
    Transforms.insertText(editor, stylemap[style], { at: testend });
    Transforms.insertText(editor, stylemap[style], { at: teststart });
    console.log(location);
    // Transforms.select(editor,)
    console.log(start);
    console.log(end);

    Transforms.move(editor, {
      distance: number,
      unit: "character",
      edge: "focus",
      reverse: true,
    });
  } else {
    Transforms.insertText(editor, stylemap[style] + style + stylemap[style]);
  }
};
