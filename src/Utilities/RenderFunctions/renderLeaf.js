import React, { useCallback } from "react";
import Leaf from "../../Utilities/Elements/LeafElement";
const renderLeaf = (props) => {
  return (
    <Leaf
      {...props}
      // editor={pageState[index].editor}
    />
  );
};
export default renderLeaf;
