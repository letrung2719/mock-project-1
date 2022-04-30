import React from "react";

const dropdown = {
  width: "160px",
  borderRadius: "8px",
  height: "44px"
};

function DropDown({array}) {
  return (
    <div>
      <select style={dropdown}>
        <option hidden selected>Ages</option>
        {array.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
