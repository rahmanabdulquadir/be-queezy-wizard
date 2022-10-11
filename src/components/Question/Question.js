import React from "react";

const Question = ({ singleQuestion, data }) => {
  // console.log(data)
  // const {name} = data;
  console.log(singleQuestion);
  const { question, options } = singleQuestion;
  return (
    <div>
      <div className="border border-black mb-12 shadow-md shadow-gray-300">
        <h2 className="text-emerald-800 font-bold">{question}</h2>
        {options}
      </div>
    </div>
  );
};

export default Question;
