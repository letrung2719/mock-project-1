import React from "react";

const textbox = {
  borderRadius: "8px",
  borderWidth: "thin",
  paddingLeft: "10px",
  width: "300px",
  height: "40px"
};

function TextBox() {
  return (
    <div style={{ width:"300px" }}>
      <input type="text" placeholder="Search..." style={textbox} />
    </div>
  );
}

export default TextBox;
