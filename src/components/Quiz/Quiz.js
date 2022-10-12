import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const topic = useLoaderData();
  const topicQsn = topic.data.questions;
  return (
    <div>
      {topicQsn.map((qsn) => (
        <Question key={qsn.id} qsn={qsn}></Question>
      ))}
    </div>
  );
};

export default Quiz;
