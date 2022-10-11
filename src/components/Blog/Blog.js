import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className='md:grid grid-cols-3 gap-4 mx-auto mt-48'>
        <div className='rounded shadow-md shadow-gray-300 p-2'>
          <h2>What is the purpose of React Router?</h2>
          <p></p>
        </div>
        <div className='rounded shadow-md shadow-gray-300 p-2'>
          <h2>How does Context API works?</h2>
          <p></p>
        </div>
        <div className='rounded shadow-md shadow-gray-300 p-2'>
          <h2>Some Details about useRef Hook.</h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;