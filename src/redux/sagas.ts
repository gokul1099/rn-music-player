import { all } from "redux-saga/effects"
import PlayerSaga from "./modules/player/sagas"
function *rootSaga(){
yield all([PlayerSaga()])
}

export default rootSaga