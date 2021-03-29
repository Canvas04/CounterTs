import {put,call,takeEvery} from 'redux-saga/effects'
import { increment } from '../../features/counter/createSlice'

const delay = (ms : number) => new Promise(res => setTimeout(res,ms))
export function* incrementAsync () {
    yield delay(2000)
    yield put({type: increment.type})
}

export function* watchIncrementAsync () {
    yield takeEvery('counter/incrementAsync',incrementAsync)
}

