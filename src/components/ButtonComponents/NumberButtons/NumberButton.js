import React from "react";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
      onClick = {() => (console.log(props.number))}
      className = 'btn btn-numbers' id = {props.number === '0' ? 'btn-0' : null }>{props.number}
      </button>
    </>
  );
};
export default NumberButton