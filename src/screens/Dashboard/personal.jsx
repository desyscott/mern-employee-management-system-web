import React, { Fragment, useState, useCallback, useEffect } from "react";
//   import ProfileImage from "../../../../assets/images/male.jpeg";
import Button from "../../components/Button";
import { differenceInCalendarYears } from "date-fns";
import moment from "moment"; 
import { DatePicker, message } from "antd";
import {useDispatch} from "react-redux"

//import { CameraIcon } from "@heroicons/react/outline";

import { useNumberValidator } from "../../components/hooks";
import {addEmployeePersonalDetails} from "../../components/Redux/Reducers/EmployeesReducer/EmployeeAction"


const PersonalComponent = ({
  setTab,
  handleImageUpload,
  currentAddress,
  gender,
  setGender,
  setCurrentAddress,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  otherNames,
  setOtherNames,
  dob,
  role,
  setRole,
  setDob,
  email,
  setEmail,
  title,
  setTitle,
  region,
  setRegion,
  city,
  setCity,
  age,
  setAge,
  telephone,
  setTelephone,
  driverImageUrl

}) => {
  const dispatch=useDispatch();
//const cerRef = useRef();

const [isDriverBelowAge, setIsDriverBelowAge] = useState(false);
const [error, setError] = React.useState(false);
const disabledDate = (current) => {
  // Can not select yesterday and before
  const start = moment()?.subtract(18, "years");
  return current > start;
};
// const disableFuture = (current) => {
//   // Can not select yesterday and before
//   const start = moment()?.subtract(0, "years");
//   return current > start;
// };
useNumberValidator(telephone, setTelephone, (val) => {
  setError(val);
});

const checkUsersAge = useCallback(
  (dob) => {
    let currentDate = new Date();
    let userDate = new Date(dob);
    let age = differenceInCalendarYears(currentDate, userDate);
    if (age >= 18) {
      setAge(age.toString());
      return setIsDriverBelowAge(false);
    } else {
      setAge(age.toString());
      return setIsDriverBelowAge(true);
    }
  },
  [setAge]
);

useEffect(() => {
  if (dob) {
    checkUsersAge(dob);
  }
}, [checkUsersAge, dob]);

  const handleGotoNextPage = (e) => {
    e.preventDefault();
    if (!lastName ) {
      return message.warning("Please select a lastName");
    }
    if (!firstName ) {
      return message.warning("Please select a firstName");
    }
    // if (!dob ) {
    //   return message.warning("Please select a dob");
    // }
    if (!telephone ) {
      return message.warning("Please select a telephone");
    }

    if (!title) {
      return message.warning("Please select a title");
    }
    if (error) {
      return message.warning("Please enter a valid phone number");
    }
    if (!driverImageUrl) {
      return message.warning("Please add a profile image");
   
    }
    dispatch(addEmployeePersonalDetails({lastName,firstName,telephone,title,driverImageUrl}))
    return setTab("educational");
   
    
  };

  useEffect(() => {
    // console.log("Component Loaded");
  }, []);

  return (
    <Fragment>
      <form
        onSubmit={handleGotoNextPage}
        className="divide-y font-nunito divide-gray-200 lg:col-span-9"
      >
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="grid grid-cols-3 gap-6 ">
            <div className={"col-span-2"}>
              <div className="mt-6 grid grid-cols-12 gap-6 ">
                <div className="col-span-12 sm:col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Title
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <select
                      // required={true}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
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
                <div className="col-span-12 sm:col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Gender
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <select
                      required={true}
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      autoComplete="family-name"
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    >
                      <option value={""}>Please Choose</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Last Name
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <input
                      type={"text"}
                      required
                      placeholder={"Eg. Ntiamoah"}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      autoComplete="family-name"
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                    First Name
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <input
                      type={"text"}
                      required
                      placeholder={"Eg. Jonas"}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      autoComplete="family-name"
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Other Names
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <input
                      type={"text"}
                      value={otherNames}
                      placeholder={"Eg. Joshua"}
                      onChange={(e) => setOtherNames(e.target.value)}
                      autoComplete="family-name"
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 ">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Role
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1.5 rounded-md shadow-sm flex">
                    <input
                      type={"text"}
                      value={role}
                      // required
                      placeholder={"Eg. web developer"}
                      onChange={(e) => setRole(e.target.value)}
                      autoComplete="off"
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-span-2 sm:col-span-2 lg:col-span-1"}>
              <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                <p
                  className="text-sm font-bold text-gray-700"
                  aria-hidden="true"
                >
                  Photo
                  <span className="text-red-700 ml-1">*</span>
                </p>
                <div className="mt-1 lg:hidden">
                  <div className="flex items-center">
                    <div
                      className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                      aria-hidden="true"
                    >
                      <img
                        className="rounded-full h-full w-full"
                        src={
                          driverImageUrl ||
                          "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="ml-5 rounded-md shadow-sm">
                      <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500">
                        <label
                          htmlFor="user_photo"
                          className="relative text-sm leading-4 font-bold text-gray-700 pointer-events-none"
                        >
                          <span>Add Image</span>
                          <span className="sr-only"> user photo</span>
                        </label>
                        <input
                          id="user_photo"
                          name="user_photo"
                          type="file"
                          accept={"image/*"}
                          onChange={handleImageUpload}
                          className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden relative rounded-full overflow-hidden lg:block">
                  <img
                    className="relative rounded-full w-40 h-40"
                    src={
                      driverImageUrl ||
                      "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                    }
                    alt=""
                  />
                  <label
                    htmlFor="user-photo"
                    className="absolute inset-0 w-full h-full bg-customBlack-1 bg-opacity-75 flex items-center justify-center text-sm font-bold text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                  >
                    <span className="text-green-500">Change</span>
                    <span className="sr-only"> user photo</span>
                    <input
                      type={"file"}
                      //required
                      accept={"image/*"}
                      onChange={handleImageUpload}
                      id="user-photo"
                      name="user-photo"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="username"
                className="block text-sm font-bold text-gray-700"
              >
                Date Of Birth 
                <span className="text-red-700 ml-1">*</span>
              </label>
              <div className="mt-1.5 rounded-md shadow-sm flex">
                <DatePicker
                  // showTime
                  getPopupContainer={(triggerNode) => {
                    return triggerNode.parentNode;
                  }}
                 
                  className={
                    "w-full bg-gray-100  border-0 h-10 mt-1 focus:border-white focus:ring-white hover:outline-none hover:border-white hover:ring-0 font-light"
                  }
                  format="Do, MMMM yyyy"
                  value={dob ? moment(dob) : moment()?.subtract(18, "years")}
                  onChange={dob}
                />
              </div>
              {isDriverBelowAge && (
                <Fragment>
                  <p className="font-bold mt-1 text-xs text-red-600 hover:text-red-700">
                    You must be at least 18 years to sign up
                  </p>
                </Fragment>
              )}
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="username"
                className="block text-sm font-bold text-gray-700"
              >
                Email Address
                <span className="text-red-700 ml-1">*</span>
              </label>
              <div className="mt-1.5 rounded-md shadow-sm flex">
                <input
                  type="email"
                  placeholder={"Eg. jonas@gmail.com"}
                  // required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="about"
                className="block text-sm font-bold text-gray-700"
              >
                Region
                <span className="text-red-700 ml-1">*</span>
              </label>
              <div className="mt-1.5 rounded-md shadow-sm flex">
                <select
                  required={true}
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  autoComplete="family-name"
                  className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                >
                  <option value={""}>Please Choose</option>
                  <option value="Greater Accra">Greater Accra</option>
                  <option value="Ashanti">Ashanti</option>
                  <option value="Eastern">Eastern</option>
                  <option value="Central">Central</option>
                  <option value="Western">Western</option>
                  <option value="Western North">Western North</option>
                  <option value="Ahafo">Ahafo</option>
                  <option value="Bono">Bono</option>
                  <option value="Nothern">Nothern</option>
                  <option value="Oti">Oti</option>
                  <option value="Volta">Volta</option>
                  <option value="North East">North East</option>
                  <option value="Nothern">Nothern</option>
                  <option value="Upper West">Upper West</option>
                  <option value="Upper East">Upper East</option>
                  <option value="Savanna">Savanna</option>
                </select>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-bold text-gray-700"
              >
                City
                <span className="text-red-700 ml-1">*</span>
              </label>
              <input
                type="text"
                name="url"
                id="url"
                required
                placeholder={"Eg. Accra"}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1.5 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
              />
            </div>
                     
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-bold text-gray-700"
              >
              HireDate
                <span className="text-red-700 ml-1">*</span>
              </label>
              <DatePicker
                    // value={value}
                    // onChange={(data) => {
                    //   setCurrentPostionStartDate(data);
                    // }}
                    // value={currentPositionStartDate}
                    className={
                      "border border-none py-2 mt-1 w-full bg-gray-100 focus:border-none"
                    }
                    picker="month"
                  />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm font-bold text-gray-700"
              >
                Telephone (eg. 0542020234)
                <span className="text-red-700 ml-1">*</span>
              </label>
              <input
                name="company"
                id="company"
                required
                type="tel"
                maxLength={10}
                placeholder={"Eg. 0542781934"}
                style={{ borderColor: error ? "red" : " ", outline: "none" }}
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                autoComplete="organization"
                className="mt-1.5 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
              {error ? (
                <p className={`font-normal text-red-500 text-xs`}>
                  Please enter a valid phone number
                </p>
              ) : (
                ""
              )}
            </div>
      
          </div>
        </div>

        {/* Privacy section */}
        <div className="pt-3 divide-y divide-gray-200">
          <div className="mt-2 py-4 px-4 flex justify-end sm:px-6">
            <Button type="submit" fit={false} title="Next" />
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default PersonalComponent;
