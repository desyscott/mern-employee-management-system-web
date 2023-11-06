import React,{Fragment, useState} from 'react'
import { DatePicker, message } from "antd";
import {useSelector,useDispatch} from "react-redux"
import {addEmployeeEducationalDetails} from "../../components/Redux/Reducers/EmployeesReducer/EmployeeAction"


function Education({
  setTab,
  tertiaryInstitution,
  setTertiaryInstitution,
  secondaryInstitution,
  setSecondaryInstitution,
  addMore,
  setAddMore,
  attendedStartDate,
  // handleChangeAttendedStartDate,
  setAttendedStartDate,
  attendedEndDate,
  setAttendedEndDate,
}) {
  const dispatch=useDispatch();
    

  const handleGotoNextPage = (e) => {
    e.preventDefault();
    if (!tertiaryInstitution ) {
      return message.warning("Please select a tertiary institution");
    }
    // if (!attendedStartDate.month) {
    //   return message.warning("Please select a attended start Date");
    // }
    // if (!attendedStartDate.year) {
    //   return message.warning("Please select a attended start Date");
    // }
    dispatch(addEmployeeEducationalDetails({tertiaryInstitution,attendedStartDate}))
    return setTab("asset");
  };


  const handleChangeAttendedStartDate = (e) => {
    const {name,value}=e.target
    setAttendedStartDate({
      ...attendedStartDate,
      [name]:value,
    });
  };

  return (
    <div>
      {/* <h1>education</h1> */}
      <form  onSubmit={handleGotoNextPage}  className="divide-y divide-gray-200 font-nunito lg:col-span-9">
             {/* Educational information */}
             <div style={{ height: "42.7vh" }} className="py-6 px-4 sm:p-6 lg:pb-8 p-5 overflow-y-auto  scrollContainer">
             <div className="col-span-12 sm:col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Tertiary Institution
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <input
                      type={"text"}
                      required
                      placeholder={"Eg. University of Ghana"}
                      value={tertiaryInstitution}
                      onChange={(e) => setTertiaryInstitution(e.target.value)}
                      autoComplete="family-name"
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
              </div>
            <div className={`grid grid-cols-2 gap-6 ${addMore && "mb-8"}`}>
            <div className={"col-span-2"}>
              <div className="mt-6 grid grid-cols-12 gap-6 ">
                <div className="col-span-12 sm:col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                   Attended Start Date
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <select
                      // required={true}
                      value={attendedStartDate.month}
                      onChange={handleChangeAttendedStartDate}
                      autoComplete="family-name"
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    >
                      <option value={""}>Month</option>
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                    </select>

                    <select
                      // required={true}
                      value={attendedStartDate.year}
                      onChange={handleChangeAttendedStartDate}
                      autoComplete="family-name"
                      className="mt-1 block w-full ml-2 border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm overflow-y-auto  scrollContainer"
                    >
                      <option value={""}>Year</option>
                      <option value="2000">2000</option>
                      <option value="2001">2001</option>
                      <option value="2002">2002</option>
                      <option value="2003">2003</option>
                      <option value="2004">2004</option>
                      <option value="2005">2005</option>
                      <option value="2006">2006</option>
                      <option value="2007">2007</option>
                      <option value="2008">2008</option>
                    </select>
                  </div>
                </div>
                {/* <div className="ml-5 col-span-12 sm:col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                   Attended End Date
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <select
                      // required={true}
                      // value={title}
                      // onChange={(e) => setTitle(e.target.value)}
                      autoComplete="family-name"
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    >
                      <option value={""}>Month</option>
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>  
                    </select>

                    <select
                      // required={true}
                      // value={title}
                      // onChange={(e) => setTitle(e.target.value)}
                      autoComplete="family-name"
                      className="mt-1 block w-full ml-2 border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    >
                      <option value={""}>Year</option>
                      <option value="1990">1990</option>
                      <option value="1991">1991</option>
                      <option value="1992">1992</option>
                      <option value="1993">1993</option>
                      <option value="1994">1994</option>
                      <option value="1995">1995</option>
                      <option value="1996">1996</option>
                      <option value="1997">1997</option>
                      <option value="1998">1998</option>
                    </select>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
             { addMore && 
             <>
             <div className="col-span-12 sm:col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Secondary Institution
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <input
                      type={"text"}
                      required
                      placeholder={"Eg. Aburi Girls"}
                      value={secondaryInstitution}
                      onChange={(e) => setSecondaryInstitution(e.target.value)}
                      autoComplete="family-name"
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
                </div>
            <div className="grid grid-cols-2 gap-6 ">
            <div className={"col-span-2"}>
              <div className="mt-6 grid grid-cols-12 gap-6 ">
                <div className="col-span-12 sm:col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                   Attended End Date
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <select
                      // required={true}
                      // value={title}
                      // onChange={(e) => setTitle(e.target.value)}
                      autoComplete="family-name"
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    >
                      <option value={""}>Please Choose</option>
                      <option value="MR">Mr</option>
                      <option value="MRS">Mrs</option>
                      <option value="MISS">Miss</option>
                      <option value="DR">Dr</option>
                      <option value="PROF">Prof</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
          }
             
          {!addMore && <div className="mt-1 py-4 px-4 flex justify-end sm:px-6">
            <button
              type="button"
               onClick={()=>setAddMore(true)}
              className=" bg-sky-500 hover:bg-sky-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gold-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
            Add More
            </button>
          </div>}
           </div>
      <div className="pt-6 divide-y divide-gray-200">
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              onClick={() => setTab("personal")}
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

export default Education
