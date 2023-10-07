

import  { lazy,Suspense  } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import { TopBarLoader } from "../components/Loader";

const Dashboard = lazy(() => import("../screens/Dashboard/index"));
const Employees = lazy(() => import("../screens/Dashboard/Employees"));
const Clients = lazy(() => import("../screens/Dashboard/Clients"));
const Projects  = lazy(()=>import("../screens/Dashboard/Projects"));


import Layout from "../shared/Layout/index";

const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Dashboard/>
      },
      {
        path: "/employees",
     element:<Employees/>
     },
     {
      path: "/clients",
       element:<Clients/>
      }, 
      {
        path: "/projects",
     element:<Projects/>
      }

    ]
  },
]);

function RootNavigator() {
  return (
    <Suspense>
    <RouterProvider router={router} />
    </Suspense>
  );
}

export default function AppNavigator() {
  return <RootNavigator />;
}
