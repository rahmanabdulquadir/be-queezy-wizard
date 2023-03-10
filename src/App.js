import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Topics from "./components/Topics/Topics";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import Quiz from "./components/Quiz/Quiz";
import Error from "./components/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Topics></Topics>,
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        },
        {
          path: "/topics",
          element: <Topics></Topics>,
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        },
        {
          path: "/topic/:topicId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            );
          },
          element: <Quiz></Quiz>,
        },
        {
          path: "/statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
