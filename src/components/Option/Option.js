import React from "react";

const Option = ({ option }) => {
  console.log(option)
  return (
    <div>
      {/* <input type="radio" id={option} name='anything' value="HTML"></input>
      <label for={option}>{option}</label> */}
      <p>{option}</p>
    </div>
  );
};

export default Option;
