import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core'
import { useAppDispatch, useAppSelector } from './hooks';
import { decrement, increment, reset } from './features/counter/createSlice';
import { watchIncrementAsync, incrementAsync } from './core/sagas/asyncCounter';
import { successRequest } from './core/reducers/fetchServer/createSlice';
function App() {
  const value = useAppSelector(store => store.counter.value)
  const dispatch = useAppDispatch()
  const resultFetch = useAppSelector(store => store.fetchServer.data)[0]
  const lengthResultFetch = Object.keys(resultFetch).length
  const increaseBtnHandler = () => {
    dispatch(increment())
  }
  const descreaseBtnHandler = () => {
    dispatch(decrement())
  }
  const resetBtnHandler = () => {
    dispatch(reset())
  }
  const asyncBtnHandler = () => {

    dispatch({ type: 'counter/incrementAsync' })
  }
  const reqBtnServer = () => {
    dispatch({ type: 'startLoading' })
  }
  return (

    <div className='container'>

      <h1>Counter</h1>
      <h3 className='counter'>{value}</h3>
  
     {lengthResultFetch !== 0 && <h3>Fetch</h3>}
      <div className='container__buttons'>


        <Button variant="outlined" color="primary" onClick={increaseBtnHandler}>
          Increase
        </Button>
        <Button variant="outlined" onClick={resetBtnHandler}>Reset</Button>
        <Button variant="outlined" color="secondary" onClick={descreaseBtnHandler}>
          Decrease
        </Button>
        <Button variant="outlined" color="primary" onClick={asyncBtnHandler} >
          Async increase
        </Button>
        <Button variant="outlined" color="primary" onClick={reqBtnServer} >
          Make fetch request
        </Button>

      </div>
    </div>
  );
}

export default App;
