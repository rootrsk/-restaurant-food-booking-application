import { getApi, patchApi } from "../../utils/userApi"
import store from "../store"
const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS'
const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE'
const FETCH_CART_REQURET = 'FETCH_CART_REQUEST'

export const  fetchCart = async() =>{
    store.dispatch({
        type: FETCH_CART_REQURET
    })
    const {data,error} = await getApi(`/user/cart`)
    if(error){
        console.log(error)
    }
    if(data){
        store.dispatch({
            type: FETCH_CART_SUCCESS,
            cart: data.cart
        })
    }
}

export const addCart = async(recipie_id) => {
    store.dispatch({
        type: FETCH_CART_REQURET,
        loadingRecipie:recipie_id
    })
    const {data,error} = await patchApi(`/user/cart?operation=add`,{recipie_id})
    if (data) {
        store.dispatch({
            type: FETCH_CART_SUCCESS,
            cart: data.cart
        })
    }
}
export const removeCart = async(recipie_id) => {
    store.dispatch({
        type: FETCH_CART_REQURET,
        loadingRecipie: recipie_id
    })
    const {data,error} = await patchApi(`/user/cart?operation=remove`,{recipie_id})
    if (data) {
        store.dispatch({
            type: FETCH_CART_SUCCESS,
            cart: data.cart
        })
    }
}

export const clearCart = async(recipie_id) => {
    store.dispatch({
        type: FETCH_CART_REQURET,
        loadingRecipie: recipie_id
    })
    const {data,error} = await patchApi(`/user/cart?operation=clear`,{recipie_id})
    if (data) {
        store.dispatch({
            type: FETCH_CART_SUCCESS,
            cart: data.cart
        })
    }
}
export const removeAll = async(recipie_id) => {
    store.dispatch({
        type: FETCH_CART_REQURET,
        loadingRecipie: recipie_id
    })
    const {data,error} = await patchApi(`/user/cart?operation=removeAll`,{recipie_id})
    if (data) {
        store.dispatch({
            type: FETCH_CART_SUCCESS,
            cart: data.cart
        })
    }
}