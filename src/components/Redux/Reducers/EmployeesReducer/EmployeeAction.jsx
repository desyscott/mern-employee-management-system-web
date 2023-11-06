import employeeTypes from "./EmployeeTypes"



export const addEmployeePersonalDetails=(personalDetails)=>(dispatch,getState)=>{
    try{
        dispatch({
       type:employeeTypes.ADD_EMPLOYEE_PERSONAL_DETAILS,
       payLoad: personalDetails
       });
       //adding the employeeState to local storage
   localStorage.setItem("employeePersonalDetails",JSON.stringify(getState().employeeData.employeePersonalDetails));
    }catch(error){
      console.log(error)  
    }  
}


export const addEmployeeEducationalDetails=(educationalDetails)=>(dispatch,getState)=>{
    try{
        dispatch({
       type:employeeTypes.ADD_EMPLOYEE_EDUCATIONAL_DETAILS,
       payLoad: educationalDetails
       
       });  
    //adding the employeeState to local storage
   localStorage.setItem("employeeEducationalDetails",JSON.stringify(getState().employeeData.employeeEducationalDetails)); 
    }catch(error){
      console.log(error)  
    }
}

export const addEmployeeAssetsDetails=(assetsDetails)=>(dispatch,getState)=>{
    try{

        dispatch({
       type:employeeTypes.ADD_EMPLOYEE_ASSETS_DETAILS,
       payLoad: assetsDetails
       
       }); 
       //adding the employeeState to local storage
   localStorage.setItem("employeeAssetsDetails",JSON.stringify(getState().employeeData.employeeAssetsDetails));
    }catch(error){
      console.log(error)  
    }
}

export const addEmployeeWorkExpDetails=(workExpDetails)=>(dispatch,getState)=>{
    try{
        dispatch({
       type:employeeTypes.ADD_EMPLOYEE_WORK_EXPERIENCE,
       payLoad: workExpDetails
       
       }); 
    //adding the employeeState to local storage
   localStorage.setItem("employeeWorkExperience",JSON.stringify(getState().employeeData. employeeWorkExperience));
        
    }catch(error){
      console.log(error)  
    }
    
}