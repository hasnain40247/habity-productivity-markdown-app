import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { Context } from "../../Context/MarkDownContext";
import { createEditor, Editor, Text, Transforms } from "slate";
import { Slate, Editable, withReact, DefaultElement } from "slate-react";

import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markdown";
import ToolBar from "./ToolBar";
import Preview from "./Preview";
import EmptySection from "./EmptySection";
import { renderElement } from "../../Utilities/RenderFunctions/renderElement";
import { onKeyDown } from "../../Utilities/Helpers/OnKeyDown";
import { initialValue } from "../../Utilities/Helpers/InitialState";
import { renderDecorator } from "../../Utilities/RenderFunctions/renderDecorator";
import renderLeaf from "../../Utilities/RenderFunctions/renderLeaf";
import {
  addBlockStyleList,
  handleEnter,
} from "../../Utilities/Helpers/OnClickHandler";
import { useDispatch, useSelector } from "react-redux";
import { LoadMarkDown } from "../../Utilities/Helpers/LoadMarkDownFunction";
import { onChangePageContent } from "../../Features/Journals/journalSlice";

const SlateEditor = () => {
  const journal = useSelector((state) => state.journal.selectedJournal);
  const pages = useSelector((state) =>
    state.journal.journals.filter((e) => e.journalId === journal)
  );
  const page = pages[0].pages.filter(
    (e) => e.pageId === pages[0].selectedPage
  )[0];
  const [value, setValue] = useState(initialValue);
  const [toggle, setToggle] = useState(0);

  let dispatch = useDispatch();

  const [editor] = useState(() => withReact(createEditor()));

  useEffect(() => {
    LoadMarkDown(editor, page.pageMarkdown);
  }, [pages[0].selectedPage]);

  const handleChange = useCallback(() => {
    dispatch(onChangePageContent(value));
  }, [value]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "5% 10% 3px",
        boxSizing: "border-box",
      }}
    >
      {1 > 0 ? (
        <Slate
          editor={editor}
          value={value}
          onChange={(change) => setValue(change)}
        >
          <ToolBar
            editor={editor}
            pageName={page.pageName}
            handleToggle={() => setToggle(toggle === 0 ? 1 : 0)}
            toggle={toggle}
          />
          {toggle === 0 ? (
            <Editable
              onBlur={() => handleChange()}
              decorate={([node, path]) => renderDecorator([node, path, editor])}
              renderLeaf={renderLeaf}
              autoFocus
              renderElement={renderElement}
              placeholder="Write some markdown..."
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  event.preventDefault();
                  handleEnter("list-item", editor);
                }
              }}
              className="richEditor markfont"
            />
          ) : (
            <Preview value={value} />
          )}
        </Slate>
      ) : (
        <EmptySection />
      )}
    </div>
  );
};
export default SlateEditor;
