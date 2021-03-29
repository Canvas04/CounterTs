import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleWare from 'redux-saga'
import counter from './features/counter/createSlice'
import WatcherSaga from './core/sagas/rootSaga'
const sagaMiddleWare = createSagaMiddleWare()

const reducer = combineReducers({ counter })
const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare]
})
sagaMiddleWare.run(WatcherSaga)
export type RootState = ReturnType<typeof store.getState>
export { store }
export type AppDispatch = typeof store.dispatch