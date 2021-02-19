import {SET_LOGIN} from '../Actions/ActionType'


const initialState={
    IsLoggedIn:false
}


const MainReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case SET_LOGIN:
            console.log("13",action.data)
            return{
                ...state,
                IsLoggedIn:action.data
            }
        
        default:
            return state    
    }
}

export default MainReducer;

