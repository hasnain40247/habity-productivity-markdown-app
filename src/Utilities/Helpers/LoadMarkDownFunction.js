import { Transforms } from "slate";

export const LoadMarkDown = (editor, content) => {
  let totalNodes = editor.children.length;

  for (let i = 0; i < totalNodes - 1; i++) {
    Transforms.removeNodes(editor, {
      at: [totalNodes - i - 1],
    });
  }

  // Add content to SlateJS
  for (const value of content) {
    Transforms.insertNodes(editor, value, {
      at: [editor.children.length],
    });
  }

  Transforms.removeNodes(editor, {
    at: [0],
  });
};
