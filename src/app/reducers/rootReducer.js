import { combineReducers } from "redux";
import testReducer from "../features/tests/testReducer";

const rootReducer = combineReducers({
    test:testReducer
})

export default rootReducer