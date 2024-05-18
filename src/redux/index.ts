import createSagaMiddleWare from "redux-saga"
import {createStore, applyMiddleware} from 'redux'
import { persistCombineReducers, persistStore } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import rootReducers from "./reducers"
import rootSaga from "./sagas"
import persistReducer from "redux-persist/es/persistReducer"
const sagaMiddleWare = createSagaMiddleWare()
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist:["localState"],
    debug:true
}


const middleware = [sagaMiddleWare]
const persistedReducer = persistCombineReducers(persistConfig,{...rootReducers})

const composeMiddleWare = applyMiddleware(...middleware)
const configureStore = (initialState:any)=>{
    const store = createStore(persistedReducer, initialState,composeMiddleWare)
    const persistedStore = persistStore(store)
    sagaMiddleWare.run(rootSaga)
    return {store,persistedStore}
}


export const {store,persistedStore} = configureStore({})