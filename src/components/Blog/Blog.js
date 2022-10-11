import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mt-20">Read Our Blog To Know More</h1>
      <div className="md:grid grid-cols-3 gap-4 mx-auto mt-24 w-4/5">
        <div className="rounded shadow-md shadow-gray-300 p-2">
          <h2 className="text-2xl font-bold">What is the purpose of React Router?</h2>
          <p>
            ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route.
          </p>
        </div>
        <div className="rounded shadow-md shadow-gray-300 p-2">
          <h2 className="text-2xl font-bold">How does Context API works?</h2>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </p>
        </div>
        <div className="rounded shadow-md shadow-gray-300 p-2">
          <h2 className="text-2xl font-bold">Some Details about useRef Hook.</h2>
          <p>
            The useRef hook is the new addition in React 16.8. Before proceeding
            to this article there is a prerequisite to know about the ref in
            react. The useRef is a hook that allows to directly create a
            reference to the DOM element in the functional component. The useRef
            returns a mutable ref object. This object has a property called
            .current. The value is persisted in the refContainer.current
            property. These values are accessed from the current property of the
            returned object.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
