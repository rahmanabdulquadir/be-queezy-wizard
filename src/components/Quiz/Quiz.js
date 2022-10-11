import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const topic = useLoaderData();
  const data = topic.data;
  const questions = data.questions;
  // console.log(questions)
  console.log(data);
  // console.log(topic)
  return (
    <div>
      <h2>Quiz part</h2>
      <div className="md:grid grid-cols-1">
        {questions.map((singleQuestion) => (
          <Question
            key={singleQuestion.id}
            singleQuestion={singleQuestion}
            data={data}
          ></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
