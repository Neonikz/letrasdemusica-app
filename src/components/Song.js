import React from 'react';

export const Song = ({ letter }) => {

    if(!letter) return null;

    return(
        <>
            <h2>Letra de la Canción</h2>
            <p className="letra">{ letter }</p>
        </>
    )
}
