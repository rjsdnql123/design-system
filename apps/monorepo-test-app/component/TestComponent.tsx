'use client'
import { ShadowDom } from "@monorepo/cui";
import { useState } from "react";

const TestComponent = () => {
  const [count, setCount] = useState(0)
  const onIncrement = () => {
    setCount(count + 1)
  }
  return (
    <ShadowDom css={`
    div{
        color: blue
    }
    `}>
      <div>전 Shadow DOM 이에요</div>
      {count}
      <button onClick={onIncrement}>+</button>
    </ShadowDom>
  );
};

export default TestComponent