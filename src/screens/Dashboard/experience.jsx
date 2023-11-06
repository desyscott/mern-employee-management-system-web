import React,{Fragment} from 'react'
import { DatePicker, message } from "antd";

function experience({
  setTab,
  companyName,
  setCompanyName,
  jobTitle,
  setJobTitle,
  employmentDateFrom,
  setEmploymentDateFrom,
  employmentDateTo,
  setEmploymentDateTo,
  jobDescription,
  setJobDescription,
}) {
  return (
    <div>
    <form className="divide-y divide-gray-200 font-nunito lg:col-span-9">
     {/* Work Experience section */}
      <div className="py-6 px-4 sm:p-6 lg:pb-8"> 
      <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="username"
                className="block text-sm font-bold text-gray-700"
              >
                Company Name
                <span className="text-red-700 ml-1">*</span>
              </label>
              <div className=" rounded-md shadow-sm flex">
                <input
                  type="email"
                  // placeholder={"Eg. jonas@gmail.com"}
                  required={true}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  autoComplete="email"
                  className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-bold text-gray-700"
              >
               Job Title
                <span className="text-red-700 ml-1">*</span>
              </label>
              <input
                type="text"
                name="url"
                id="url"
                required
                // placeholder={"Eg. Accra"}
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="mt-1.5 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="username"
                className="block text-sm font-bold text-gray-700"
              >
                Employment Dates 
                <span className="text-red-700 ml-1">*</span>
              </label>
              <label
                htmlFor="username"
                className="block mt-1 text-sm font-bold text-gray-700"
              >
                From
              </label>
              <div className="mt-0.5 rounded-md shadow-sm flex">
                <DatePicker
                 getPopupContainer={(triggerNode) => {
                    return triggerNode.parentNode;
                  }}
                  required
                  className={
                    "w-full bg-gray-100  border-1 h-10 mt-1 focus:border-white focus:ring-white hover:outline-none hover:border-white hover:ring-0 font-light"
                  }
                  // format="Do, MMMM yyyy"
                  value={ employmentDateFrom}
                  onChange={(data) => {
                      setEmploymentDateFrom(data);
                    }}
                />
              </div>
              </div>
            <div className="mt-5 col-span-12 sm:col-span-6">
              <label
                htmlFor="username"
                className="block mt-1 text-sm font-bold text-gray-700"
              >
                To 
              </label>
              <div className="mt-0.5 0rounded-md shadow-sm flex">
                <DatePicker
                 getPopupContainer={(triggerNode) => {
                    return triggerNode.parentNode;
                  }}
                  required
                  className={
                    "w-full bg-gray-100  border-1 h-10 mt-1 focus:border-white focus:ring-white hover:outline-none hover:border-white hover:ring-0 font-light"
                  }
                  // format="Do, MMMM yyyy"
                  value={employmentDateTo}
                  onChange={(data) => {
                      setEmploymentDateTo(data);
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
                    Job Description
              
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <textarea
                      type={"text"}
                      autoComplete="family-name"
                      value={jobDescription}
                      onChange={(e) =>setJobDescription(e.target.value)}
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
                </div>

      </div>
     <div className="pt-6 divide-y divide-gray-200">
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              onClick={() => setTab("asset")}
              type="button"
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Back
            </button>
            <button
              // type="submit"
              className="ml-5 bg-green-500 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gold-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              <div>
                {" "}
               
                  <Fragment>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </Fragment>
              </div>
            </button>
          </div>
        </div>
    </form>
    </div>
  )
}

export default experience
