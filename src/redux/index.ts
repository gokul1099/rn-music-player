import createSagaMiddleWare from "redux-saga"
import {createStore, applyMiddleware} from 'redux'
import { persistReducer, persistStore } from "redux-persist"
import rootReducers from "./reducers"
import rootSaga from "./sagas"
const sagaMiddleWare = createSagaMiddleWare()
// const persistConfig = {
//     key: "root",
//     // storage: AsyncStorage,
//     whitelist:[]
// }


const middleware = [sagaMiddleWare]

const configureStore = (initialState)=>{
    // const persistedReducer = persistReducer(persistConfig,reducers)
    const store = createStore(persistedReducer, initialState)
    const persistedStore = persistStore(store)
    sagaMiddleWare.run(rootSaga)
    return {store,persistedStore}
}


export const {store,persistedStore} = configureStore({})