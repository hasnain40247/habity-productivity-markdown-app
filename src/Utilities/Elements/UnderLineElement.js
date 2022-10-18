import React, { useState } from "react";

export const UnderLineElement = (props) => {
  return <u {...props.attributes}>{props.children}</u>;
};
