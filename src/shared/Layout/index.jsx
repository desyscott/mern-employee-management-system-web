import  { Fragment,Suspense } from "react";
import PrivateRoute from "../../navigation/PrivateRoute";
import {Footer}from "../../components"
import {Navbar} from "../../components"
import {Sidebar} from "../../components"

import { TopBarLoader } from "../../components/Loaders";



export default function Layout() {
 
  return (
    <Fragment>
     <div className="font-nunito bg-gray-900">
       <div className="flex">
          <aside  className=" flex-initial z-30 items-start" >
            <Sidebar />
          </aside>
          <div className="flex flex-col flex-auto">
              <Navbar />
            <main  className={"min-h-screen max-h-full overscroll-y-auto max-w-full bg-slate-100 p-5"}>
            <Suspense fallback={TopBarLoader()}>
                {/* {routes.map((screen, i) => (
                  <PrivateRoute
                    name={screen.name}
                    component={screen.component}
                    exact={screen.exact}
                    path={screen.path}
                    key={i}
                  />
                ))} */}
                <PrivateRoute/>
                </Suspense>
              </main>
            <Footer />
            </div>
          </div>
       </div>
    </Fragment>
  );
}
