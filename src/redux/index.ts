import createSagaMiddleWare from "redux-saga"
import {createStore, applyMiddleware} from 'redux'
import { persistReducer, persistStore } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import rootReducers from "./reducers"
import rootSaga from "./sagas"
const sagaMiddleWare = createSagaMiddleWare()
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist:[]
}


const middleware = [sagaMiddleWare]
const composeMiddleWare = applyMiddleware(...middleware)
const configureStore = (initialState:any)=>{
    const persistedReducer = persistReducer(persistConfig,rootReducers)
    const store = createStore(persistedReducer, initialState,composeMiddleWare)
    const persistedStore = persistStore(store)
    sagaMiddleWare.run(rootSaga)
    return {store,persistedStore}
}


export const {store,persistedStore} = configureStore({})