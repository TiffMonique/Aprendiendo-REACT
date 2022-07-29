import React from 'react';
import ProTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>{saludo}</h1>

            <p>{subtitulo}</p>

        </>
    );
}

PrimeraApp.prototypes = {
    saludo: ProTypes.string.isRequired,

}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp;