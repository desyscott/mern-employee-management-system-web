import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

import rootReducer from '../rootReducer'

export const middlewares = [thunk,logger]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//we get the requestItem from the localStorage and convert it to an array containing the items
const  initialState={
    employeeData:{
        employeePersonalDetails:localStorage.getItem("employeePersonalDetails")
        ? JSON.parse(localStorage.getItem("employeePersonalDetails"))
        : null,
        employeeEducationalDetails:localStorage.getItem("employeeEducationalDetails")
        ? JSON.parse(localStorage.getItem("employeeEducationalDetails"))
        : null,
        employeeWorkExperience:localStorage.getItem("employeeWorkExperience")
        ? JSON.parse(localStorage.getItem("employeeWorkExperience"))
        : null,
    }, 
}
const store= createStore(rootReducer,
                        initialState,
                         composeEnhancer(applyMiddleware(...middlewares)))

export {store}