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
// const testReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCR:
//             return { ...state,
//                 data: state.data+1
//             }
//         case DECR:
//             return { ...state,
//                 data: state.data-1
//             }

//         default:
//             return state;
//     }
// }

export default createReducer(initialState, {
    [INCR]:iCounter,
    [DECR]:dCounter
})