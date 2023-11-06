import React, { Fragment } from "react";

// personal, education, emergency , card ,experience, license , avaiabliity

const StepsComponent = ({ tab }) => {
  console.log(tab);
  return (
    <Fragment>
      <nav>
        <ul className="overflow-hidden font-nunito">
          <li className="relative pb-10">
            {/*Complete Step*/}
            <div
              className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
                tab === "experience" ||
                tab === "asset" ||
                tab === "card" ||
                tab === "educational" ||
                tab === "availability"
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            />

            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9  flex items-center">
                {tab === "personal" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-green-500-1 rounded-full">
                    <span className="h-2.5 w-2.5 bg-green-700 rounded-full" />
                  </span>
                ) : (
                  <Fragment>
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-green-500 rounded-full group-hover:bg-gold-2 group-focus:bg-gold-2 transition ease-in-out duration-150">
                      <svg
                        className="w-5 h-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Fragment>
                )}
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs leading-4 font-medium ${
                    tab === "experience" ||
                    tab === "personal" ||
                    tab === "educational" ||
                    tab === "asset" ||
                    tab === "card" ||
                    tab === "availability"
                      ? "text-gray-600"
                      : "text-gold-1"
                  } uppercase tracking-wide`}
                >
                  Personal Information
                </h3>
                <p className="text-sm  font-light leading-5 text-gray-500">
                  Provide information concerning employee.
                </p>
              </div>
            </div>
          </li>

          <li className="relative pb-10">
            {/* educational Step */}
            <div
              className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
                tab === "experience" ||
                tab === "emergency" ||
                tab === "asset" ||
                tab === "availability"
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            />
            <div className="relative flex items-start space-x-4 group focus:outline-none">
                 {/* educational Step */}
              <div className="h-9 flex items-center">
                {tab === "personal"  ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                ) : (
                  <Fragment>
                    {tab === "educational" ? (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-green-500 rounded-full">
                        <span className="h-2.5 w-2.5 bg-green-500 rounded-full"></span>
                      </span>
                    ) : (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-green-500 rounded-full group-hover:bg-green-500 group-focus:bg-green-500 transition ease-in-out duration-150">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </Fragment>
                )}
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs leading-4 font-medium uppercase tracking-wide ${
                    tab === "educational"
                      ? "text-gray-600"
                      : tab === "education"
                      ? "text-gold-1"
                      : "text-gray-500"
                  } `}
                >
                 Educational Information
                </h3>
                <p className="text-sm leading-5 font-light text-gray-500">
                  Provide information about employee's education
                </p>
              </div>
            </div>
          </li>

          <li className="relative pb-10">
            {/* asset Step */}
            <div
              className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
                tab === "emergency" ||
                tab === "experience" ||
                tab === "availability"
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            />
            <div className="relative flex items-start space-x-4 group focus:outline-none">
                 {/* asset Step */}
              <div className="h-9 flex items-center">
                {tab === "personal" || tab === "educational" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                ) : (
                  <Fragment>
                    {tab === "asset" ? (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-green-500 rounded-full">
                        <span className="h-2.5 w-2.5 bg-green-500 rounded-full"></span>
                      </span>
                    ) : (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-green-500 rounded-full group-hover:bg-green-500 group-focus:bg-green-500 transition ease-in-out duration-150">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    ) 
                    
                    }
                  </Fragment>
                )}
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs leading-4 font-medium uppercase tracking-wide ${
                    tab === "asset"
                      ? "text-gray-600"
                      : tab === "education"
                      ? "text-gold-1"
                      : "text-gray-500"
                  } `}
                >
                 Asset Information
                </h3>
                <p className="text-sm leading-5 font-light text-gray-500">
                  Provide information about assets given to employee
                </p>
              </div>
            </div>
          </li>
          
          
          <li className="relative pb-10">
            {/* work Step */}
            <div className="relative flex items-start space-x-4 group focus:outline-none">
              <div className="h-9 flex items-center">
                {tab === "personal" ? (
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                ) : (
                  <Fragment>
                    {tab === "educational" || tab === "asset" ? (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 group-focus:bg-gray-300 transition ease-in-out duration-150"></span>
                  </span>
                    ) : (
                      <>
                       {tab === "experience" ? (
                       <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-green-500 rounded-full">
                        <span className="h-2.5 w-2.5 bg-green-500 rounded-full"></span>
                      </span>
                      ):
                      (
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-green-500 rounded-full group-hover:bg-green-500 group-focus:bg-green-500 transition ease-in-out duration-150">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      )}
                      </>)}
                  </Fragment>
                )}
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs leading-4 font-medium uppercase tracking-wide ${
                    tab === "personal"
                      ? "text-gray-600"
                      : tab === "education"
                      ? "text-gold-1"
                      : "text-gray-500"
                  } `}
                >
                  Work Experience Information
                </h3>
                <p className="text-sm leading-5 font-light text-gray-500">
                  Provide employee's work experience
                </p>
              </div>
            </div>
          </li>  
        </ul>
      </nav>
    </Fragment>
  );
};

export default StepsComponent;
