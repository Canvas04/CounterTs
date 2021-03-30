// import { takeEvery,put,  call } from 'redux-saga/effects'
import { StrictEffect } from '@redux-saga/types'
import { put,  call,takeEvery } from 'typed-redux-saga'

import { startFetching, errorRequest, successRequest } from '../reducers/fetchServer/createSlice'
import { getArticles } from './request/articles'


export function* fetchServer(): Generator {
const response = yield call(getArticles)

yield put({type: successRequest.type,payload: response})

}

export function* watchFetchServer() {
    yield takeEvery(`startLoading`, fetchServer)
}