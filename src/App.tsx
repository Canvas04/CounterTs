import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core'
import { useAppDispatch, useAppSelector } from './hooks';
import { decrement, increment, reset } from './features/counter/createSlice';
function App() {
  const value = useAppSelector(store => store.counter.value)
  const dispatch = useAppDispatch()
  const increaseBtnHandler = () => {
    dispatch(increment())
  }
  const descreaseBtnHandler = () => {
    dispatch(decrement())
  }
  const resetBtnHandler = () => {
    dispatch(reset())
  }
  return (
  
    <div className='container'>

      <h1>Counter</h1>
      <h3 className='counter'>{value}</h3>
      <div className='container__buttons'>


        <Button variant="outlined" color="primary" onClick={increaseBtnHandler}>
          Increase
</Button>
        <Button variant="outlined" onClick={resetBtnHandler}>Reset</Button>
        <Button variant="outlined" color="secondary" onClick={descreaseBtnHandler}>
          Descrease
</Button>
      </div>
    </div>
  );
}

export default App;
