import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";


const App = () => {

  //ADD JOB
  const addjob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  }
  //DELETE JOB
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
    return;
  }

  //UPDATE JOB
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return;
  }

  //ROUTES
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
          element: <JobPage deleteJob={deleteJob}></JobPage>,
          loader: jobLoader,
        },
        {
          path: "/add-job",
          element: <AddJobPage addJobSubmit={addjob}></AddJobPage>,
        },
        {
          path: "/edit-job/:id",
          element: <EditJobPage updateJobSubmit={updateJob}></EditJobPage>,
          loader: jobLoader,
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
