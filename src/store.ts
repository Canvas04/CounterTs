import {configureStore} from '@reduxjs/toolkit'
import counter from './features/counter/createSlice'
const store = configureStore({
    reducer: {
        counter
    }
})

export type RootState = ReturnType<typeof store.getState>
export {store}
export type AppDispatch = typeof store.dispatch