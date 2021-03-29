import { all,fork} from 'redux-saga/effects'
import { watchIncrementAsync } from './asyncCounter'

export default function* rootSaga() {
    yield all([watchIncrementAsync()])
}

