import React from "react";

const Option = ({ option, id }) => {
  console.log(option)
  return (
    <div>
      <input type="radio" id={option} name='anything' value="HTML"></input>
      <label for={option}>{option}</label>
    </div>
  );
};

export default Option;
