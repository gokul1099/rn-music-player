import { STORE_CURRENT_TRACK } from './types';
import { REHYDRATE } from 'redux-persist/lib/constants';
import { IAction } from '../../interfaces';
const initialState = {
    currentTrack:{
        trackDetails:null,
    }
}

const reducer = (state=initialState, action:IAction)=>{
    switch(action.type){
        case STORE_CURRENT_TRACK:
            return {
                ...state,
                trackDetails:action.payload
            }
        
        default:
            return state
    }
}


export default reducer