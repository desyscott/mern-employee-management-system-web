

import AppNavigator from "./navigation/AppNavigator";

function App() {
  return <AppNavigator />;

}

export default App






// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Dashboard from "./screens/Dashboard";
// import Employees from './screens/Dashboard/Employees';
// import Clients from "./screens/Dashboard/Clients";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="/clients">Clients</Link>
//             </li>
//             <li>
//               <Link to="/employees">Employees</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/">
//             <Dashboard/>
//           </Route>
//           <Route path="/employees">
//             <Employees />
//           </Route>
//           <Route path="/clients">
//             <Clients />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }





