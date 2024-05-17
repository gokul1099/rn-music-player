import { all } from "redux-saga/effects"
import HomeSaga from "./modules/home/sagas"
function *rootSaga(){
    yield all([])
}

export default rootSaga