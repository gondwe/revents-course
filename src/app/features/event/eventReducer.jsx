import { createReducer } from "../../common/util/reducerUtil";
import { CREATE, DELETE, UPDATE } from "./eventConstants";


const initialState = [
    {
        id: '1',
        title: 'Trip to Tower of London',
        date: '2018-03-27',
        category: 'culture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: "Tower of London, St Katharine's & Wapping, London",
        hostedBy: 'Bob',
        hostPhotoURL: 'assets/user.png',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'assets/user.png'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'assets/user.png'
            }
        ]
    },
    {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-28',
        category: 'drinks',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'assets/user.png',
        attendees: [
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'assets/user.png'
            },
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'assets/user.png'
            }
        ]
    }
]


export const createEvent = (state, payload) => {
    return [...state, Object.assign({}, payload.event)]
}

export const updateEvent = (state, payload) => {
    return [
        ...state.filter(event => event.id !== payload.event.id),
        Object.assign({}, payload.event)
    ]
}

export const deleteEvent = (state, payload) => {
    return [...state.filter(event => event.id !== payload.eventId)]
}

export default createReducer(initialState, {
    [CREATE]:createEvent,
    [DELETE]:deleteEvent,
    [UPDATE]:updateEvent
})