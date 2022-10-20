import { Editor, Range, Transforms } from "slate";

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
  }
};
export const stylemap = {
  bold: "**",
  italic: "_",
  strike: "~",
  "code-snippet": "`",
};

export const addBlockStyle = (style, editor) => {
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

    // Transforms.move(editor, {
    //   distance: 1,
    //   unit: "character",
    //   edge: "focus",

    // });
    const [newstart, newend] = Range.edges(editor.selection);
    Transforms.splitNodes(editor, { at: newend });

    Transforms.splitNodes(editor, { at: start });

    Transforms.move(editor, {
      distance: 2,
      unit: "character",
      edge: "focus",
      reverse: true,
    });
  } else {
    // Transforms.splitNodes(editor, {height:20})
    let string = stylemap[style] + style + stylemap[style];
    console.log(string);
    const [start, end] = Range.edges(editor.selection);
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
