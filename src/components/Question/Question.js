import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon } from "@heroicons/react/24/solid";

const Question = ({ qsn }) => {
  console.log(qsn);
  const [value, setValue] = useState("");
  const { question, options, correctAnswer } = qsn;
  const answer = correctAnswer.replaceAll(" ", "");
  console.log(answer);
  const ans = (innerText) => {
    const text = innerText.replaceAll(" ", "");
    console.log(text);
    if (answer === text) {
      console.log("right");
      toast("Congrats! You have selected the correct answer", { position: "top-center" });
    } else {
      console.log("wrong");
      toast.error("wrong answer", { autoClose: 500 });
    }
  };
  const eye = (correctAnswer) => {
    setValue(correctAnswer);
  };
  return (
    <div>
      <h2>{question}</h2>
      <EyeIcon
        className="h-6 w-6 text-blue-500"
        onClick={() => eye(correctAnswer)}
      ></EyeIcon>
      <p>{value}</p>
      <div className="m-4 p-4 gap-3">
        <p className="cursor-pointer" onClick={(e) => ans(e.target.innerText)}>
          {options[0]}
        </p>
        <p className="cursor-pointer" onClick={(e) => ans(e.target.innerText)}>
          {options[1]}
        </p>
        <p className="cursor-pointer" onClick={(e) => ans(e.target.innerText)}>
          {options[2]}
        </p>
        <p className="cursor-pointer" onClick={(e) => ans(e.target.innerText)}>
          {options[3]}
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Question;
