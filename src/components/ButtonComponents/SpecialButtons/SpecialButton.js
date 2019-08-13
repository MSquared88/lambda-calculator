import React from "react";

const SpecialButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='btn btn-specials' >{props.specialChar}</button>
    </>
  );
};

export default SpecialButton 
