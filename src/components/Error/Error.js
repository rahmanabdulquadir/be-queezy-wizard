import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <img className='w-80 h-80 mx-auto mt-40 mb-7' src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=740&t=st=1665583180~exp=1665583780~hmac=7e249fb9cfc7e84284221fd86f7431e32e8736e91b7fe11d38a679261f9666c7" alt="" />
      <Link to={'/'}><button className='bg-teal-800 text-white rounded px-4 py-1'>Return Home</button></Link>
    </div>
  );
};

export default Error;