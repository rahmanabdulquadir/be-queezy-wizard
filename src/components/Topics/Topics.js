import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsInfo from '../TopicsInfo/TopicsInfo';

const Topics = () => {
  const {data} = useLoaderData();
  console.log(data)
  return (
    <div className="grid-cols-3">
      <img className='w-4/5 mx-auto h-96 mb-12' src="https://t4.ftcdn.net/jpg/04/55/61/97/240_F_455619718_IKNxCEf19eGCJFVcJa1rstBcjz5v48sD.jpg" alt="" />
      
     <div className='md:grid grid-cols-4 gap-4'>
     {
        data.map(topic => <TopicsInfo
           key={topic.id} topic={topic}>
           </TopicsInfo>)
      }
     </div>
    </div>
  );
};

export default Topics;