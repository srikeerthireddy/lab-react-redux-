// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { legacy_createStore } from 'redux';
import reducer from './Reducer';
import { DecrementLike,IncrementLike } from './Action';

const store =legacy_createStore(reducer);

export default function LikeCounter() {
    const [count,setCount]=useState(store.getState().count)
    
    store.subscribe(()=>{
        setCount(store.getState().count)
    })

    const handleUnlike=()=>{
        store.dispatch(DecrementLike())
    };
    const handlelike=()=>{
        store.dispatch(IncrementLike())
    };
  return (
    <div>
     <h1>{count}</h1>
     <button onClick={handlelike}>Like</button>
     <button onClick={handleUnlike}>UnLike</button>
    </div>
  )
}