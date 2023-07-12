import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Habits from "./components/Habits/Habits";
import Navbar from "./components/Navbar/Navbar";
import WeekView from "./components/WeekView/WeekView";



const App = () => {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
         {index: true,  element :<Habits  /> },
         { path: "weekview", element: <WeekView /> }
      ],
    },
  ]);
  return (
    <>

        <RouterProvider router={browserRouter} />
    </>
  );
};

export default App;
