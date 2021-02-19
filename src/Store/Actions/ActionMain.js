import {SET_LOGIN} from './ActionType'

export const setLogin=(LoginResponse)=>{
    return{
        type:SET_LOGIN,
        data:LoginResponse
    }
}
