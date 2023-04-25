import {INCREMENT,DECREMENT} from './../Types';




let initialState = {
    likes:0
}

export const LikeReduser = (state=initialState,action) =>{
switch (action.type) {
    case INCREMENT:
        //?
        return{
            ...state,
            likes:state.likes+1
        }
        case DECREMENT:{
            return{
                ...state,
                likes:state.likes===0?0:state.likes-1,
               
                               
            }
        }

    default:
        return state
}
} 