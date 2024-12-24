import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>route not found</h2>,
      children:[
        {
        path:'/',
        element:<Home></Home>
        },
        {
          path:'/jobs/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
          
        },
        {
          path:'/jobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path:'/myApplication',
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path:'/AddJob',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'signIn',
          element:<SignIn></SignIn>
        }
      ]
    },
  ]);
export default router;  