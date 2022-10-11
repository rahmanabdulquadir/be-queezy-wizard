import React from "react";
import Option from "../Option/Option";

const Question = ({ singleQuestion, data }) => {
  // console.log(data)
  // const {name} = data;
  // console.log(singleQuestion);
  const { question, id, options } = singleQuestion;
  
  return (
    <div>
      <div className="border border-black mb-12 shadow-md shadow-gray-300">
        <h2 className="text-emerald-800 font-bold">{question}</h2>
        <div className="grid grid-cols-2">
          {options.map(option => <Option 
          option={option} id={id}
          ></Option>)}
        </div>
        {/* <button>{options}</button> */}
      </div>
    </div>
  );
};

export default Question;
