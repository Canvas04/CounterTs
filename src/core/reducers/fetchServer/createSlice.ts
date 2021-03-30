import { createSlice } from '@reduxjs/toolkit'

interface FetchServer {
    success: boolean
    error: boolean
    loading: boolean
    data: object[]
}

const initialState: FetchServer = {
    success: false,
    error: false,
    loading: false,
    data: [{}]
}

export const fetchServer = createSlice({
    name: 'fetchServer',
    initialState,
    reducers: {
        startFetching: (state) => {
            state.success = false
            state.loading = true
            state.error = false
        }
        ,
        successRequest: (state, action) => {
            state.success = true
            state.loading = false
            state.error = false
            state.data = action.payload.data.articles
        },
        errorRequest: (state) => {
            state.error = true
            state.loading = false
            state.success = false
        }
    }
})

export const { startFetching, successRequest, errorRequest } = fetchServer.actions

export default fetchServer.reducer