

import  { lazy } from 'react';


// import Dashboard from "../screens/Dashboard";
// import Employees from '../screens/Dashboard/Employees';
// import Clients from '../screens/Dashboard/Clients';
// import Projects from "../screens/Dashboard/Projects";


// import Layout from "../shared/Layout/index";
// const { lazy } = require("react");
// const Dashboard = lazy(() => import("../screens/Dashboard/index"));
// const Employees = lazy(() => import("../screens/Dashboard/Employees"));
// const Clients = lazy(() => import("../screens/Dashboard/Clients"));
// const Projects  = lazy(()=>import("../screens/Dashboard/Projects"));

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const Dashboard = lazy(() => import("../screens/Dashboard/index"));
const Employees = lazy(() => import("../screens/Dashboard/Employees"));
const Clients = lazy(() => import("../screens/Dashboard/Clients"));
const Projects  = lazy(()=>import("../screens/Dashboard/Projects"));


import Layout from "../shared/Layout/index";

export const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Dashboard/>
      }
    ]
  },
  {
    element:<Layout/>,
    children:[
      {
           path: "/employees",
        element:<Employees/>
      }
    ]
   
  },
  {
    element:<Layout/>,
    children:[
      {
           path: "/clients",
        element:<Clients/>
      }
    ]
   
  },
  {
    element:<Layout/>,
    children:[
      {
           path: "/projects",
        element:<Projects/>
      }
    ]
   
  },
]);
   
  // export default routes;
  