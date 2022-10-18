import React from "react";
import { LeafElement } from "../Elements/LeafElement";
const renderLeaf = useCallback((props) => {
    return <LeafElement {...props} 
    // editor={pageState[index].editor}
     />;
  }, []);