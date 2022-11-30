import React from "react";

/** This is a reusable button component.
 *
 * @param {string} className - Will be the value of the class name as inputted.
 * @param {string} text - Will be the value of the text as inputted.
 * @param {func} handleClick - Will be the action that is triggered when the button is clicked.
 * @param {string} id - Will be the value of the id as inputted.
 * @param {string} type - Will be given a type (e.g. submit)
 * @component
 * @returns a button component.
 */
function Button({ className, text, handleClick, id, type }) {
  return (
    <button className={className} onClick={handleClick} id={id} type={type}>
      {text}
    </button>
  );
}

export default Button;
