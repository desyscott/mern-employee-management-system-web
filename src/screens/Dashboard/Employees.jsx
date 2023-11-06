import {Fragment,Suspense,useState,lazy} from 'react'
import Button from "../../components/Button"


import { TopBarLoader } from "../../components/Loaders";
import { BasicModal } from "../../components/modals";
import StepComponent from "../../components/steps";
import { employeesData } from '../../components/EmployeesData/EmployeesData';
import AddIcon from '@mui/icons-material/Add';

const PersonalComponent = lazy(() => import("./personal"));
const EducationalComponent = lazy(() => import("./educational"));
const ExperienceComponent = lazy(() => import("./experience"));
const AssetsComponent= lazy(() => import("./Assets"));


function Employees() {
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [tab, setTab] = useState("personal");

//personal
  const [currentAddress, setCurrentAddress] = useState("");
  const [title, setTitle] = useState("");
  const [gender, setGender] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [driverImageUrl, setDriverImageUrl] = useState("");
  const [driverFile, setDriversFile] = useState();
  const [telephone, setTelephone] = useState("");
  const [role, setRole] = useState("");

//education
  const [tertiaryInstitution, setTertiaryInstitution] = useState("");
  const [secondaryInstitution, setSecondaryInstitution] = useState("");
  const [attendedStartDate, setAttendedStartDate] = useState({
    month:"",
    year:""
  });
  const [attendedEndDate, setAttendedEndDate] = useState({
    month :"",
    year:""
  });
  const [addMore,setAddMore]=useState(false)

  //Asset
  const [assignedAsset,setAssignedAsset]= useState("")
  const [assetAssignedDate,setAssetAssignedDate]=useState()
  const [assetAssignedName,setAssetAssignedName]=useState("")
  const [assetAssignedDescription,setAssetAssignedDescription]=useState("")
  
  //Work Experience
  const [companyName,setCompanyName]=useState("")
  const [jobTitle,setJobTitle]=useState("")
  const [employmentDateFrom,setEmploymentDateFrom]=useState("")
  const [employmentDateTo,setEmploymentDateTo]=useState("")
  const [jobDescription,setJobDescription]=useState("")

 



  const handleImageUpload = (e) => {
    if (e.target.files[0] !== undefined) {
      setDriverImageUrl(URL.createObjectURL(e.target.files[0]));
      setDriversFile(e.target.files[0]);
    }
  };


  return (
    <Fragment style={{ height: "100%" }}>
    {/* <Link to="/" className="text-3xl font-bold ">Dashboard</Link> */}
    <BasicModal  size={76} show={showAddEmployeeModal}>
    <>
    <div
            className={
              "w-full border-b border-gray-200 flex flex-row justify-between px-5 pt-5 pb-3 items-center"
            }
          >
            <div>
              <img
                src=""
                alt={"logo"}
                className={"h-10 w-10 rounded-full"}
              />
            </div>

            <div className={"flex  flex-col w-full items-center -ml-10"}>
              <div className={"relative"}>
                <div className={"flex items-center"}>
                  <h1
                    className={"text-3xl font-bold font-nunito text-green-800"}
                  >
                    Add Employee 
                  </h1>
                </div>
              </div>

              <div>{/* <span className={"text-xs"}>{data?.code}</span> */}</div>
            </div>
            <div />
          </div>
          <div
            style={{ height: "77vh" }}
            className={"p-5 overflow-y-auto scrollContainer"}
          >
            <div className=" bg-white ">
              <div className=" grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-5">
                <div className="sm:col-span-2 ">
                  <div className={" top-10 sticky overflow-y-none"}>
                    <StepComponent tab={tab} />
                  </div>
                </div>
                <Suspense fallback={TopBarLoader()}>
                  <div className="sm:col-span-3 ml-10 ">
                    {tab === "personal" && (
                      <Fragment>
                        <PersonalComponent
                          setTab={setTab}
                          gender={gender}
                          currentAddress={currentAddress}
                          setCurrentAddress={setCurrentAddress}
                          setGender={setGender}
                          firstName={firstName}
                          setFirstName={setFirstName}
                          lastName={lastName}
                          setLastName={setLastName}
                          otherNames={otherNames}
                          setOtherNames={setOtherNames}
                          role={role}
                          setRole={setRole}
                          email={email}
                          setEmail={setEmail}
                          title={title}
                          setTitle={setTitle}
                          region={region}
                          setRegion={setRegion}
                          city={city}
                          setCity={setCity}
                          age={age}
                          setAge={setAge}
                          telephone={telephone}
                          setTelephone={setTelephone}
                          driverImageUrl={driverImageUrl}
                          handleImageUpload={handleImageUpload}
                        />
                      </Fragment>
                    )}
                    {tab === "educational" && (
                      <Fragment>
                        <EducationalComponent
                          setTab={setTab}
                          tertiaryInstitution={tertiaryInstitution}
                          setTertiaryInstitution={setTertiaryInstitution}
                          secondaryInstitution={secondaryInstitution}
                          setSecondaryInstitution={setSecondaryInstitution}
                          attendedStartDate
                          // handleChangeAttendedStartDate={handleChangeAttendedStartDate}
                          setAttendedStartDate={setAttendedStartDate}
                          attendedEndDate={attendedEndDate}
                          setAttendedEndDate={setAttendedEndDate}
                          addMore={addMore}
                          setAddMore={setAddMore}
                        
                        />
                      </Fragment>
                    )}
                    {tab === "asset" && (
                      <Fragment>
                        <AssetsComponent
                         assignedAsset={assignedAsset}
                         setAssignedAsset={setAssignedAsset}
                         assetAssignedDate={assetAssignedDate}
                         setAssetAssignedDate={setAssetAssignedDate}
                         assetAssignedName={assetAssignedName}
                         setAssetAssignedName={setAssetAssignedName}
                         assetAssignedDescription={assetAssignedDescription}
                         setAssetAssignedDescription={setAssetAssignedDescription}
                          setTab={setTab}
                        />
                      </Fragment>
                    )}
                    {tab === "experience" && (
                      <Fragment>
                        <ExperienceComponent
                          setTab={setTab}
                          companyName={companyName}
                          setCompanyName={setCompanyName}
                          jobTitle={jobTitle}
                          setJobTitle={setJobTitle}
                          employmentDateFrom={employmentDateFrom}
                          setEmploymentDateFrom={setEmploymentDateFrom}
                          employmentDateTo={employmentDateTo}
                          setEmploymentDateTo={setEmploymentDateTo}
                          jobDescription={jobDescription}
                          setJobDescription={setJobDescription}
                        />
                      </Fragment>
                    )}
                  </div>
                </Suspense>
              </div>
            </div>
          </div>
    {/* <form  className="divide-y font-nunito divide-gray-200 lg:col-span-9">
      <div className="py-6 flex flex-col gap-y-4 px-4 sm:p-6 lg:pb-8">
       <div className="col-span-12 sm:col-span-6 ">
          <label htmlFor="username"
                className="block text-sm font-bold text-gray-700"
                  >
                    First Name
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1 rounded-md shadow-sm flex">
                    <input
                      type={"text"}
                      required
                      placeholder={"Eg. Desmond"}
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
                    Last Name
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1 rounded-md shadow-sm flex">
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
                    Other Names
                  </label>
                  <div className="mt-1 rounded-md shadow-sm flex">
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
          <div className="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Email
                    <span className="text-red-700 ml-1">*</span>
                  </label>
                  <div className="mt-1 rounded-md shadow-sm flex">
                    <input
                      type={"text"}
                      value={email}
                      placeholder={"Eg. mrfallback123@gmail.com"}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="family-name"
                      className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
           </div>
      </div>
    </form>    */}
        <div className="grid grid-cols-1 border-t cursor-pointer p-1 bg-gray-50">
            <Button
                onClick={() => {
              setShowAddEmployeeModal(false);
            }}
              title="Close"
            />
          </div>
        </>
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

export default Employees
