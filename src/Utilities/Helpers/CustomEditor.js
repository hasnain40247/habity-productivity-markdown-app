import React from "react";
import { Editor, Element, Range, Text, Transforms, Document } from "slate";
import { css } from "@emotion/css";

export const isMarkActive = (editor, mark) => {
  const [match] = Editor.nodes(editor, {
    match: function (n) {
      switch (mark) {
        case "bold":
          return CustomChecks.isBoldMarkActive(editor);
          break;
      }
    },
    universal: true,
  });
  // console.log(match);
  return !!match;
};
export const CustomChecks = {
  isBoldMarkActive(editor) {
    // const [match] = Editor.nodes(editor, {
    //   match: function(n){
    //     console.log(n)
    //     return  n.bold === true},
    //   universal: true,
    // });
console.log(Editor.marks(editor));
    // return !!match;
  },
};
