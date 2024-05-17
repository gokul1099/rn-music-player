import { combineReducers } from "redux";
import PlayerReducers from "./modules/player/reducer"

export const rootReducers = combineReducers({
    player: PlayerReducers
})

export default rootReducers