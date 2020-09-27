import {combineReducers,} from "redux" ;
import errorreducer from "./errorReducer"

export default combineReducers({

    error: errorreducer
}) ;
