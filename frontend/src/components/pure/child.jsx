import React, { useRef } from "react";

export default function Child({ name, send }) {
  const messageRef = useRef("");

  function pressButton() {
    const text = messageRef.current.value;
    console.log("Function Press Button");
  }

  function pressButtonParams(Text) {
    console.log(`Text: ${Text}`);
  }
  return (
    <div>
      <p
        onMouseOver={() => {
          console.log("onMouseOver ");
        }}
      >
        Child Component{" "}
      </p>
      <button
        onClick={() => {
          console.log("Button 1");
        }}
      >
        {" "}
        Button 1{" "}
      </button>
      <button onClick={pressButton}> Button 2 </button>
      <button onClick={() => pressButtonParams("Hello")}> Button 3 </button>
      <input
        placeholder="Insert a Message"
        onFocus={() => console.log("On Focus")}
        onChange={(e) => console.log(e.target.value)}
        onCopy={() => console.log("Copied text from Input")}
        ref={messageRef}
      />
      <button> Send Message </button>
    </div>
  );
}
