import { useState, useLayoutEffect, useRef } from "react";

const LayoutEffectComponent = () => {
  const [width, setWitdth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  useLayoutEffect(() => {
    setWitdth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <h2>textare width: {width}px</h2>
      <h2>textare height: {height}px</h2>
      <textarea
        onClick={() => {
          setWitdth(0);
        }}
        ref={el}
      />
    </div>
  );
};

export default LayoutEffectComponent;
