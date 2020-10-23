import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0];
    const [boxsize, setboxSize] = useState()

    const pTag = useRef();

    useLayoutEffect(() => {
        setboxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>
            
            <blockquote className="blockquote text-right" ref={pTag}>  
                <p className="mb-0"> { quote } </p>
            </blockquote>

            <pre>
                { JSON.stringify(boxsize, null, 3) }
            </pre>


            <button className="btn btn-primary" onClick={increment}>Siguiente Quote</button>

        </div>
    )
}
