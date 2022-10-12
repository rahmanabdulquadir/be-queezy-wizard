import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicsInfo from "../TopicsInfo/TopicsInfo";

const Topics = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="grid-cols-3">
      <div className="bg-contain">
        <img
          className="w-4/5 mx-auto bg-contain h-4/6  mb-16"
          src="https://img.freepik.com/free-vector/flat-people-group-asking-questions_23-2148927481.jpg?w=900&t=st=1665582572~exp=1665583172~hmac=810707aad2c30cc80ddd938c28a2a249ce8bd7a2fa6f783a6098c76f3e9157c6"
          alt=""
        />
      </div>

      <div className="md:grid grid-cols-4 gap-36 w-9/12 mx-auto">
        {data.map((topic) => (
          <TopicsInfo key={topic.id} topic={topic}></TopicsInfo>
        ))}
      </div>
    </div>
  );
};

export default Topics;
