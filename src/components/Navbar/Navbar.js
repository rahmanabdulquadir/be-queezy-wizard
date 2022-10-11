import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-evenly md:flex bg-teal-500 text-white items-center h-20">
      <div>
        <h2 className="text-4xl cursor-pointer">BeQueezyWizard</h2>
      </div>
      <div>
        <Link className="mx-4 text-lg" to={"/"}>
          Topics
        </Link>
        <Link className="mx-4 text-lg" to={"/statistics"}>Statistics</Link>
        <Link className="mx-4 text-lg" to={"/blog"}>Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
