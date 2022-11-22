import React from "react";

function TextBox({ children, text }) {
  return (
    <section>
      {children}
      {text}
    </section>
  );
}

export default TextBox;
