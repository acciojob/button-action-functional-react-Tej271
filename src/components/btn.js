import React from "react";

const btn = () => {
  return (
    <div>
      <Button
        id="click"
        onClick={() => {
          <p id="para" style={{ opacity: 1 }}>
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>;
        }}
      ></Button>
    </div>
  );
};

export default btn;
