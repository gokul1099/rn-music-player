import {call,put,take,takeLatest} from "redux-saga/effects"
import { GET_TRACK_DETAILS, GET_ALBUM_DETAILS, GET_ARTIST_DETAILS, SEARCH } from './types';
import { success,failure } from "../../utils"
import { getTrackDetailsService,getAlbumDetailsService,getArtistDetailsService,search } from "./services"
import { IAction } from "../../interfaces"

function* getTrackDetailsSaga({type,payload}:IAction):any{
    const response = yield call(getTrackDetailsService,payload)
    if(response.status == 200){
        yield put({type:success(type), data:response?.data})
    }else{
        yield put({type:failure(type), data: response?.message})
    }
}


function* getAlbumDetailsSaga({type,payload}:IAction):any{
    const response = yield call(getAlbumDetailsService,payload)
    if(response.status == 200){
        yield put({type:success(type), data:response?.data})
    }else{
        yield put({type:failure(type), data: response?.message})
    }
}

function* getArtistDetailsSaga({type,payload}:IAction):any{
    const response = yield call(getArtistDetailsService,payload)
    if(response.status == 200){
        yield put({type:success(type), data:response?.data})
    }else{
        yield put({type:failure(type), data: response?.message})
    }
}

function* searchSaga({type,payload}:IAction):any{
    const response = yield call(search,payload)
    if(response?.status == 200){
        yield put({type:success(type), data:response?.data})
    }else{
        yield put({type:failure(type), data: response?.message})
    }
}


export default function* actionWatcher(){
    yield takeLatest(GET_ALBUM_DETAILS,getAlbumDetailsSaga);
    yield takeLatest(GET_ARTIST_DETAILS,getArtistDetailsSaga);
    yield takeLatest(GET_TRACK_DETAILS,getTrackDetailsSaga);
    yield takeLatest(SEARCH, searchSaga)
}