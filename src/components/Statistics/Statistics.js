import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistics = () => {
  const stats = useLoaderData();
  const data = stats.data;
  // const total = data.total
  // console.log(data)
  return (
    <div>
      <Chart data={data}></Chart>
      {/* {
        data.map(singleData => <Chart key={data.id} singleData={singleData}></Chart>)
      } */}
    </div>
  );
};

export default Statistics;