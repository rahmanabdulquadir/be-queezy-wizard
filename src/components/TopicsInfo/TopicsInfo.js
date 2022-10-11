import React from "react";
import { Link } from "react-router-dom";

const TopicsInfo = ({ topic }) => {
  // console.log(topic);
  const {id, name, logo } = topic;
  return (
    <div className="bg-slate-200 w-60 mx-auto rounded shadow-md shadow-gray-300 p-2">
      <img className="w-60 mb-3" src={logo} alt="" />
      <div className="flex justify-between">
        <h2>{name}</h2>
       <Link to={`/topic/${id}`}> <button className="bg-teal-500 text-white rounded px-4 py-1">Start practice</button></Link>
      </div>
    </div>
  );
};

export default TopicsInfo;
