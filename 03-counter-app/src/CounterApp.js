import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(0); //Retorna un arreglo

    //handleAdd
    const handleAdd = () => {
        //setCounter(counter + 1)
        setCounter((c) => c + 1);
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd} > +1</button>
            <button onClick={() => setCounter(value)} > Reset</button>
            <button onClick={() => setCounter(counter - 1)} > -1</button>
        </>
    )
}

CounterApp.propTypes = {

    value: PropTypes.number
};

export default CounterApp;