import { Text, Transforms } from "slate";
import Prism from "prismjs";
import { getHeadingLevel, getLength } from "../Helpers/DecoratorFunctions";
import { useState } from "react";

export const renderDecorator = ([node, path]) => {


  const ranges = [];
  if (!Text.isText(node)) {
    return ranges;
  }

  const tokens = Prism.tokenize(node.text, Prism.languages.markdown);

  let start = 0;

  console.log(tokens);

  for (const token of tokens) {
    const length = getLength(token);
    const end = start + length;
    if (typeof token !== "string") {
      console.log(token.type);
   
      ranges.push({
        [token.type]: true,
       
        heading: token.type === "title" ? getHeadingLevel(token) : null,
        anchor: { path, offset: start },
        focus: { path, offset: end },
      });
    }
    start = end;
  }

  return ranges;
};
