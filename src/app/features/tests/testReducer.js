import { INCR,DECR } from './constants'
import { createReducer } from '../../common/util/reducerUtil';


const initialState = {
    data: 41
}

export const iCounter = (state,payload) => {
    return { ...state,data: state.data+1}
}

export const dCounter = (state,payload) => {
    return { ...state,data: state.data-1}
}


export default createReducer(initialState, {
    [INCR]:iCounter,
    [DECR]:dCounter
})