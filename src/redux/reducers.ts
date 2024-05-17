import { combineReducers } from "redux";
import HomeReducers from "./modules/home/reducer"

export const rootReducers = combineReducers({
    home: HomeReducers
})

export default rootReducers