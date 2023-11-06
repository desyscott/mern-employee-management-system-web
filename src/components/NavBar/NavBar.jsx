import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import Transitions from "../../utils/Transition";
// import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
// import CarRentalSharpIcon from "@mui/icons-material/CarRentalSharp";
// import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
// import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
// import { motion} from "framer-dist/framer-;


export default function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  // const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [open, setOpen] = useState(false);



//   const variants = {
//     open: { opacity: 1, x: 0 },
//     closed: { opacity: 0, x: "-100%" },
//   };

  return (
    <Fragment>
      {/* <header className="sticky inset-x-0  top-0 shadow-lg w-full z-20 bg-white bg-transparent  bg-opacity-100 backdrop-blur backdrop-filter font-figtree">
        <div className="px-4 mx-auto sm:px-6 lg:px-16"> 
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
              <img className="w-auto h-8" src={logo} alt="" />
              </a>
            </div>

            <div className="hidden pl-10 lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <button
                onMouseEnter={() => {
                  setShowFeatures(!showFeatures);
                  setShowSolutions(false);
                }}
                onClick={() => {
                  setShowSolutions(false);
                  setShowFeatures(!showFeatures);
                }}
                className="text-base text-black font-medium hover:text-green-400 inline-flex transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Features{" "}
                <svg
                  className="text-white ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button
                onMouseEnter={() => {
                  setShowSolutions(!showSolutions);
                  setShowFeatures(false);
                }}
                onClick={() => {
                  setShowSolutions(!showSolutions);
                }}
                className="text-base text-black font-medium hover:text-green-400 inline-flex transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Partners{" "}
                <svg
                  className="text-white ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <a
                href="#/developer"
                title=""
                className="text-base text-green-600 font-semibold hover:text-green-400 transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Developer{" "}
              </a>

              <a
                href="#/merchants"
                title=""
                className="text-base text-black font-medium hover:text-green-400 transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Merchants{" "}
              </a>
            </div>

            <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
              <a
                href="#/how-it-works"
                title=""
                className="md:inline-flex items-center hidden justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-green-700  bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
                role="button"
              >
                {" "}
                How it works!{" "}
              </a>
            </div>

            <button
              type="button"
              aria-expanded="false"
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex p-2 ml-1 text-green-600 transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-white hover:bg-white"
            >
             
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="#22c55e"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>

    
              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="#22c55e"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

        </div>
      </header> */}

      
     <nav className="sticky inset-x-0  top-0 shadow-lg w-full z-20 bg-white bg-transparent  bg-opacity-100 backdrop-blur backdrop-filter font-figtree">
        <div className="max-w-7xl mx-auto px-2 pb-1 sm:px-4 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex px-2 lg:px-0">
              {/* <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div> */}
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                <a 
                 href="/"
                  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  
                >
                  Dashboard
                </a>
                <a
                  href="/employees"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Team
                </a>
                <a
                  href="/clients"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Clients
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Calendar
                </a>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setShowMenu(!showMenu)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:ml-4 lg:flex lg:items-center">
              <button className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <div className="ml-4 relative flex-shrink-0" onClick={() => setOpen(!open)}>
                <div>
                  <button
                    type="button"
                    className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="user-menu-button"
                    aria-expanded="false"
                    onClick={() => setShowMenu(!showMenu)}
                    aria-haspopup="true"
                  >
                    <span className="sr-only ">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=ah3lxr8uqw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                    
                </div>
              </div>
              
              <div className={`ml-2 mt-2 text-gray-400 rounded-full cursor-pointer hover:text-gray-500 `}
              onClick={() => setOpen(!open)} >
                   <span>Admin</span>
                    <KeyboardArrowDownIcon onClick={() => setOpen(!open)}  className={`
                      ${open
                        ? "rotate-180 toggle-btn  text-black-600"
                        : "toggle-btn cursor-pointer  text-black-600"}
                       
                        `}/>
                  </div>
            </div>
          </div>
        </div>

         {/**PROFILE MENU */}
         <Transitions
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div
              className="origin-top-right absolute right-0 mt-2 w-60 z-50 hidden lg:block h-44 rounded-md shadow-lg py-3 bg-gray-200 text-black ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
            >
              <Link to="/how-it-works" onClick={() => setShowMenu(!showMenu)}>
                <span
                  href="#"
                  className="block px-4 py-2 text-sm text-green-600 hover:bg-gray-50"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                  onClick={()=>{
                    window.scrollTo({top:(0, 0), behavior: 'smooth'});
                  }}
                >
                   Your Profile
                </span>
              </Link>
              <Link to="/merchants" onClick={() => setShowMenu(!showMenu)}>
                <span
                  className="block px-4 py-3 text-sm text-green-600 hover:bg-gray-50"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                  onClick={()=>{
                    window.scrollTo({top:(0, 0), behavior: 'smooth'});
                  }}
                >
                  Settings
                </span>
              </Link>
              <a
                href="https://bustickets.tapngogh.com/"
                className="block px-4 py-2 text-sm text-green-600 hover:bg-gray-50"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-0"
              >
                Book Bus Ticket
              </a>

              <Link to="/faqs" onClick={() => setShowMenu(!showMenu)}>
                <span
                  href="#"
                  className="block px-4 py-2 text-sm text-green-600 hover:bg-gray-50"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                  onClick={()=>{
                    window.scrollTo({top:(0, 0), behavior: 'smooth'});
                  }}
                >
                  Sign out
                </span>
              </Link>
          
            </div>
          </Transitions>

      
          {/**MOBILE MENU */}
          <Transitions 
            show={showMenu}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
        <div className="lg:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Calendar
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=ah3lxr8uqw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Tom Cook</div>
                <div className="text-sm font-medium text-gray-500">
                  tom@example.com
                </div>
              </div>
              <button className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3 space-y-1">
              <a
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
        </Transitions>
      </nav> 
    </Fragment>
  );
}
