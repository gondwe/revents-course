import { INCR,DECR } from './constants'

export const iCounter = () => {
    return {
        type:INCR
    }
}

export const dCounter = () => {
    return {
        type:DECR
    }
}