import React, { useMemo } from "react";

export const MemoComponent = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [number, setNumber] = React.useState(0);
  const [value, setValue] = React.useState("");
  console.count("memo component rendered");
  const doubleRender = useMemo(() => slowFunction(number, number), [number]);

  const rowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: "10px",
    alignItems: "center",
    marginTop: "10px",
  };

  return (
    <div>
      <h3>Memo component with a slow function</h3>
      <button onClick={() => setNumber(number + 1)}>
        Increment (invoke a slow function)
      </button>
      <p>
        Number: {number} and double {doubleRender}
      </p>
      <div style={rowStyle}>
        <input
          placeholder="This input causes re-render"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="This input does not causes re-render"
        />
      </div>
    </div>
  );
};

const slowFunction = (a: number, b: number) => {
  console.log(1e9);
  for (let i = 0; i <= 1e9; i++) {}
  return a + b;
};
