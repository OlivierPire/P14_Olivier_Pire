import { configureStore } from "@reduxjs/toolkit";
import addEmployeesReducer from "../features/addEmployeesSlice.js";

export default configureStore({
    reducer: {
        addEmployees: addEmployeesReducer,
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});