import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Info } from './components/Info';
import { Song } from './components/Song';

export const MusicLetterApp = () => {

    //State de la busqueda
    const [searchLetter, setSearchLetter] = useState({});
    //State de la letra
    const [letter, setLetter] = useState('');
    //State del artista
    const [info, setInfo] = useState({});
    
    useEffect(() => {
        if(Object.keys(searchLetter).length === 0) return;
        
        const consultAPILetter = async() => {
            const { artist, song } = searchLetter;
            const url = `https://api.lyrics.ovh/v1/${ artist }/${song}`;
            const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

            const [ letter, information ] = await Promise.all([
                axios(url),
                axios(url2)
            ]);
            console.log(letter,information);
           setLetter(letter.data.lyrics);
           setInfo(information.data.artists[0]);
        } 

        consultAPILetter();
        
    }, [searchLetter, info]);
    return (
        <>
            <Form
                setSearchLetter={ setSearchLetter }
            />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Info 
                            info={info}
                        />
                    </div>
                    <div className="col-md-6">
                        <Song
                            letter={ letter }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
