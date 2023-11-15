import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import AddUser from "./Pages/AddUser/AddUser";
import Update from "./Pages/Update/Update";
import Main from "./Pages/Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>
            fetch(
              "https://backend-class-55-gipm7c1a1-ismails-projects-2fe4d7e3.vercel.app"
            ),
        },
        {
          path: "/addUser",
          element: <AddUser></AddUser>,
        },
        {
          path: "/update/:id",
          element: <Update></Update>,
          loader: ({ params }) =>
            fetch(
              `https://backend-class-55-gipm7c1a1-ismails-projects-2fe4d7e3.vercel.app/users/${params.id}`
            ),
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
