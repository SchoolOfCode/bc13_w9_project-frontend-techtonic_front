import React from "react";

function Button({ className, text, handleClick, id }) {
  return (
    <button className={className} onClick={handleClick} id={id}>
      {text}
    </button>
  );
}

export default Button;
