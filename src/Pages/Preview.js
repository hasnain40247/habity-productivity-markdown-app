import React, { useContext, useEffect, useState } from "react";
import { Context as MarkContext } from "../Context/MarkDownContext";
import ReactMarkdown from "react-markdown";
import escapeHtml from "escape-html";
import { Text } from "slate";
import {
  FiBold,
  FiMoreVertical,
  FiItalic,
  FiUnderline,
  FiDelete,
  FiTrash2,
  FiEye,
  FiEdit2,
  FiBookOpen,
} from "react-icons/fi";
import { Node } from "slate";
import rehypeRaw from "rehype-raw";
import PreviewButton from "../Components/MarkDownComponent/PreviewButton";

const Preview = ({ index}) => {
  const { setMarkDown, setTitle } = useContext(MarkContext);
  const { state: pageState } = useContext(MarkContext);
  const [mark, setMark] = useState("");
  let curr = [];
  // console.log(pageState[index].markdown);

  const serialize = (nodes) => {
    return nodes.map((n) => Node.string(n)).join("\n");
  };

  // serialize(pageState[index].markdown);
  const htm = "<h1>HOHOHOOHHO</h1>";

  return (
    <ReactMarkdown className="richEditor">
      {htm}
      {/* {serialize(pageState[index].markdown)} */}
    </ReactMarkdown>
  );
};
export default Preview;
