import { SetActiveCompany, SetCompaniesListData } from './types'

const InitialState = {
    listCompanies: [],
    activeCompany: null,
}

export default function companiesReducer(state = InitialState, action) {
    switch (action.type) {
        case SetCompaniesListData: {
            return {
                ...state,
                listCompanies: action.payload,
            };
        }
        case SetActiveCompany : {
            return {
                ...state,
                activeCompany: action.payload,
            };
        }
        default:
            return state;
    }
}
