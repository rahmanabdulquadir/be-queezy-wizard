import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistics = () => {
  const stats = useLoaderData();
  const data = stats.data;
  return (
    <div>
      <Chart data={data}></Chart>
    </div>
  );
};

export default Statistics;