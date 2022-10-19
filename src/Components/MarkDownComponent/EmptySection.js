import React from "react";

const EmptySection = () => {
  return (
    <div
      className="markdown empty"
      style={{
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "absolute",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/page.png" className="pagelogo" height={50} width={50} />

        <h1 className="heading">Create A Page!</h1>
      </div>
    </div>
  );
};
export default EmptySection;
