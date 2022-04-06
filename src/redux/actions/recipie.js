import { getApi } from "../../utils/userApi"
import store from "../store"
const FETCH_RECIPIE_SUCCESS = 'FETCH_RECIPIE_SUCCESS'
const FETCH_RECIPIE_FAILURE = 'FETCH_RECIPIE_FAILURE'
const FETCH_RECIPIE_REQURET = 'FETCH_RECIPIE_REQUEST'


export const  fetchRecipies = async() =>{
    store.dispatch({
        type: FETCH_RECIPIE_REQURET
    })
    const {data,error} = await getApi(`/admin/recipie`)
    if(error){
        console.log(error)
    }
    if(data){
        store.dispatch({
            type: 'FETCH_RECIPIE_SUCCESS',
            recipies: data.recipies
        })
    }
}