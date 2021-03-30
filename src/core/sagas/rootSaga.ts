import { all,fork} from 'redux-saga/effects'
import { watchIncrementAsync } from './asyncCounter'
import { watchFetchServer } from './fetchReq'

export default function* rootSaga() {
    yield all([watchIncrementAsync(),watchFetchServer()])
}

