import { CREATE, DELETE, UPDATE } from './eventConstants'

export const createEvent = (event) => {
    return {
        'type':CREATE,
        payload:{ event }
    }
}


export const updateEvent = (event) => {
    return {
        'type':UPDATE,
        payload:{ event }
    }
}


export const deleteEvent = (eventId) => {
    return {
        'type':DELETE,
        payload:{ eventId }
    }
}

