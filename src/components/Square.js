import React from "react";

const Square = ({ value, click }) => {
  return (
    <div>
      <button className="btn" onClick={() => click()}>
        {value}
      </button>
    </div>
  );
};

export default Square;
