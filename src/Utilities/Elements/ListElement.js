import React, { useState } from "react";

export const ListElement = (props) => {
  return (
    <ul {...props.attributes}>
      <li>{props.children}</li>
    </ul>
  );
};
