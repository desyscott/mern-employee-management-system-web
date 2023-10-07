import {useState,Fragment} from 'react'
import Button from "../../components/Button"
import {Link} from "react-router-dom"


import { BasicModal } from "../../components/modals";
import { employeesData } from '../../components/EmployeesData/EmployeesData';
import AddIcon from '@mui/icons-material/Add';

function employees() {
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);

  return (
    <Fragment>
    {/* <Link to="/" className="text-3xl font-bold ">Dashboard</Link> */}
    <BasicModal show={showAddEmployeeModal}>
        <div className="p-10">
          <h1 className="font-bold text-2xl font-nunito text-green-600">
            🎉Hurray! We've received your application
          </h1>
          <h2 className="text-gray-500 font-nunito pb-5">
            You've successfully submitted your application. Here's to let you
            know that we've received it.
          </h2>

          <h1 className="font-bold font-nunito">
            Here's what you should do next.
          </h1>
          <ul>
            <li>
              <p className="font-nunito">
                Visit your Municipal or District Assembly(Taxi and Trotro ) or
                any of our Service Centres (Private Cab Drivers) for vetting and
                approval. This is stage is to ensure that you're qualified
                enough to drive with us.{" "}
              </p>
            </li>

            <li>
              <p className="font-nunito">
                After a successful verification we'll send you an activation
                code. This help you activate your account.
              </p>
            </li>
            <li>
              <p className="font-nunito">
                If you're a vehicle owner. Kindly download the vehicle owner's
                app to onboard your vehicles.{" "}
                <b>Vehicles will be inspected before you can assign a driver</b>
              </p>
            </li>
            <li>
              <p className="font-nunito">
                Regards! <br></br> Transport For Ghana
              </p>
            </li>
          </ul>
          <Button
            title="Continue"
            onClick={() => {
              setShowAddEmployeeModal(false);
            }}
          ></Button>
        </div>
      </BasicModal>

      <div className="mb-1">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between h-16">
         
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
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
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

              <div className="ml-4 relative flex-shrink-0">
                <div>
                  {/* <button
                    type="button"
                    className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=ah3lxr8uqw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button> */}
                  <Button
                      title="New Employee"
                      icon={<AddIcon/>}
                     onClick={()=>setShowAddEmployeeModal(true)}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div> 
        <div className='flex flex-wrap justify-center w-full max-w-5xl mx-auto gap-8'>
        {employeesData.map((employee,index)=>(
             <>
           
         <div key={index} className='bg-white w-56 rounded-md shadow p-8 '>
              <div className="flex flex-col items-center justify-center relative flex-shrink-0 text-center">
                <div className='mb-2'>
                  <button
                    type="button"
                    className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="user-menu-button"
                    aria-expanded="false"
                    // onClick={() => setShowMenu(!showMenu)}
                    aria-haspopup="true"
                  >
                    <span className="sr-only ">Open user menu</span>
                    <img
                      className="h-20 w-auto rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=ah3lxr8uqw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                    
                </div>
                <div>
                  <strong className="text-center">{employee.FirstName} {employee.LastName}</strong>
                  <p className='text-gray-500'>{employee.JobTitle}</p>
              </div>
              </div>
             
            </div>
             </>
        ))}
     
        </div> 
    </Fragment>
  )
}

export default employees
