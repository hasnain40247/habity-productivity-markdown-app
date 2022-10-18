import React, { useState } from "react";

export const BoldElement = (props) => {
  return <h2 {...props.attributes}>{props.children}</h2>;
};
