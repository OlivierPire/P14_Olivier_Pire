import { configureStore } from "@reduxjs/toolkit";
import FormErrorsReducer from "../features/FormErrorsSlice";

export default configureStore({
    reducer: {
        formErrors: FormErrorsReducer,
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});