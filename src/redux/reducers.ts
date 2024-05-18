import { combineReducers } from "redux";
import PlayerReducers from "./modules/player/reducer"
import LocalStatesReducer from "./modules/localState/reducer"
// const rootReducers = combineReducers({
//     player: PlayerReducers,
//     localState: LocalStatesReducer
// })

const rootReducers = {
    player: PlayerReducers,
    localState:LocalStatesReducer
}

export default rootReducers