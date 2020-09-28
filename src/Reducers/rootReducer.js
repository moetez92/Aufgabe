import {combineReducers,} from "redux" ;
import errorreducer from "./errorReducer"
import apiReducer from "./apiReducer"
import loadReducer from "./loadingReducer"

export default combineReducers({

    error: errorreducer,
    img : apiReducer,
    load: loadReducer
}) ;
