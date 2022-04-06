const FETCH_RECIPIE_SUCCESS = 'FETCH_RECIPIE_SUCCESS'
const FETCH_RECIPIE_FAILURE = 'FETCH_RECIPIE_FAILURE'
const FETCH_RECIPIE_REQURET = 'FETCH_RECIPIE_REQUEST'
const ADD_RECIPIE = 'ADD_RECIPIE'


const initialState = {
    recipies:[],
    isLoading:false
}

export default function recipies(state = initialState, action) {
    switch (action.type) {
        case FETCH_RECIPIE_SUCCESS:
            return {
                recipies:action.recipies,
                isLoading: false
            }
        case ADD_RECIPIE:
            return {
                recipies: [action.recipie,...state.recipies]
            }
        case FETCH_RECIPIE_REQURET:
            return {
                ...state,
                isLoading:true
            }
        case FETCH_RECIPIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}