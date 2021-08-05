import { SetApartmentsListData } from './types'

const InitialState = {
    listApartments: []
}

export default function apartmentReducer(state = InitialState, action) {
    switch (action.type) {
        case SetApartmentsListData: {
            return {
                ...state,
                listApartments: action.payload,
            };
        }
        default:
            return state;
    }
}
