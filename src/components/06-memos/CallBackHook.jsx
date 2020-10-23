import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);
    /* const increment = () => {
        setCounter(counter + 1);
    } */

    const increment = useCallback( (num) => {
        setCounter(c => c + num);
    },[setCounter])

    useEffect(() => {
        //??? la funcion no esta cambiando
    }, [increment])

    return (
        <div>
            <h1>useCallBack Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment} />

        </div>
    )
}
