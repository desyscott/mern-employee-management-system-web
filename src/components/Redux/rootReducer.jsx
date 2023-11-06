import {combineReducers} from "redux"
import addEmployeeDetailsReducer from "./Reducers/EmployeesReducer/EmployeeReducer"


const rootReducer = combineReducers({
    employeeData:addEmployeeDetailsReducer
})

export default rootReducer;