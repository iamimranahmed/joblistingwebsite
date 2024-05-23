import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";


const App = () => {

  const addjob = (newJob) => {
    console.log(newJob)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
        {
          path: "/jobs",
          element: <JobsPage ></JobsPage>,
        },
        {
          path: "/jobs/:id",
          element: <JobPage></JobPage>,
          loader: jobLoader,
        },
        {
          path: "/add-job",
          element: <AddJobPage addJobSubmit={addjob}></AddJobPage>,
        },
        {
          path: "/*",
          element: <NotFoundPage></NotFoundPage>,
        }
      ]
    }


  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
