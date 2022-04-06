const ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'
import store from '../store'
import axios from 'axios'
/**
 * 
 * @param {Object} user Authenticated User 
 * @param { Object } token Authenticated Token
 */
export function authenticateUser({user,token}){
    axios.defaults.headers.common['authorization'] = token;
    if(user && token){
        store.dispatch({
            type:ADD_USER,
            user,
            authenticated_as:'user',
            token:token
        }) 
    }
}

export function removeUser(){
    axios.defaults.headers.common['authorization'] = null;
    store.dispatch({
        type: REMOVE_USER,  
    })
}