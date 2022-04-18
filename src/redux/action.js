import *as types from './actionTypes';
import {auth} from '../services/service'


export const registerStart=()=>(
    {
        type:types.REGISTER_START
    }
)

export const registerSuccess=(user)=>(
    {
        type:types.REGISTER_SUCCESS,
        payload:user
    }
)

export const registerError=(error)=>(
    {
        type:types.REGISTER_ERROR,
        payload:error
    }
)

export const logoutStart=()=>(
    {
        type:types.LOGOUT_START,
        
    }
)

export const logoutSuccess=()=>(
    {
        type:types.LOGOUT_SUCCESS,
       
    }
)

export const logoutError=(error)=>(
    {
        type:types.LOGOUT_ERROR,
        payload:error
    }
)

export const registerInitiate=(email,password,displayName)=>{
    return(dispatch)=>{
        dispatch(registerStart());
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(({user})=>{
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch(error=>dispatch(registerError(error)))
    }
}

export const logoutInitiate=()=>{
    return (dispatch)=>{
        dispatch(logoutStart())
        auth
            .signOut()
            .then(()=>dispatch(logoutSuccess()))
            .catch(error=>dispatch(logoutError()))
    }
}