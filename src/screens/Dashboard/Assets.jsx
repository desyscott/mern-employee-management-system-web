import React,{Fragment,useState} from 'react'
import moment from "moment"; 
import { DatePicker, message } from "antd";
import {useDispatch} from "react-redux"

import {addEmployeeAssetsDetails} from "../../components/Redux/Reducers/EmployeesReducer/EmployeeAction"


function Assets({
  setTab,
  assignedAsset,
  setAssignedAsset,
  assetAssignedDate,
  setAssetAssignedDate,
  assetAssignedName,
  setAssetAssignedName,
  assetAssignedDescription,
  setAssetAssignedDescription,
}) {
  const dispatch=useDispatch();

  const handleGotoNextPage=(e) =>{
    e.preventDefault();
    dispatch(addEmployeeAssetsDetails({ assignedAsset, assetAssignedDate,assetAssignedName, assetAssignedDescription}))
    return setTab("experience");

  }


  return (
    <div>
    <form onSubmit={handleGotoNextPage}  className="divide-y divide-gray-200 font-nunito lg:col-span-9">
     {/* Asset section */}
      <div className="py-6 px-4 sm:p-6 lg:pb-8">
       <label 
        htmlFor="username"
         className="block text-sm font-bold text-gray-700 mb-1">
            Assign Asset(s) Status
            <span className="text-red-700 ml-1">*</span> </label>
            <div className={`${assignedAsset === "Yes" && 'mb-4'} flex gap-5 `}>
                <div>
                  <input 
                  type="radio" 
                  name="assignedAsset" 
                  value="Yes" 
                  required
                  checked={assignedAsset==="Yes"}
                  onChange={(e)=>setAssignedAsset(e.target.value)}
                  className={`mr-1.5`}
                  /> 
                  <label>Yes</label>
                </div>
                <div>
                  <input 
                  type="radio"
                    name="assignedAsset" 
                    value="No"
                    required 
                    checked={assignedAsset==="No"}
                    onChange={(e)=>setAssignedAsset(e.target.value)}
                    className={`mr-1.5`}
                    />
                    <label>No</label>
                </div>
            </div>

             {assignedAsset === "Yes" && 
             <>
              <div className='grid grid-cols-12 gap-6'>
              <div className="col-span-12 sm:col-span-6 ">
                      <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Asset(s) Name
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <input
                      type={"text"}
                      required
                      placeholder={"Eg. laptop"}
                      autoComplete="family-name"
                      value={assetAssignedName}
                      onChange={(e) =>setAssetAssignedName(e.target.value)}
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
                </div>
               
              <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="username"
                className="block text-sm font-bold text-gray-700"
              >
                Date Asset was Assigned 
                <span className="text-red-700 ml-1">*</span>
              </label>
              <div className="mt-1 rounded-md shadow-sm flex">
                <DatePicker
                 getPopupContainer={(triggerNode) => {
                    return triggerNode.parentNode;
                  }}
                  required
                  className={
                    "w-full bg-gray-100  border-1 h-10 mt-1 focus:border-white focus:ring-white hover:outline-none hover:border-white hover:ring-0 font-light"
                  }
                  // format="Do, MMMM yyyy"
                  value={assetAssignedDate}
                  onChange={(data) => {
                      setAssetAssignedDate(data);
                    }}
                />
              </div>
              </div>
            </div>
              <div className="mt-4 col-span-12 sm:col-span-6 ">
                      <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Description
              
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <textarea
                      type={"text"}
                      autoComplete="family-name"
                      value={assetAssignedDescription}
                      onChange={(e) =>setAssetAssignedDescription(e.target.value)}
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
                </div>
                </>
                }

      </div>

     <div className="pt-6 divide-y divide-gray-200">
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              onClick={() => setTab("educational")}
              type="button"
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Back
            </button>
            <button
              type="submit"
              className="ml-5 bg-sky-500 hover:bg-sky-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gold-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
            Next
            </button>
          </div>
        </div>
    </form>
    </div>
  )
}

export default Assets
