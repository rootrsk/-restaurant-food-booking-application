const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS'
const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE'
const FETCH_CART_REQURET = 'FETCH_CART_REQUEST'
const ADD_RECIPIE = 'ADD_RECIPIE'


const initialState = {
    isLoading:false,
    loadingRecipie:''
}

export default function recipies(state = initialState, action) {
    switch (action.type) {
        case FETCH_CART_SUCCESS:
            return {
                ...action.cart,
                isLoading: false,
                loadingRecipie:''
            }
        case FETCH_CART_REQURET:
            return {
                ...state,
                isLoading:true,
                loadingRecipie:action.loadingRecipie
            }
        case FETCH_CART_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                loadingRecipie:''
            }
        default:
            return state
    }
}