import React from "react";

const btn = () => {
  const [para, setPara] = React.useState(false);

  return (
    <div>
      <Button
        id="click"
        type="button"
        onClick={() => {
          setPara(!para);
        }}
      >
        Click me
      </Button>

      {para ? (
        <p id="para" style={{ opacity: 1 }}>
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
};

export default btn;
