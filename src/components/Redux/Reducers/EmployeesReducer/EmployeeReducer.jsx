import employeeTypes  from "./EmployeeTypes"


const INITIAL_STATE={
    employeePersonalDetails:[],   
    employeeEducationalDetails:[],
    employeeAssetsDetails:[],
    employeeWorkExperience:[] 
}

const addEmployeeDetailsReducer=(state=INITIAL_STATE,action)=>{
    
    switch(action.type){
    case employeeTypes.ADD_EMPLOYEE_PERSONAL_DETAILS: 
     return{
         ...state,
         employeePersonalDetails:action.payLoad
        }
     
    case employeeTypes.ADD_EMPLOYEE_EDUCATIONAL_DETAILS: 
     return{
         ...state,
         employeeEducationalDetails:action.payLoad
        }
        
    case employeeTypes.ADD_EMPLOYEE_ASSETS_DETAILS: 
     return{
         ...state,
         employeeAssetsDetails:action.payLoad
        }
     
    case employeeTypes.ADD_EMPLOYEE_WORK_EXPERIENCE: 
     return{
         ...state,
         employeeWorkExperience:action.payLoad
        }

    default: return state
    }
    
}

export default addEmployeeDetailsReducer;