import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon } from "@heroicons/react/24/solid";

const Question = ({ qsn }) => {
  // console.log(qsn);
  const [value, setValue] = useState("");
  const { question, options, correctAnswer } = qsn;
  const answer = correctAnswer.replaceAll(" ", "");
  console.log(answer);
  const ans = (innerText) => {
    const text = innerText.replaceAll(" ", "");
    // console.group(text)
    if (answer === text) {
      console.log("right");
      // alert('Congrats! You have selected the correct answer')
      toast("Congrats! You have selected the correct answer", {
        position: "top-center",
      });
    } else {
      console.log("wrong");
      toast.error("wrong answer", { autoClose: 500 });
    }
  };
  const eye = (correctAnswer) => {
    setValue(correctAnswer);
  };
  return (
    <div className="mt-14">
      <div className="mt-10 bg-slate-300 shadow-md shadow-emerald-300 bg-gradient-to-r from-slate-300 to-white w-9/12 mx-auto rounded p-5">
        <h2 className="text-2xl font-semibold">{question}</h2>
        <div className="flex justify-end">
          <EyeIcon
            className="h-6 w-6 text-emerald-500"
            onClick={() => eye(correctAnswer)}
          ></EyeIcon>
          <p>{value}</p>
        </div>
        <div className="md:grid grid-cols-2 m-4 p-4 gap-3 ">
          <p
            className="cursor-pointer "
            onClick={(e) => ans(e.target.innerText)}
          >
            {options[0]}
          </p>
          <p
            className="cursor-pointer "
            onClick={(e) => ans(e.target.innerText)}
          >
            {options[1]}
          </p>
          <p
            className="cursor-pointer"
            onClick={(e) => ans(e.target.innerText)}
          >
            {options[2]}
          </p>
          <p
            className="cursor-pointer"
            onClick={(e) => ans(e.target.innerText)}
          >
            {options[3]}
          </p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Question;
