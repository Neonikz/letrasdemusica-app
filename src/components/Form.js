import React, { useState } from 'react';

export const Form = () => {

    //State del form
    const [search, setSearch] = useState({
        artist:'',
        song:''
    })
    const { artist, song } = search;

    //State del error
    const [error, setError] = useState(false);

    //Funcion para leer el contenido
    const handleInputChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    //Submit del form
    const handleSubmit = e => {
        e.preventDefault();

        //Validacion
        if( !artist.trim() || !song.trim() ){
            return setError(true);
        }
        setError(false);
    }


    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={ handleSubmit }
                    >
                        <fieldset>
                            <legend className="text-center">Buscador de letras de canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre del artista"
                                            onChange={ handleInputChange }
                                            value={ artist }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre de la canción"
                                            onChange={ handleInputChange }
                                            value={ song }
                                        />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
