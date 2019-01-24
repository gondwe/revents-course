import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form'
import testReducer from "../features/tests/testReducer";
import eventReducer from "../features/event/eventReducer";

const rootReducer = combineReducers({
    test:testReducer,
    form:FormReducer,
    events:eventReducer
})

export default rootReducer